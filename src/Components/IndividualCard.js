import React from 'react';


function IndividualCard( { card, handleSelectedCard, flipped } ) {

  const handleClick = () => {
    handleSelectedCard(card)
  }

  return (
    <div className="card">
      {/* If flipped value is true then the flipped class is applied */}
      <div className={flipped ? "flipped" : "" }>
        <img className="cardFace" src={card.src} alt="card face" />
        <img className="cardReverse" src={require('../Images/img_reverse.png')} alt="card reverse" onClick={handleClick} />  
      </div>
    </div>
  )
}

export default IndividualCard;