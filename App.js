import './App.css'
import questions from './data/questionsdata'
import books from './data/booksdata'
import { useState } from 'react'
import Card from './card/card'

function App() {
  let [entityId, setEntityId] = useState('1')
  let [isLast, setIsLast] = useState(false)

  const cardProps = isLast ? books[entityId] : questions[entityId]

  function handleYes() {
    setEntityId(cardProps.nextYes)
  }

  function handleNo() {
    setEntityId(cardProps.nextNo)
  }

  return (
    <div className="wrap">
      <div>
        <Card
          onYes={handleYes}
          onNo={handleNo}
          title={cardProps.title}
          description={cardProps.description}
        />
      </div>
    </div>
  )
}

export default App
