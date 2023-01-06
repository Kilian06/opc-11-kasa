import React from 'react';
import { useState } from 'react';
import '../../styles/accordion.css'

function Accordion({title, content}) {
    const [active, setActive] = useState(false)
    const handleToggle = (e) => {
        setActive(!active)
    }
    if(Array.isArray(content)){
        return (
            <div className={`accordionstyle ${active && "active"}`}>
                <div className="accordionstyleTitre" onClick={handleToggle}>{title}</div>
                <ul className="accordionstyleContent">{content.map((equipement, index) => (
                    <li key={`${equipement}-${index}`}>{equipement}</li>
                ))}</ul>            
            </div>
        );    }else{
        return (
            <div className={`accordionstyle ${active && "active"}`}>
                <div className="accordionstyleTitre" onClick={handleToggle}>{title}</div>
                <div className="accordionstyleContent">{content}</div>            
            </div>
        );    }


}

export default Accordion; 