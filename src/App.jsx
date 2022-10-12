import Card from './components/Card'
import {useState} from 'react'

function App() {
  const [isShow, setIsShow] = useState(false)
  const cardList = [{
      title: 'first',
      price: {
        currency: 'IDR',
        amount: 1200000
      }
    }, {
      title: 'second',
      price: {
        amount: 24000
      }
    }
  ]
  const renderImg = () => {
    setTimeout(() => {
      setIsShow(true)
    }, 1000)
  }
  renderImg()
  return (
    <div className="app-container d-flex-center">
      <h3>List Card</h3>
      <div className='app-img'>
        {/* TASK
        Please update Card Component to be this card example */}
        {
          isShow ? <img src={require('./assets/imgs/example.png')} alt="example-img" /> : ''
        }
      </div>
      {/* TASK
      please resolve the error in console */}
      {
        cardList.map(itm => 
          <Card 
            data={itm}
          />
        )
      }
    </div>
  );
}

export default App;
