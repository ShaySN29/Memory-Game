import React from 'react'

function HelpPopup(props) {
    // Trigger to popup. is true or false. 
    // if true then popup will show 
    // if false then empty string
  return (props.trigger) ? 
    (
        <div className="popupDiv">
            <div className="popupInner">
                {/* onClick of the X button the setTrigger is passed as a prop and sets te state to false */}
                <button className="popupBtn" onClick={() => props.setTrigger(false)}>X</button>
                {/* Use props.children to pass through elements inside popupinner  */}
                { props.children } 
            </div> 
        </div>
    ) : "";
}

export default HelpPopup;