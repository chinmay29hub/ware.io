import {useState} from 'react';
function Slots() {
    

   const [slotColor, setSlotColor] = useState("darkseagreen")
    const mystyle = {
        width: "50px",
        height: "50px",
        borderRadius: "20px",
        backgroundColor: slotColor,
        display: "inline-block",
        margin:"2px",
      };
      const handleClick=()=>{
        if(slotColor=="darkseagreen"){setSlotColor("green")}
        else setSlotColor("darkseagreen")
      }
    return (
      <div style={mystyle} onClick={handleClick}  >
        {/* <span style={mystyle}></span> */}
      </div>
    );
  }
export default Slots;
  