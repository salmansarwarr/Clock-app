import React from "react";

function Country(props) {
    props.date.setHours(props.date.getHours() + props.timeDiffrence);

    return(
        <div className="container">
            <div className="country">
                <img src={props.flag}/>
                <h2> {props.name} <br/> <span>standard time</span> </h2>
            </div>
            <div className="time">
                <div>
                    {props.date.getHours().toString().length == 1 ? "0" + props.date.getHours() : props.date.getHours()}:
                    {props.date.getMinutes().toString().length == 1 ? "0" + props.date.getMinutes() : props.date.getMinutes()}:
                    {props.date.getSeconds().toString().length == 1 ? "0" + props.date.getSeconds() : props.date.getSeconds()} 
                    {props.date.toLocaleTimeString().slice(-2).toLowerCase()}
                </div>
            </div>
        </div>
    )
}

export default Country