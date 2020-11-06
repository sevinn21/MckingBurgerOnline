import React, { useContext } from 'react'
import MenuContext from '../context/MenuContext';
import '../Burger.css'

//Burger içini doldurmak için gerekli kodlamalar
const BurgerContent = () => {
    const { menus, updateMenus } = useContext(MenuContext);

   const salad = (count) => {
    var indents = [];
    for (var i = 0; i < count; i++) {
      indents.push(<div className="salad" key={i}></div>);
  }
        return indents;
  }

  const cheese = (count) => {
    var indents = [];
    for (var i = 0; i < count; i++) {
      indents.push(<div className="cheese" key={i}></div>);
  }
        return indents;
  }

    const meat = (count) => {
      var indents = [];
      for (var i = 0; i < count; i++) {
        indents.push(<div className="meat" key={i}></div>);
    }
          return indents;
    }
    return (
    <>
     <div className="burger ">
       <div className="bread-top"></div>
        {menus.map((item) => ( 
        item.key == 1 && item.count > 0 ? salad(item.count)
        : item.key ==2 && item.count >0 ? cheese(item.count)
        : item.key ==3 && item.count >0 ? meat(item.count)
        :<div style={{marginLeft:"50px"}}>Please Choose</div>
        ))}

        <div className="bread-bottom"></div>
     </div>
      
    </>
    )
}

export default BurgerContent
