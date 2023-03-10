import praw
from textblob import TextBlob
import math
from datetime import datetime
import pandas as pd

reddit = praw.Reddit(client_id='cfsrsyk9xPOBBw',
                        client_secret='8oy7adJQblmB558fD0JTU5qM2qvwLQ',
                        user_agent='subSentiment')

# day_end_epoch = datetime.now().timestamp()
# day_start_epoch = day_end_epoch - 60
# url = "https://api.pushshift.io/reddit/{}/search?limit=1000&sort=desc&author={}&before="

with open('reddit_list.txt') as f:
    for line in f:
        subreddit = reddit.subreddit(line.strip())
        
        posts = []

        for post in subreddit.new(limit=100):

            # print(post.title)
            # print(post.score)

            posts.append([post.title,
                            post.score,
                            post.upvote_ratio,
                            'https://www.reddit.com' + post.permalink,
                            post.subreddit,
                            post.url,
                            post.comments,
                            post.author,
                            post.selftext,
                            datetime.fromtimestamp(post.created)
                            ])

            df = pd.DataFrame(posts, columns=['title', 
                                                'score', 
                                                'upvote_ratio', 
                                                'permalink',
                                                'subreddit', 
                                                'url', 
                                                'num_comments', 
                                                'author',
                                                'body', 
                                                'created']
                                 )
        df.to_csv("datasets/reddit.csv")
        print(df)


        # sub_submissions = subreddit.submissions(day_start_epoch, day_end_epoch)
        
        # sub_sentiment = 0
        # num_comments = 0
        # for submission in sub_submissions:
        #      if not submission.stickied:
        #          submission.comments.replace_more(limit=None)
        #          for comment in submission.comments.list():
        #              blob = TextBlob(comment.body)
                     
        #              comment_sentiment = blob.sentiment.polarity
        #              sub_sentiment += comment_sentiment

        #              num_comments += 1

        # print('/r/'+str(subreddit.display_name))
        # try:
        #     print('Ratio: ' + str(math.floor(sub_sentiment/num_comments*100)) + '\n')
        # except:
        #     print('No comment sentiment \n')
        #     ZeroDivisionError
