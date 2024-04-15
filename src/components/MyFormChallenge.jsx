import { useState, useRef } from 'react';
const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
import BoxColor from './BoxColor';


function MyForm() {
  const [color, setColor] = useState("")
  const inputRef = useRef(null);
  return (
    <>
      <input
        type="text"
        placeholder="Elige el color"
        className="inputClass"
        onChange={() => setColor(inputRef.current.value)}
        value={color}
        ref={inputRef}
      ></input>
      <ul className='container'>
        {colors.map((col, index) => {
     
          return (<>
            <li key={index}><BoxColor key={index} color={col} value={color} /></li>
          </>)
        })}
      </ul>
    </>
  );
}

export default MyForm;