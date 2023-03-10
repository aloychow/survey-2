from textblob import TextBlob
from datetime import datetime
import pandas as pd
import nltk
import praw
from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA
from pprint import pprint
import numpy as np

import pathlib

# get relative data folder
PATH = pathlib.Path(__file__).parent
DATA_PATH = PATH.joinpath("../Sentiment Analysis/datasets").resolve()

df = pd.read_csv(DATA_PATH.joinpath("reddit.csv"))
df = df.drop(df.columns[0], axis=1)

# print(df)

reddit = praw.Reddit(client_id='cfsrsyk9xPOBBw',
                        client_secret='8oy7adJQblmB558fD0JTU5qM2qvwLQ',
                        user_agent='subSentiment')


## Post Sentiment Analysis

post_sentiment = []

## Comments Sentiment Analysis

for post in range(0, len(df)):
    
    submission = reddit.submission(url=df['permalink'][post])
    submission.comments.replace_more(limit=0)

    comments = set()

    # Top level comments
    for top_level_comment in submission.comments:
        comments.add(top_level_comment.body)
        # print(top_level_comment.body)

    #All comments
    # for comment in submission.comments.list():
    #     print(comment.body)

    if (len(comments) > 0):
        ## Sentiment analysis using Vader sentiment analysis ##
        # nltk.download('vader_lexicon')
        sia = SIA()
        results = []

        for line in comments:
            pol_score = sia.polarity_scores(line)
            pol_score['comment'] = line
            results.append(pol_score)
        #pprint(results[:7], width=100)

        df_comments = pd.DataFrame.from_records(results)

        df_comments['label'] = 0
        df_comments.loc[df_comments['compound'] > 0.2, 'label'] = 1
        df_comments.loc[df_comments['compound'] < -0.2, 'label'] = -1

        # print(df_comments)

        #Check for positive/negative comments

        # print("Positive comments:\n")
        # pprint(list(df_comments[df_comments['label'] == 1].comment)[:5], width=200)
        # print("\nNegative comments:\n")
        # pprint(list(df_comments[df_comments['label'] == -1].comment)[:5], width=200)

        # pprint(df_comments.label.value_counts(normalize=True) * 100)

        # print(len(df_comments[df_comments.label == 1]))
        # print(len(df_comments[df_comments.label == -1]))
        

        if len(df_comments[df_comments.label == 1]) >= len(df_comments[df_comments.label == -1]):
            # print("Positive")
            post_sentiment.append("1")
        else:
            # print("Negative")
            post_sentiment.append("-1")

# print(post_sentiment)
print("Positive: " + str(post_sentiment.count("1")))
print("Negative: " + str(post_sentiment.count("-1")))
