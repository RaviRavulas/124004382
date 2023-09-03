import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './trains.css'
import TrainComp from './TrainComp';
const accessToken='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3Mjc4NzIsImNvbXBhbnlOYW1lIjoic2FzdHJhIiwiY2xpZW50SUQiOiIwODAwOGI2NC0zZWZkLTRmNTUtYmM3ZC0wNzNjYTE4ZjY2MDQiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMTI0MDA0MzgyIn0.6JHrhX26fOQgVGDj_qYzGMcOlPlYt-2izPWismLCiUc'
const url='http://20.244.56.144:80/train/trains'
const Trains = () => {
    const [trains, setTrains] = useState([]);
    

    useEffect(() => {
      
      axios.get(url, {
        headers: {
          'Authorization': accessToken,
        },
      })
      .then((response) => {
        
        const data = response;
        console.log('data is ',data.data)
        setTrains(data.data);
      })
      .catch((error) => {
        console.log("unable to  get the data")
      });
    }, []);

    return (
      <div className='trains'>
        <h2>All Trains</h2>
        {
            // trains.map((train,index)=><div>
            //     {/* {train.} */}
            // </div>)
        }
        <div className='trainsView'>
            {
                trains.map((train,index)=><TrainComp train={train}></TrainComp>)
            }

        </div>
        
      </div>
    );
}

export default Trains