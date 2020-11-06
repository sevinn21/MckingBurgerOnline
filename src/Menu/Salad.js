import React, { useState } from 'react'
import Button from '../Component/Button'

import '../Burger.css'
import BurgerContent from '../Screen/BurgerContent';
const Salad = ({item,price,value,onDecrement,onIncrement}) => {

 const [addCount, setAddCount] = useState(0);

  const sumPrice = (price, value) => {

       return addCount + price * value;
  }

    return (
        <div className="counter-detail">
        <p style={{marginRight:"30px"}}>Salad ($ 0.50):</p>
        <Button text="-" onClick={onDecrement} ></Button>
        <span style={{ padding:" 1em", fontSize: "18px"}}>{value}</span>
        <Button text="+" onClick={onIncrement} />
        <p style={{marginLeft:"30px"}}>Total Price: $ {sumPrice(price,value).toFixed(2)}</p>{onIncrement}
        </div>
    )
} 

export default Salad
