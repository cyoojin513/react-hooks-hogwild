import React from "react";

function SortHogs({handleSort}) {
    return (
        <div>sort hogs by name 
            <input onClick={handleSort} type="checkbox"></input>           
        </div>
    )
}

export default SortHogs;