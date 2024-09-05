import { useState } from "react";

function NumberConverter() {

  const [input,setInput]=useState(0)
  const buttons=["decimal","octadecimal","hexadecimal"]
  const [answer,setAnswer]=useState()

  function handleInput(event){
    setInput(event.target.value)
  }

  function handleConvert(input,type){
    if (type=="decimal"){
      setAnswer(parseInt(input,2))
    }
    if (type=="octadecimal"){
      let decimal=parseInt(input,2)
      setAnswer(decimal.toString(8))
    }
    if (type=="hexadecimal"){
      let decimal=parseInt(input,2)
      setAnswer(decimal.toString(16))
    }
  }

  return (
    <>
      <div>
        <div>Number Converter</div>
        <div>
          <input value={input} onChange={handleInput} placeholder="enter binary number"/>
        </div>
        <div>
          {buttons.map(btn=>{
            return (
              <button key={btn} onClick={()=>handleConvert(input,btn)}>
                {btn}
              </button>
            )
          })}
        </div>
        <div>
          {answer}
        </div>
      </div>
    </>
  );
}

export default NumberConverter;
