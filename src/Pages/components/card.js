import React from 'react';
import './card.css'
// import me from "./end.jpg";

const Card = (props) => {
    return(
        <div>
            <div className="container">
                {props.data.map(item => 
                    <div className="large">
                        <div className="small">
                             <img className="avatar" src={item.aUrl} alt="" />
                            {console.log(item.aUrl)}
                        </div>
                        <div className="descr">
                            <h2>{item.title}</h2>
                            <p>{item.descr}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;