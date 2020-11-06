import React, { useState ,useContext} from 'react'
import '../Burger.css'
import Cheese from '../Menu/Cheese'
import Salad from '../Menu/Salad'
import Meat from '../Menu/Meat'
import MenuContext from '../context/MenuContext'
import BurgerContent from '../Screen/BurgerContent'

const Counter = () => {
    const [count, setCount] = useState(0); 
    const { menus, sMenus } = useContext(MenuContext);

  const  handleIncrement = (item) => {
          item.count = item.count + 1;
          setCount( prevState => prevState + 1);
             
      }

   const handleDecrement = (item) => {
        if(item.count< 1){
           item.count = 0;
           setCount( prevState => prevState);
          }else {
         item.count = item.count - 1;
         setCount( prevState => prevState - 1);
          }
    }

    const totalPrice = menus.reduce((previousValue, currentItem) => {
        const result = previousValue + currentItem.price * currentItem.count;
        return result;
      }, 0);
 
    return (
        <>
        <div className="left">

        <div className="counter-title">
         <p>Current Price: $ {totalPrice.toFixed(2)}</p>
        </div>

        {menus.map((item) => (  
            item.key==1 ? <Salad item={item}
            price={item.price}
            value={item.count}
            onIncrement={() => handleIncrement(item)}
            onDecrement={() => handleDecrement(item)}/> 
            : item.key==2 ? <Cheese 
            price={item.price}
            value={item.count}
            onIncrement={() => handleIncrement(item)}
            onDecrement={() => handleDecrement(item)}/>
            :<Meat 
            price={item.price}
            value={item.count}
            onIncrement={() => handleIncrement(item)}
            onDecrement={() => handleDecrement(item)} 
           /> 
            
        ))}
        <div className="counter-detail">
        <button style={{marginLeft:"165px",paddingTop:"5px"}}>Order</button>
        </div> 
       </div>
  
        <div className="right">
        <div className="demo-burger">
        <BurgerContent ></BurgerContent> 
        </div>
        </div>
   
        </>
    )
}

export default Counter
