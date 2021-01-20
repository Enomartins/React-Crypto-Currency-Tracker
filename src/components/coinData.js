import React from 'react'
import './css/coinData.css'

const coinData = ({name, image, symbol, current_price, total_volume, market_cap, price_change_percentage_24h}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img 
                        src={image}
                        alt={name}
                    />
                    <h2>{name}</h2>
                    <p className="coin-symbol">{symbol}</p>
                </div>

                <div className="coin-data">
                    <p className="coin-price">${current_price}</p>
                    <p className="coin-volume">${total_volume.toLocaleString()}</p>
                    {
                        price_change_percentage_24h < 1
                        ? ( <p className="coin-percent red">{price_change_percentage_24h}%</p>)
                        : ( <p className="coin-percent green">{price_change_percentage_24h}%</p> )
                    }
                    <p className="coin-marketcap">Mkt Cap: {market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default coinData
