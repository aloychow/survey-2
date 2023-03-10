import datetime as dt
import os
import pickle

import bs4 as bs
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import pandas_datareader.data as web
import requests
from matplotlib import style

style.use('ggplot')

## Webscraping Function
def save_sp500_tickers():
    resp = requests.get('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
    
    ## Define bs object
    soup = bs.BeautifulSoup(resp.text, 'lxml')

    ## Find table info
    table = soup.find('table', {'class':'wikitable sortable'})
    
    tickers = []
    
    ## Iterate through the rows, and extracts the first table data (column)
    for row in table.findAll('tr')[1:]:
        ticker = row.findAll('td')[0].text

        ## Replace dot(.) with hyphen(-) (different naming convention)
        ticker = row.findAll('td')[0].text.strip().replace('.','-')

        ## Replace newline character at the end of each webscrape
        new_ticker = ticker.replace('\n','')

        tickers.append(new_ticker)

    ## Dump pickle file
    with open('datasets/sp500_companies', 'wb') as f:
        pickle.dump(tickers, f)

    print(tickers)
    return tickers


def get_yahoo_data(reload_sp500=False):
    if reload_sp500:
        tickers = save_sp500_tickers()
    else:
        tickers = pd.read_pickle(r'datasets/sp500_companies')

    if not os.path.exists('stock_dfs'):
        os.makedirs('stock_dfs')

    start = dt.datetime(2020,1,1)
    end = dt.datetime.now()

    for ticker in tickers:
        if not os.path.exists('stock_dfs/{}.csv'.format(ticker)):
            df = web.DataReader(ticker, 'yahoo', start, end)
            df.to_csv('stock_dfs/{}.csv'.format(ticker))
        else:
            print('Already have {}'.format(ticker))


def compile_data():
    tickers = pd.read_pickle(r'datasets/sp500_companies')

    main_df = pd.DataFrame()

    for count,ticker in enumerate(tickers):
        df = pd.read_csv('stock_dfs/{}.csv'.format(ticker))
        df.set_index('Date', inplace=True)

        df.rename(columns={'Adj Close': ticker}, inplace=True)
        df.drop(['Open','High','Low','Close','Volume'], 1, inplace=True)

        if main_df.empty:
            main_df = df
        else:
            main_df = main_df.join(df, how='outer')

        print(main_df.head())
        main_df.to_csv('stock_dfs/sp500_joined.csv')

def visualise_data_correlation():
    df = pd.read_csv('stock_dfs/sp500_joined.csv')

    df_corr = df.corr() # Calculate correlation between stocks (adj close)
    print(df_corr)

    ## Print correlation heatmap (warning - very laggy)
    # data = df_corr.values # store inner data (exclude headers) as a np array
    # fig = plt.figure() # specify figure
    # ax = fig.add_subplot(1,1,1) # define axes

    # heatmap = ax.pcolor(data, cmap=plt.cm.RdYlGn) # color setting for heatmap (red yellow green range)
    # fig.colorbar(heatmap) # creates a legend
    # ax.set_xticks(np.arange(data.shape[0]) + 0.5, minor=False) # creates tick markings at every 1/2 interval (e.g 1.5, 2.5, 3.5)
    # ax.set_yticks(np.arange(data.shape[1]) + 0.5, minor=False) # likewise
    # ax.invert_yaxis() # remove gap at top of graph
    # ax.xaxis.tick_top() # moves x-axis ticks from bottom to top

    # column_labels = df_corr.columns # gets the labels
    # row_labels = df_corr.index

    # ax.set_xticklabels(column_labels) # set labels to axes
    # ax.set_yticklabels(row_labels)
    # plt.xticks(rotation=90) 
    # heatmap.set_clim(-1,1) # set values range of heatmap
    # plt.tight_layout()
    # plt.show()


## -------------------------- Call Functions ------------------------ ##

## Read Pickle File
# tickers = pd.read_pickle(r'datasets/sp500_companies')
# print(tickers)

## Get Yahoo Data
#get_yahoo_data() # Add True inside argument to reget data

## Join csv files
# compile_data()

## Visualise correlation data
visualise_data_correlation()
