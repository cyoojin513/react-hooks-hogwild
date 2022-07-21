import React from "react";

function HogsDetail({specialty, weight, medal}) {
    return (
        <ul className="normalText">
            <li>Specialty: { specialty }</li>
            <li>Weight: { weight }</li>
            <li className="achievementText">Medal: { medal }</li>
        </ul>
    )
}

export default HogsDetail;