import React from 'react'

const Filter_Categories = () => {

   
    const handlechange=()=>{

    }
  return (
    <div>
      <h2>Filter</h2>
      <div>
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
      </div>
    </div>
  )
}

export default Filter_Categories
