import React, { useState } from 'react'
import Button from '../Component/Button'

const Meat = ({price,value,onDecrement,onIncrement}) => {

    const [addCount, setAddCount] = useState(0);

    const sumPrice = (price, value) => {
         return addCount + price * value;
    }
    return ( 
        <div className="counter-detail">
        <p style={{marginRight:"35px"}}>Meat ($ 1.30):</p>
        <Button text="-" onClick={onDecrement} />
        <span style={{ padding:" 1em", fontSize: "18px"}}>{value}</span>
        <Button text="+" onClick={onIncrement} />
        <p style={{marginLeft:"30px"}}>Total Price: $ {sumPrice(price,value).toFixed(2)}</p>
        </div>
    )
}

export default Meat
