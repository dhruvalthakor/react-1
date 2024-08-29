import React, { useEffect, useState } from 'react'

function User() {

    const [Data, setData] = useState("")
    const [user, setuser] = useState([])

    // useEffect(() => {
    //     async function fachdata() {
    //         let api = await fetch(`https://jsonplaceholder.typicode.com/users`)
    //         let data = await api.json()
    //         setuser(data);
    //     }
    //     fachdata();
    // }, [])


    // let datafach = user.filter(({ name }) => {
    //     return name.indexOf(Data) >= 0;
    // }).map((e) => (
    //     <div className="card " key={e.id} style={{ width: " 18rem" }}>
    //         <div className="card-body">
    //             <h5 className="card-title">{e.name}</h5>
    //             <h6 className="card-subtitle mb-2 text-body-secondary">{e.username}</h6>
    //             <p className="card-text">{e.address.city}</p>
    //             <a href="#" className="card-link">{e.email}</a>
    //         </div>
    //     </div>
    // ));



useEffect(()=>{
    async function datahenling() {
        let fetchs= await fetch(`https://jsonplaceholder.typicode.com/users`);
        let data= await fetchs.json();
        setuser(data);
    }
    datahenling()
},[])

let datafach=user.filter(({name})=>{
return name.indexOf(Data)>=0;
}).map((e)=>(
    <div className="card " key={e.id} style={{ width: " 18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{e.username}</h6>
                <p className="card-text">{e.address.city}</p>
                <a href="#" className="card-link">{e.email}</a>
         </div>
        </div>
))


    return (
        <>
            <div className="container text-center mt-5 bg-dark p-4 d-flex flex-column align-items-center rounded rounded-5">
                <div class="input-group mb-3 w-50">
                    <span class="input-group-text" id="basic-addon1">userInput</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={Data} onChange={(e) => setData(e.target.value)} />
                </div>

                <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-3">
                    {datafach}
                </div>
            </div>
        </>
    )
}

export default User
