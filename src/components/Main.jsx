import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {CiSquareRemove} from "react-icons/ci";
import {useDispatch} from "react-redux";
import cartSlice from '../store';
import productData from "../dummy-data.json";
function Main() {
  const dispathch = useDispatch();
  const {addToCart, removFromcard} = cartSlice.actions;



  return (
    <div className='product'>
      {
        productData.map((item)=>
          <div key={item.id} className='cart'>
            <img className='img' src={item.img} alt="img" />
            <p>{item.title}</p>
            <h2>${item.name}</h2>
            <button onClick={()=>dispathch(addToCart(item ,item.id))} className='btn'><AiOutlineShoppingCart/></button>
            <button onClick={()=>dispathch(removFromcard(item ,item.id))} className='btn'><CiSquareRemove/></button>
          </div>
        )
      }
    </div>
  )
}

export default Main;

