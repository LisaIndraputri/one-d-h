import Card from './components/Card'

function App() {
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
  return (
    <div className="app-container d-flex-center">
      <h3>List Card</h3>
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
