import React, { useReducer } from 'react'

const initialState={
    name:"",
    email:"",
    modile:"",
    password:""
}

function reducer(prestate,nextstate) {
    return{
...prestate,...nextstate
    }
}

function Fromreducer() {



const [state,dispatch]=useReducer(reducer,initialState)



function hendlesubmit() {
    console.log("state",state);
    let   obj={
      name:state.name,
      email:state.email,
      modile:state.modile,
      password:state.password
    }
}

function hendelename(e) {
    dispatch({name:e.target.value})
}


function hendeleemail(e) {
    dispatch({email:e.target.value})
}


function hendelemodile(e) {
    dispatch({modile:e.target.value})
}

function hendelepassword(e) {
    dispatch({password:e.target.value})
}

  return (
    <>
      <div className=" container bg-dark p-5 mt-5 text-center text-white rounded rounded-5 w-50">
        <h1>useReducer</h1>
        <input type="text" className="form-control my-4" placeholder='enter name' value={state.name}  onInput={hendelename}/>
        <input type="email" className="form-control my-4" placeholder='enter email'  value={state.email}  onInput={hendeleemail}/>
        <input type="tel" className="form-control my-4" placeholder='enter modile'  value={state.modile}  onInput={hendelemodile}/>
        <input type="password" className="form-control my-4" placeholder='enter password'  value={state.password}  onInput={hendelepassword}/>
        <button className="btn btn-danger" onClick={hendlesubmit}>submit</button>
      </div>

      <div>
        {/* <h1>{obj.name}</h1>
        <h1>{obj.email}</h1>
        <h1>{obj.modile}</h1>
        <h1>{obj.password}</h1> */}
      </div>
    </>
  )
}

export default Fromreducer
