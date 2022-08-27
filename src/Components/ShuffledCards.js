import React, {useState, useEffect} from 'react';
// Import Images for cardImages array
import starkImage from "../Images/img_stark.png";
import targaryenImage from "../Images/img_targaryen.png";
import baratheonImage from "../Images/img_baratheon.png";
import lannisterImage from "../Images/img_lannister.png";
import greyjoyImage from "../Images/img_greyjoy.png";
import boltonImage from "../Images/img_bolton.png";
// Import Individual Card Component
import IndividualCard from './IndividualCard';

// Array of Objects for each card including the image and a matched property
const cardImages = [
  {src: starkImage, matched: false},
  {src: targaryenImage, matched: false},
  {src: baratheonImage, matched: false},
  {src: lannisterImage, matched: false},
  {src: greyjoyImage, matched: false},
  {src: boltonImage, matched: false},
];
  
function ShuffledCards() {
  // Initialising state of the cards
  const [cards, setCards] = useState([])
  // Initialising state of the number of turns
  const [turns, setTurns] = useState(0)
  // Initialising state for the selected cards
  const [selectedCardOne, setselectedCardOne] = useState(null)
  const [selectedCardTwo, setselectedCardTwo] = useState(null)

  // Function below: Duplicates the 6 cards, Randomise the order of the cards in the array and then applies an ID to each card
  const shuffleCards = () => {
    // (...cardImages) spread the cards twice in the new array thus there are now 6 pairs and 12 cards in total
    const shuffledCards = [...cardImages, ...cardImages]
    // function for each pair of items in the array
    // math.random creates a random number between 0 and 1. If it is a negative number then the items will remain in the same order
    // when the number is positive the order will be switched around
    .sort( () => Math.random() -0.5)
    // map through array and give each item a random ID 
    .map((card) => ({...card, id: Math.random() }));

    // Change the state of the cards to shuffled cards and turns remains 0
    setCards(shuffledCards);
    setTurns(0);
    // Resets the selected cards state to zero when a new game begins
    setselectedCardOne(null);
    setselectedCardTwo(null);
  }

  // Handles the selected Card
  const handleSelectedCard = (card) => {
    // console.log(card)
    // If selectedCardOne is null then setselectedCardOne is run
    // If selectedCardOne is !null and has value then there is a selection for cardOne so setselectedCardTwo is run
    selectedCardOne ?  setselectedCardTwo(card): setselectedCardOne(card)
  }

  // Evaluate the Selected cards
  // useEffect fires the function when component first mounts and whenever a dependency changes
  useEffect(() => {
    if (selectedCardOne && selectedCardTwo) {
      // console.log(selectedCardOne.src)  
      // console.log(selectedCardTwo.src)
      
      // If the 2 selected cards src are equal therefore they match. Update the cards state by taking the previous state
      if (selectedCardOne.src === selectedCardTwo.src) {
        setCards(prevCards => {
          // Return a new array of cards by using map(). If card src matches the selectedCard src, the matched property is set to true
          return prevCards.map(card => {
            if (card.src === selectedCardOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })

        newTurn()
      } else {
        // Delay in flipping the cards back if they do not match
        setTimeout(() => newTurn(), 1000)
      }
    }
  }, [selectedCardOne, selectedCardTwo])

  // Reset the selectedCards to null again
  // Changes the state of the turns to previous state +1
  const newTurn = () => {
    setselectedCardOne(null)
    setselectedCardTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  } 

  // Alerting the user when they have won
  // Filter through the cards array and create a new array matchedCards with all the matched cards.
  const matchedCards = cards.filter((card) => {
    return card.matched === true
  })
  // console.log(matchedCards)
  // If the length of the matched cards array is equal to the length of the cards array and greater than 0, 
  // then the palyer is alerted that they have won
  if (matchedCards.length === cards.length && matchedCards.length > 0) {
    alert("Congratulations! You Have Won The Memory Game Of Thrones")
  }

  // The cards are displayed when the game begins
  useEffect (() => {
    shuffleCards()
  }, [])

  return (
    <div>
      <button onClick={shuffleCards}>New Game</button>

      <div className="cardGrid">
        {/*map through the card in state  */}
        {cards.map(card => (
          <IndividualCard 
            key={card.id}                   // Parent element must have a key property
            card={card} 
            handleSelectedCard={handleSelectedCard} 
            // A card is flipped if the card iterated is equal to the first or second card selected or if the card is matched
            flipped = {card === selectedCardOne || card === selectedCardTwo || card.matched}
          />
        ))}
      </div>
      
      <h5>Turns: {turns}</h5>
    </div>
  )
}

export default ShuffledCards;
  