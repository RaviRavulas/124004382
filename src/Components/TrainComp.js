import React, { useState } from 'react'

const TrainComp = ({train}) => {
const [AC,setAc]=useState(true)
const changeHandler=(event)=>{
    console.log("eve ",event.target.value)
    if(event.target.value==='AC'){
        setAc(true)
    }else{
        setAc(false)
    }

}
  return (
    <div>
                    <h2>{train.trainName}</h2>
                    <h3>({train.trainNumber})</h3>
                    <div className='select'>
                    <select onChange={changeHandler}>

                        <option value="AC">AC</option>

                        <option value="SLEEPER">SLEEPER</option>
                    </select>
                    <p>{AC===true?'AC':'sleeper'}</p>
                    
                    </div>
                    <div className='select'>
                        <p>seats avialbel</p>
                        <p>{AC===true?train.seatsAvailable.AC:train.seatsAvailable.sleeper}</p>


                    </div>
                    <div className='select'>
                        <p>Price</p>
                        <p>{AC===true?train.price.AC:train.price.sleeper}</p>


                    </div>
                </div>
  )
}

export default TrainComp