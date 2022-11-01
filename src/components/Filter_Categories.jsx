import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { accessoriesDataGet } from '../redux/accessories/action';
import { allDataGet } from '../redux/allProducts/action';
import { mensDataGet } from '../redux/mens/action';
import { womensDataGet } from '../redux/womens/action';
import "./filter_sort.css"

const Filter_Categories = ({category}) => {
      const dispatch=useDispatch()
      const [brand,setBrands]=useState([]);
      const [searchParams, setSearchParams] = useSearchParams();
      const [sort,setsort]=useState();
      let BrandFilterBy;
   if(category=="mens"){
       BrandFilterBy=["BOBBI","BHFO","Merch","Seven Times Six","Pertemba US","Authentic Designer Fashion","Macy's"]
   }
   else if(category=="womens"){
       BrandFilterBy=["BOBBI","BHFO","Merch","NotJustLeggings","Seven Times Six","Pertemba US","Authentic Designer Fashion","Macy's"]

   }
   else if(category=="accessories"){
      BrandFilterBy=["LUX LAIR","Belt Outlet","Virtual Exchanges","Belt Outlet","UnbeatableSale","Pertemba US","BOBBI","MKF Collection","NotJustLeggings"]
   }
   else if(category=="all"){
      BrandFilterBy=["BOBBI","BHFO","Merch","Seven Times Six","Pertemba US","Authentic Designer Fashion","Macy's","NotJustLeggings","LUX LAIR","Belt Outlet","Virtual Exchanges","Belt Outlet"]
   }




    const handlechange=(e)=>{
            let option=e.target.value;
            let newBrandsSets=[...brand];

            if(brand.includes(option)){
                  newBrandsSets.splice(newBrandsSets.indexOf(option),1)
            }
            else{
                  newBrandsSets.push(option)
            }
            setBrands(newBrandsSets)
    }


    useEffect(()=>{
      setSearchParams({brand:brand});
      if(category=="womens"){
            dispatch(womensDataGet({params:{brand}}))
      }
      else if(category=="mens"){
            dispatch(mensDataGet({params:{brand}}))
      }
      else if(category=="accessories"){
            dispatch(accessoriesDataGet({params:{brand}}))
      }
      else if(category=="all"){
            dispatch(allDataGet({params:{brand}}))
      }
   
    },[brand,searchParams])

// *********************************sort by ********************************




const handlesortby=(e)=>{
      console.log(e.target.value,"click")
      setsort(e.target.value)
    }
  
    useEffect(()=>{
      if(sort ){
        // searchParams.getAll("category")
        const params={
        brand:searchParams.getAll("brand"),
        sort
        }
        setSearchParams(params)
        
        const getParamsForSort={
          params:{
            brand:searchParams.getAll("brand"),
            _sort:"price",
            _order:sort
          }
         
        }

        if(category=="womens"){
            dispatch(womensDataGet(getParamsForSort))
      }
      else if(category=="mens"){
            dispatch(mensDataGet(getParamsForSort))
      }
      else if(category=="accessories"){
            dispatch(accessoriesDataGet(getParamsForSort))
      }
      else if(category=="all"){
            dispatch(allDataGet(getParamsForSort))
      }
        
      }
    },[sort,searchParams,dispatch,setSearchParams])
  
  
console.log("brands",brand);


// 
// *******************************filter array******************************************




  return (
    <div className='filter_sort_div'>
      <h2>Filter By Brands</h2>
      <div className='brand-filter-mobile'>
      {BrandFilterBy.map((brand)=>(
            <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value={brand}
            className="filter-sort-input"
            />
            <lable>{brand}</lable>
      </div>
      ))}
      </div>

{/* ***********************************laptop view end**************************************************** */}


      <div className='sorthide'>
            <h2>Sort</h2>
            <div >
                  <input 
                  type="radio"
                  value="ass"
                  name="sortBy"
                  onChange={handlesortby}
                  />
                  <lable>Low To High</lable>
            </div>
            <div>
                  <input 
                  type="radio"
                  value="desc"
                  name="sortBy"
                  onChange={handlesortby}
                  />
                  <lable>High To Low</lable>
            </div>
      </div>




      {/* ********************************mobile view***************************** */}
   

      <div className='brand-filter-mobile1'>
      <select onChange={handlechange}>
      <option>Filter By Brands</option>
      {BrandFilterBy.map((brand)=>(
           
                  <option value={brand}>
                  
                  {brand}
                
                  </option>
           
       
      ))}
      </select>
      </div>





<div className='mobile-view-sort'>
<select onChange={handlesortby} name="sortBy">
<option>Sort By Price</option>
<option value="ass">Low To Hight</option>
<option value="desc">High To Low</option>
</select>
</div>


   {/* ********************************mobile view end******************************************* */}
   
   
    </div>
  )
}

export default Filter_Categories
