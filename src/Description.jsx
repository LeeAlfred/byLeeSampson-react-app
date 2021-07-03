import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Description(props){

    const[open, setOpen] = useState(false);


return (

    <>

<Button 
variant="light"
onClick={()=> setOpen(!open)}
aria-controls ="caption"
aria-expanded={open}
>Expand</Button>
<Collapse in={open}>
<div className = "caption">{props.caption}</div>
</Collapse>
</>
);
}


export default Description;