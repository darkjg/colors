import { useEffect, useState, useRef } from 'react';
function boxColor({ color, value }) {
  const valueRef = useRef(null);
  const [classList, setClassList] = useState('');

  const boxCSS={
    color:color,
    backgroundColor: color == value ? `${color}` : null
  }

  useEffect(() => {
    setClassList(valueRef.current.classList)
    console.log(classList)
  }, [])

  return (
    <>
    {console.log(classList)}
      <div ref={valueRef} className={`box ${color}`} style={boxCSS}>
        {color == value ? <p style={{ color: 'black' }}>Yes, I´m {value} color</p> : <p>I´m not a {value} color</p>}
      </div>
    </>
  )
}
export default boxColor;  
