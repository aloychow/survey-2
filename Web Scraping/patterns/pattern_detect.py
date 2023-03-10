import talib
import yfinance as yf

data = yf.download("SPY", start="2020-01-01", end="2020-12-15")

morningstar = talib.CDLMORNINGSTAR(
    data['Open'], data['High'], data['Low'], data['Close'], penetration=0)

engulfing = talib.CDLENGULFING(
    data['Open'], data['High'], data['Low'], data['Close'])

print(morningstar[morningstar !=0])
print(engulfing[engulfing !=0])
