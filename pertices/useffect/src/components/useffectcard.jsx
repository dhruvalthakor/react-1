import React, { useEffect, useState } from 'react'

function useffectcard() {

const[id,setid]=useState(null)
const[prodect,setprodect]=useState(1)

useEffect(()=>{
const dateff=async()=>{
    try {
        const maind= await fetch(`https://fakestoreapi.com/products/${id}`)
        
        const data1=maind.json();
prodect(data1)

    } catch (error) {
     console.log("error");
        
    }

}







},[id])


  return (
    <>
      
    </>
  )
}

export default useffectcard
