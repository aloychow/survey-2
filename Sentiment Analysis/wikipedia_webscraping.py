import bs4 as bs
import datetime as dt
import os
import pickle
import requests
import pandas as pd
import pandas_datareader.data as web

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
        tickers = save_sp500_tickers
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

get_yahoo_data()

## Read Pickle File
# tickers = pd.read_pickle(r'datasets/sp500_companies')
# print(tickers)