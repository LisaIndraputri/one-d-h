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
    // Example -> from 1200000 to RP1.200.000
    // you can use price.currency to decide the currency
    // After that please create the unit test
    return `Price at ${formatMoney(data.price)}`
  }
  return (
    <div className='card-container'>
      <h3>{ titleCard() }</h3>
      <p>{ priceCard() }</p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card

