# import psaw
# from psaw import PushshiftAPI
import pathlib

import praw
import pandas as pd
import psycopg2
from psycopg2 import extras
import datetime as dt
import config
# pip install psycopg2-binary

import requests


connection = psycopg2.connect(host=config.DB_HOST, database=config.DB_NAME, user=config.DB_USER, password=config.DB_PASS) # Connect to local database
cursor = connection.cursor(cursor_factory=extras.DictCursor) # Create a cursor to iterate

# cursor.execute('''
#     SELECT * FROM mention
# ''')

# rows = cursor.fetchall() # Fetch all existing rows

# stocks = []
# for row in rows:
#     stocks.append(row['message']) # Create list of all messages


# Retrieve path
PATH = pathlib.Path(__file__).parent # Get Path

reddit = praw.Reddit(client_id='cfsrsyk9xPOBBw', # Reddit key
                     client_secret='8oy7adJQblmB558fD0JTU5qM2qvwLQ',
                     user_agent='subSentiment')

# url = "https://api.pushshift.io/reddit/{}/search?limit=1000&sort=desc&author={}&before=" - figure out how to unlimited query reddit

false_ticker = ['DD', 'MOON', 'YOLO', 'A', 'HOLD', 'ARE', 'ONE', 'EV', 'PT', 'ALL', 'AND',
'API', 'AM', 'PM'] # List of commonly misidentified tickers (i.e. exist but is rarely referring to the ticker)

num = 0 # Provide counter to keep track of posts

with open(str(PATH)+'/subreddits.txt') as f: # Open text file
    for line in f:
        subreddit = reddit.subreddit(line.strip()) # Get all subreddits to webscrape

        start = dt.datetime.now() - dt.timedelta(7)  # start date

        posts = []

        for post in subreddit.new(limit=None): # Set limit for webscrape
            # print(post.title)
            # print(post.score)

            if dt.datetime.fromtimestamp(post.created) < start: # If limit reached, break
                print('Done with subreddit ' + line)
                break

            posts.append([
                post.title,
                post.subreddit,
                post.url,
                post.author,
                dt.datetime.fromtimestamp(post.created)
                ])

            df = pd.DataFrame(posts, columns=[
                'title',
                'subreddit',
                'url',
                'author',
                'created'
                ])
            
            num += 1
            print('ok' + str(num)) # Keep track of progress

            words = post.title.split() # Split words

            cashtags = list(set(filter(lambda word: word.lower().startswith("$"), words))) # Create list of cashtags
            uppercase = list(set(filter(lambda word: word.isupper(), words))) # Create list of uppercase words

            list_final = [] # Create a new list
            
            cashtags = [word[1:] for word in cashtags] # Remove $ symbol
            list_final.extend(cashtags) # Extends cashtag list
            
            uppercase = [word for word in uppercase if word not in false_ticker] # Remove misidentified tickers 
            list_final.extend(uppercase) # Extends capitalised list

            for word in list_final:
            # # -------------------------------------------------------- #
                submitted_time = dt.datetime.fromtimestamp(post.created).isoformat() # Get time
                submitted_time = submitted_time[:-9]


                # Gets all tickers from yahoo finance
                url = "http://d.yimg.com/autoc.finance.yahoo.com/autoc?query={}&region=1&lang=en".format(word) # Call ticker symbol API
                result = requests.get(url).json()

                try:
                    # Checks if ticker entered exists, breaks once found (get Name)
                    for x in result['ResultSet']['Result']:
                        if x['symbol'] == word.upper():
                            name = x['name']

                            # Add webscrape into database
                            cursor.execute('''
                            INSERT INTO mention (dt, stock_ticker, stock_name, message, source, url)
                            VALUES (%s, %s, %s, %s, %s, %s)
                            ''', (submitted_time, word, str(name), post.title, str(post.subreddit), post.url))

                            connection.commit() # Commit

                except Exception as e:
                            print(e)
                            connection.rollback() # If error, rollback
                
        df.to_csv(str(PATH)+'/reddit_posts.csv') # Saves file


