import React from "react";

const Rank = ({name, entries}) =>{
    return(
        <div>
            <div className="white f3">
                {`${name} 様　現在のランクは ...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    )
}

export default Rank;