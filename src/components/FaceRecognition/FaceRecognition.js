import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ImageUrl, box}) =>{
    return(
        <div className='center'>
            <div className="absolute mt2">
                <img id="inputimage" src={ImageUrl} alt="" width="500px" height="auto"/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>            
        </div>
    )
    /* マップでdivを増やす*/
}

export default FaceRecognition;