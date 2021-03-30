import React from 'react'

function OtherComponent(props) {


    setTimeout(() => {
        console.log("here");
    }, 20000);
    return (
        <div>OtherComponent</div>
    ) 
}
export default OtherComponent