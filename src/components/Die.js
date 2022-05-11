import React, { PureComponent } from 'react' 

export default function Die(props) {

  
    

    return (
        <div onClick={ props.holdFunction} className=" text-gray-600 justify-center shadow-gray-300 shadow-xl hover:shadow-gray-400
         border-2 border-gray-200 rounded-lg flex w-24 h-24 cursor-pointer mx-auto" style={{backgroundColor:props.isHeld ? '#59E391' : 'white'}}><h2 className="flex  justify-center align-middle text-4xl flex-col" id={props.id}>{props.number}</h2></div>

    )
}
