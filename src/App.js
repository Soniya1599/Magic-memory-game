import './App.css';
import { useEffect, useState } from "react"
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src" : "/img/helmet-1.png", matched: false },
  {"src" : "/img/potion-1.png", matched: false },
  {"src" : "/img/ring-1.png", matched: false },
  {"src" : "/img/scroll-1.png", matched: false },
  {"src" : "/img/shield-1.png", matched: false },
  {"src" : "/img/sword-1.png", matched: false }
]

//1. App created

function App() {
  //3. Update the state of cards
  const [cards, setCards] = useState([]);  
  const [turns, setTurns] = useState(0);

  // 7.(1-2) Lets create a states and store and match the cards of user choices.
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //13.(2) creating a state for disabled prop.
  const [disabled, setDisabled] = useState(false);

  //2. shuffle cards logic to shuffle the cards randomly using sort and Math.random() method:-
  const shuffleCards = () => {
    // 1. Creating an array which returns 12 cards, including copy of each six images above.
    // 2. We need to shuffle the cards randomly using sort method.
    // 3. We will apply random id on each card.

    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    // 14.(3) setting the choice one and two when starting a new game.
    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    // 4. Set Turns 
    setTurns(0);
  }

  // console.log(cards, turns);

  //7.(5-6) handle a choice function and pass it to SingleCard function as Prop.
  const handleChoice = (card) => {
    //7.(8-9) Let's check if its choice one or two :-
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // This below useEffect will fire initially and later when the chocie one and choice two updates will octate.
  useEffect(() => {
    //8.(1) check do we have value for both choices choice one and choice two :-
    if(choiceOne && choiceTwo){
      setDisabled(true);

      //8.(2-3) Now when we have both the choices selected we will check if they matched or not:-
      if(choiceOne.src === choiceTwo.src){
        // 11. Let's remove log and set the matched property to true.
        // console.log("cards matched");
        setCards((prevCards) => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true }
            } else {
              return card;
            } 
          })
        } )
        // 9. we will call reset function
        resetTurn();
      } else {
        console.log("cards do not matched");  
        // 12.(5) applyt delay to resetTurn here 
        setTimeout(() => resetTurn(), 1000);
      }
    }

  },[choiceOne,choiceTwo])  

  //9. function to reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    // 10. setting turns
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  //14.(2) starting a new game automatically
  useEffect(() => {
    shuffleCards();
  },[])
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/*5. Lets create the card grid */}
      <div className='card-grid'>
        {
          cards.map((card) => (
            // 6. created a single card component and moved the card template
            <SingleCard 
              card={card} 
              key={card.id} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched} //12.(1-2) Logic to flip card 
              disabled={disabled} //13.(1) creating disabled property
            />
          ))
        }
      </div>

      {/* 14.(1) Representing turns */}
      <p>Turns: {turns}</p>  
    </div>
  );
}

export default App;
