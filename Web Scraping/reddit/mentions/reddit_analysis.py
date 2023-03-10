import pandas as pd
import pathlib

PATH = pathlib.Path(__file__).parent

df = pd.read_csv(str(PATH) + '/Reddit_Mentions.csv')
df_sum = pd.read_csv(str(PATH) + '/Reddit_Mentions_Sum.csv')

print(df_sum)
# print(df)
# list_ticker = df['stock_ticker'].unique()
# print(list_ticker)

# for ticker in list_ticker:
#     df_individual = df[df['stock_ticker'] == ticker]

#     print(df_individual)