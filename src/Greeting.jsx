import React from "react";


function Greeting(){

    const date = new Date();
    const time = date.getHours();
    // const customStyle ={
    //     color: ""
    // };

    let hello;

if (time < 12){
    hello = "Good Morning";
    // customStyle.color = "blue";
}else if (time < 16) {
    hello = "Good Afternoon";
    // customStyle.color ="green";
} else{
    hello = "Good Evening";
    // customStyle.color = "pink";
}

// removed style={customStyle} from h2 and commented out the above lines in if/else
return <div>

<h2 className ="greeting" >
{hello}</h2>
</div>
}

export default Greeting;