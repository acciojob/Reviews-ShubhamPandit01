
import React, {useState} from 'react';
import Data from './data';


function Review(){
    const [index, setIndex] = useState(0)
    const [random,setRandom] = useState(parseInt(Math.random()*Review.length))
    let {id,name,job,image,text} = Data[index]

    console.log(Data[index])

    const checkIndex = (newIndex)=>{
        if(newIndex >= Data.length) return 0
        if(newIndex < 0) return Data.length - 1
        return newIndex
    }


    function nextReview(){
        setIndex((prevIndex)=>checkIndex(prevIndex + 1))
    }

    function prevReview(){
        setIndex((prevIndex)=>checkIndex(prevIndex - 1))
    }

    function randomReview(){
        setIndex(random)
    }

    return(
        <div className="review">
            <img src={image} alt={name} className="person-img" style= {{height:"220px", width:"160px"}}/>
            <h4 className="author" id={`author-${id}`}>{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div>
                <button className="prev-btn" onClick={prevReview}>Previous</button>
                <button className="next-btn" onClick={nextReview}>Next</button>
            </div>
                <button className="random-btn" onClick={randomReview}>Surprise Me</button>
      </div>
    )
}


export default Review