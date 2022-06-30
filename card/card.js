import './card.css'

function Card({ onYes, onNo, title }) {
  return (
    <div className="card__wrap">
      <p>{title}</p>
      <button onClick={onYes}>YES</button>
      <button onClick={onNo}>NO</button>
    </div>
  )
}

export default Card
