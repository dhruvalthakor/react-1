import React, { useEffect, useState } from 'react'

function Useeffactcard1() {

    const[id,setid]=useState(1)
    const[prodect,setprodect]=useState(null)
    
    useEffect(()=>{
    const dateff=async()=>{
        try {
            const maind= await fetch(`https://fakestoreapi.com/products/${id}`)
            const data1= await maind.json();
             setprodect(data1)
    
        } catch (error) {
         console.log("error");
            
        }
    
    }
    
    dateff()
    },[id])
    

  return (
    <>
      <div  className="container text-center bg-black mt-5">
<div className="container py-5 d-flex align-items-center flex-column">
<h1 className=" mb-3 text-white">Prodect</h1>
{prodect?(
    <div className="card mb-3 mx-5 py-2" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <img src={prodect.image} className=" w-75 object-fit-contain" alt={prodect.title.slice(0,20)}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> title :{prodect.title.slice(0,20)}</h5>
        <p className="card-text">Description :{prodect.description.slice(0,60)}</p>
        <p className="card-text"><small className="text-body-secondary">price :{prodect.price}</small></p>
      </div>
    </div>
  </div>
</div>

):(
    <>
    loading
    </>
)}

<div>
<button type="button" className="btn btn-primary me-3" onClick={()=>{id?setid(id-1):setid(19)}}>Primary</button>
<button type="button" className="btn btn-success ms-3" onClick={()=>{id?setid(id+1):setid(1)}}>Secondary</button>
</div>
</div>
      </div>
    </>
  )
}

export default Useeffactcard1
