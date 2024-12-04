import React from 'react'
import "./SingleCard.css";


function SingleCard({card, handleChoice, flipped, disabled}) {   

// 7.(3-4 & 7) lets create a click event and a handleClick function to handle the click.
const handleClick = () => {
    // 13.(5) checking ig the diabled is false or not, if its false then click the other cards to make choice again. 
  if(!disabled){
    handleChoice(card);
  }
}

  return (
    <div className='card'>
        {/* 12.(3) applying flipped class to flip card or not */}
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt='card front' />
            <img 
            className='back' 
             src='/img/cover.png' 
             onClick={handleClick}
             alt='card back' 
            />
        </div>
    </div>
  )
}

export default SingleCard;
