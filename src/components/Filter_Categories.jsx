import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { mensDataGet } from '../redux/mens/action';
import { womensDataGet } from '../redux/womens/action';
import "./filter_sort.css"

const Filter_Categories = ({category}) => {
      const dispatch=useDispatch()
      const [brand,setBrands]=useState([]);
      const [searchParams, setSearchParams] = useSearchParams();
      const [sort,setsort]=useState();
      let BrandFilterBy;
   if(category=="men"){
       BrandFilterBy=["BOBBI","BHFO","Merch","Seven Times Six","Pertemba US","Authentic Designer Fashion","Macy's"]
   }
   else if(category=="women"){
       BrandFilterBy=["BOBBI","BHFO","Merch","NotJustLeggings","Seven Times Six","Pertemba US","Authentic Designer Fashion","Macy's"]

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
      if(category=="women"){
            dispatch(womensDataGet({params:{brand}}))
      }
      else if(category=="men"){
            dispatch(mensDataGet({params:{brand}}))
      }
   
    },[brand,searchParams])

// *********************************sort by ********************************




const handlesortby=(e)=>{
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

        if(category=="women"){
            dispatch(womensDataGet(getParamsForSort))
      }
      else if(category=="men"){
            dispatch(mensDataGet(getParamsForSort))
      }
        
      }
    },[sort,searchParams,dispatch,setSearchParams])
  
  
console.log("brands",brand);


// 
// *******************************filter array******************************************




  return (
    <div className='filter_sort_div'>
      <h2>Filter By Brands</h2>

      {BrandFilterBy.map((brand)=>(
            <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value={brand}
            />
            <lable>{brand}</lable>
      </div>
      ))}




      {/* <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="BOBBI"
            />
            <lable>BOBBI</lable>
      </div>
      
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="BHFO"
            />
            <lable>BHFO</lable>
      </div>
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="Merch"
            />
            <lable>Merch</lable>
      </div>
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="Seven Times Six"
            />
            <lable>Seven Times Six</lable>
      </div>
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="Pertemba US"
            />
            <lable>Pertemba US</lable>
      </div>
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="Macy's"
            />
            <lable>Macy's</lable>
      </div>
      <div>
            <input 
            type="checkbox"
            onChange={handlechange}
            value="Authentic Designer Fashion"
            />
            <lable>Authentic Designer Fashion</lable>
      </div> */}
      <div>
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
    </div>
  )
}

export default Filter_Categories
