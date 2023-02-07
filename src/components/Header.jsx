import React, {useState} from 'react'
import { useEffect } from 'react';
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineDelete} from "react-icons/ai";
import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import cartSlice from '../store';

function Header() {
  const dispathch = useDispatch();
  const { removFromcard, allCardClear} = cartSlice.actions;
  const [ active, setActive] = useState(false);
  const [counter, setCounter]= useState(0);
  const {cartProductIds, total}= useSelector((state)=>state.cart);


 
  
  useEffect(()=>{
    setCounter(cartProductIds.length) 
  },[cartProductIds])

  function openComponents(){
    setActive(true);
  }
  function closeComponents(){
    setActive(false);
  }
  return (
   <>
    <div className='header'>
      <h2>Redex</h2>
      <div onClick={openComponents}  className='corzinka'>
        <span className='counter'> {counter} </span>
        <AiOutlineShoppingCart className='iconCorzinka'/>
      </div>
    </div>


    <div className={!active ? "close" : "open"}>
      <AiOutlineClose onClick={closeComponents} className='closeIcon'/>
      {
        cartProductIds.map((item)=>
          <div key={item.id} className='cart1'>
            <div className='cart1Wrapper'>
            <img className='img1' src={item.img} alt="img" />
            <div>
            <p>{item.title}</p>
            <h2>{ item.name }</h2>
            </div>
            </div>
            <div>
              <button className='btn2'> - </button>
              <span> 1 </span>
              <button className='btn2'> + </button>
            </div>
            <AiOutlineDelete onClick={()=>dispathch(removFromcard(item.id))} className='removeItem' />
          </div>
        
        )
      }
      <p> Total:${total}</p>
      <br />
      <button onClick={()=>dispathch(allCardClear())}>All card is Cleared</button>
    </div>
    </>
  )
}

export default Header;
