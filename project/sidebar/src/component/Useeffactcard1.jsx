import React, { useEffect, useState } from 'react'

function Useeffactcard1() {


  const [prodect, setprodect] = useState()
  const [list, setlist] = useState()


  useEffect(()=>{
    const dateff = async () => {
      try {
        const maind = await fetch(`https://fakestoreapi.com/products`)
        const data1 = await maind.json();
       
      setlist(data1)
     
        setprodect(listhendler(data1));
        
      } catch (error) {
        console.log("error");
        
      }
      
    }
    
    dateff()
  },[prodect])
  
  function mensction() {
    
   setlist(list.filter((ele, i) => ele.category === "men's clothing"));
   
    
   console.log(list);
    setprodect(listhendler(list));


}




function listhendler(pro) {

  return pro.map((prodect)=>(
    <div className="card " style={{width: "400px",height:"250px",maxHeight:"auto"}}>
              <div className="row g-0 justify-content-center align-items-center px-3 py-3 w-100 ">
                <div className="col-md-4 w-25" >
                  <img 
                    src={prodect.image}
                    className="card-img-top object-fit-contain w-100 h-50"
                    alt={prodect.title} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prodect.title.slice(0, 40)}</h5>
                    <p className="card-text">
                      {prodect.description.slice(0, 75)}
                    </p>
                    <a href="#" className="btn btn-dark w-100 d-flex justify-content-center align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      {prodect.price}
                    </a>
                  </div>
                </div>
              </div>
  </div>
  )) 
}


  

  return (
    <>
     
        <div className=" d-flex align-items-center flex-column text-center mt-4 w-100">
          <div className="d-flex gap-5 text-center mb-4">
            <button className="btn btn-success">All prodects</button>
            <button className="btn btn-success" onClick={mensction}>Man</button>
            <button className="btn btn-success">All prodects</button>
            <button className="btn btn-success">All prodects</button>
          </div>
         <div className="d-flex flex-wrap gap-3 ">
         {prodect}
         </div>
      
        </div>
      
    </>
  )
}

export default Useeffactcard1
