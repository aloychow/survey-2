import datetime as dt
import matplotlib.pyplot as plt
from matplotlib import style
from mpl_finance import candlestick_ohlc
import matplotlib.dates as mdates
import pandas as pd
import pandas_datareader as web


style.use('ggplot')
 
# start = dt.datetime.now() - dt.timedelta(365*5+100)
# end = dt.datetime.now()

# df = web.DataReader('TSLA', 'yahoo', start, end)

# df.to_csv('datasets/Stocks Data.csv')

df = pd.read_csv('datasets/Stocks Data.csv', parse_dates = True, index_col = 0)

## Graphs Plotting
ax1 = plt.subplot2grid((6,1), (0,0), rowspan=5, colspan=1)
ax2 = plt.subplot2grid((6,1), (5,0), rowspan=1, colspan=1, sharex=ax1)
ax1.xaxis_date()

## ------------ Creating rolling averages (15,20,30,50,100,200) ------------ ##

df['100ma'] = df['Adj Close'].rolling(window=100).mean()
df['50ma'] = df['Adj Close'].rolling(window=50).mean()

df.dropna(inplace=True)

ax1.plot(df.index, df['Adj Close'])
ax1.plot(df.index, df['100ma'])
ax1.plot(df.index, df['50ma'])
ax2.bar(df.index, df['Volume'])

## ------------------------------------------------- ##

## ------------ Regrouping time periods ------------ ##

# df_ohlc = df['Adj Close'].resample('10D').ohlc()
# df_volume = df['Volume'].resample('10D').sum()

# df_ohlc.reset_index(inplace=True)

# df_ohlc['Date'] = df_ohlc['Date'].map(mdates.date2num)

# candlestick_ohlc(ax1, df_ohlc.values, width=2, colorup='g')
# ax2.fill_between(df_volume.index.map(mdates.date2num), df_volume.values, 0)

## ------------------------------------------------- ##
 
plt.show()