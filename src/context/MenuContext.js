import React from 'react'

const MenuContext = React.createContext({
    menus: [
        {
            key:1,
            name:"salad",
            price:0.50,
            count:0
          },
          {
            key:2,
            name:"cheese",
            price:0.40,
            count:0
          },
          {
            key:3,
            name:"meat",
            price:1.30,
            count:0
          }
          
    ],
    updateMenus : [] 
 
  });

  
export default MenuContext
