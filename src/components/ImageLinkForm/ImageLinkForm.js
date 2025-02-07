import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return(
        <div>
            <p className="f3">
                {`スマートブレインが画像の中の顔を認識します。URLを入力してください。`}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center"  type="text" onChange={ onInputChange }/>
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}
                        >認識</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;