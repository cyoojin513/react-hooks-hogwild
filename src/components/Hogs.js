import React, {useState} from "react";
import HogsDetail from "./HogsDetail"

function Hogs({ name, image, specialty, weight, medal }) {

    const [detail, setDetail] = useState(false)

    function handleClick(e) {
        setDetail(!detail)
    }

    function showDetails() {
        if(detail === true) {
            return (
                <>
                    <HogsDetail 
                        specialty={specialty}
                        weight={weight}
                        medal={medal}
                    ></HogsDetail>    
                </>
            )
        } else {return (<></>)}
    }

    return (

        <div className="ui eight wide column image">
            <div onClick={ handleClick } className="pigTile">
                <h3>{ name }</h3>
                <img src={ image } alt="hogs"/>
                {showDetails()}   
            </div>
        </div>

    )
}

export default Hogs;
