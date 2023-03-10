
-- USE THIS ONLY
CREATE TABLE mention (
    stock_ticker TEXT,
    stock_name TEXT,
    message TEXT NOT NULL,
    source TEXT NOT NULL,
    url TEXT NOT NULL,
    dt TIMESTAMP WITHOUT TIME ZONE NOT NULL
    -- PRIMARY KEY (stock_id, dt)
    -- CONSTRAINT fk_mention_stock FOREIGN KEY (stock_id) REFERENCES stock (id)
);

-- CREATE INDEX ON mention (stock_id, dt DESC);
-- SELECT create_hypertable('mention', 'dt')

--------------------------------

SELECT count(*) as num_mentions, stock_name
FROM mention
GROUP BY stock_name 
ORDER BY num_mentions DESC;

----------------------------------
CREATE TABLE stock (
    id SERIAL PRIMARY KEY, -- pk
    symbol TEXT NOT NULL,
    name TEXT NOT NULL,
    exchange TEXT NOT NULL,
    is_etf BOOLEAN NOT NULL
);

CREATE TABLE mention (
    stock_id INTEGER,
    message TEXT NOT NULL,
    source TEXT NOT NULL,
    url TEXT NOT NULL,
    dt TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY (stock_id, dt)
    -- CONSTRAINT fk_mention_stock FOREIGN KEY (stock_id) REFERENCES stock (id)
);

CREATE INDEX ON mention (stock_id, dt DESC);
SELECT create_hypertable('mention', 'dt')


CREATE TABLE etf_holding (
    etf_id INTEGER NOT NULL, -- composite pk
    holding_id INTEGER NOT NULL, -- composite pk
    dt DATE NOT NULL, -- composite pk
    shares NUMERIC,
    weight NUMERIC,
    PRIMARY KEY(etf_id, holding_id, dt),
    CONSTRAINT fk_etf FOREIGN KEY (etf_id) REFERENCES stock (id),
    CONSTRAINT fk_holding FOREIGN KEY (holding_id) REFERENCES stock (id)
);

CREATE TABLE stock_price (
    stockid INTEGER NOT NULL, -- composite pk
    dt TIMESTAMP WITHOUT TIME ZONE NOT NULL, -- composite pk
    open NUMERIC NOT NULL,
    high NUMERIC NOT NULL,
    low NUMERIC NOT NULL,
    close NUMERIC NOT NULL,
    volume NUMERIC NOT NULL,
    PRIMARY KEY(stockid, dt),
    CONSTRAINT fk_stock FOREIGN KEY (stock_id) REFERENCES stock(id)
);

CREATE INDEX ON stock_price (stock_id, dt DESC); -- optimise db

SELECT create_hypertable('stock_price', 'dt') -- create ht









