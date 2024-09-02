import { useState } from "react"

const ArrayComponent = () => {

    const array = [10, 8, 6, 11, 15, 1, -2, 0]

    const [arr, setArr] = useState(array)

    function sortedArray(){
        const newArr = [...arr].sort((a,b)=>a-b)
        setArr(newArr)
    }

  return (
    <>
    <ul>
    {arr.map((item, index)=>{
            return <li key={index}>{item}</li>
        })}
    </ul>
    
    <button onClick={sortedArray}>Add</button>
    </>
  )
}

export default ArrayComponent