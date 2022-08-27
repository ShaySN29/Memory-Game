import React, { useState } from 'react';
// Import Components
import HelpPopup from './HelpPopup';
import HelpContent from './HelpContent';

function Help() {
  // Initialise state of the popup button
  const [popupButton, setPopupButton] = useState(false);

  return (
    <div>
      {/* onClick of the help button the state of the popup is set to true */}
      <button onClick={()=>setPopupButton(true) }>Help</button>
      {/* popupButton variable sets the trigger to true */}
      {/* setTrigger is passed as a prop to the Helppopup component to close the popup by changing the state to false */}
      <HelpPopup trigger={popupButton} setTrigger={setPopupButton}>
        <h3>Rules:</h3>
        <HelpContent />
      </HelpPopup>
    </div>
  )
}
export default Help;
