import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mensDataGet } from '../../redux/mens/action'

const Mens = () => {
    const mens=useSelector((state)=>state.mensReducer.mens);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(mensDataGet())
    },[])
    console.log(mens)

  return (
    <div>
      
    </div>
  )
}

export default Mens
