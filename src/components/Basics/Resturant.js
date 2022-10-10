import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import { MenuCard } from './MenuCard';
import { Navbar } from './Navbar';
const uniqueList=[
   ... new Set(
        Menu.map((curr)=>{
            return curr.category;
        })
    ),"All"
];
console.log(uniqueList);



export const Resturant = () => {
    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);
    const filterItem=(categor)=>{
        const updatedList=Menu.filter((currElem)=>{
            return currElem.category===categor;

        }
        );
        setMenuData(updatedList);
    }
    console.log(menuData);
    // const myStyle={color:"yellow"}
  return (
    <>
   
<Navbar filterItem={filterItem} Menu={Menu} setMenuData={setMenuData}  menuList={menuList}/>




  <MenuCard menuData={menuData}/>
  

    

    
    </>
  )
}
