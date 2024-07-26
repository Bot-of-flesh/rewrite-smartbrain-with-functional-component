import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ImageUrl, box}) =>{
    return(
        <div className='center'>
            <div className="absolute mt2">
                <img id="inputimage" src={ImageUrl} alt="" width="500px" height="auto"/>
                {box.map( function detection (box, i) {
                    return <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} key={i}></div>
                })}
            </div>            
        </div>
    )
}

export default FaceRecognition;