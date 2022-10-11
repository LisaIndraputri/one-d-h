import React from 'react'
import PropTypes from 'prop-types'
import formatMoney from '../utils/formatMoney'

function Card({data}) {
  const titleCard = () => {
    const mainTitle = data.title ? data.title : 'Common'
    return mainTitle + ' Card'
  }
  const priceCard = () => {
    // TASK 
    // Please create utils to show price amount
    // Example -> from 1200000 to 1.200.000
    // After that please create the unit test
    return `Price at ${formatMoney(data.price)}`
  }  
  const pressCard = () => {
    // TASK
    // Please stop this alert from being called when user click the button 
    alert('card')
  }
  const pressBuy = () => {
    alert('buy')
  }
  return (
    <div className='card-container' onClick={pressCard}>
      <h3>{ titleCard() }</h3>
      <div>
        <p className='card-price'>{ priceCard() }</p>
        <div className="button" onClick={pressBuy}>Buy</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card

