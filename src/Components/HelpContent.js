import React from 'react';

function HelpContent() {
  return (
    <div>
        <ol>
            <li>The cards get shuffled every time the "New Game" button is clicked</li>
            <li>Click a card to flip it over to reveal a sigil</li>
            <li>Flip a second card over to reveal a second sigil</li>
            <li>If the cards do not match they will flip back over</li>
            <li>Remember the sigils and the position of the cards</li>
            <li>Flip another two cards over</li>
            <li>Continue to flip two cards over at a time until all the sigils are matched</li>
            <li>When all the sigils are matched the game is over</li>
            <li>A counter counts the number of turns is takes to match all the sigils</li>
        </ol>
    </div>
  )
}

export default HelpContent;