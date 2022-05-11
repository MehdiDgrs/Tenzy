import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid'
import Confetti from "react-confetti";

function App() {
  let randomNumber = () => {
    let newArr = [];
    for (let i = 0 ; i<10 ; i++) {
        newArr.push(
          {value:Math.floor(Math.random()*6 + 1  ),
          isHeld:false,
          id: nanoid()
          
          }
          )

    }
    return newArr
    
}



 let [dices,setDices] = React.useState(randomNumber());
   let randomDices = dices.map((dice,index) => {
    return(<Die holdFunction={() => { holdDice(dice.id)}} key ={dice.id} number={dice.value} isHeld={dice.isHeld}/>)
  })
     
  console.log(dices)


  let holdDice = id => {
     setDices(previous => 
    previous.map(x => {
       return   x.id === id ? {...x,isHeld:!x.isHeld} : x
       })
    
     )
  }
 
   let rollDiceKeepingHeld = () => {
     setDices(previous => previous.map((x,i) => {
       return x.isHeld ? {...x,value:previous[i].value} : {...x,value:Math.floor(Math.random()*6 + 1  )}

     }))
     

   }
 let [fenzy,setFenzy] = React.useState(false);

React.useEffect(()=> {
  dices.every(x=> x.isHeld) && 
  dices.every(x => x.value === dices[0].value)
   
  
  ? setFenzy(true) : setFenzy(false)
}
 

 ,dices)
 console.log(fenzy)
 console.log(fenzy)

 return (
   <main>
    
     <section >
       <h1 className="capitalize text-6xl text-center my-6 text-gray-600">Tenzy</h1>
       <article className="grid grid-cols-5 grids-rows-2 gap-6 w-9/12  align-middle container  m-auto my-40">
  {randomDices}
  </article> 
  {
  fenzy ?  <button  onClick={(e) => setDices(randomNumber)}className="flex justify-center my-button bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mx-auto s w-50"><Confetti/> 
 New game
</button>  :
  
 <button onClick={(e)=>{e.preventDefault(), rollDiceKeepingHeld()}} className="flex justify-center my-button bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mx-auto s w-50 ">
  Roll the dices
</button>
}
  </section>
 </main>)
  
}

export default App;
