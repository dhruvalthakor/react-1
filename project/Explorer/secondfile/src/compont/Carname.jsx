import React from 'react'

function Carname() {
  return (
    <>
     <div className="container mb-5" id="Shop">
     <div className="card d-flex justify-content-center" style={{backgroundColor:" rgb(18,18,18)",height:130,marginBottom:80}}>
  {/* <img src="" className="card-img" alt="..."/> */}
  <h1 style={{fontSize:230}}>LUXURIOUS</h1>
  <div className="card-img-overlay d-flex justify-content-between align-items-center  text-white">
    <h5 className="card-title mt-5 " style={{fontSize:30}}>Get all Luxurious Cars</h5>
    <button type="button" className="btn btn-outline-secondary  mt-5">view All</button>
  </div>
</div>
     <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3 nav-underline" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link text-white text-bg-dark mb-2 active p-2" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">BMW</button>
    <button className="nav-link text-white text-bg-dark mb-2 p-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">FERRARI</button>
    <button className="nav-link text-white text-bg-dark mb-2 p-2" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >MERCEDES</button>
    <button className="nav-link text-white text-bg-dark mb-2 p-2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"> PORSHE</button>
    <button className="nav-link text-white text-bg-dark mb-2 p-2" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">MUSTANG</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
      {/* bmw img  */}
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/16119672/pexels-photo-16119672/free-photo-of-luxury-bmw-car.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/18311085/pexels-photo-18311085/free-photo-of-silver-bmw-e34.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/3849553/pexels-photo-3849553.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/7387470/pexels-photo-7387470.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/3923524/pexels-photo-3923524.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/5975536/pexels-photo-5975536.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>


    {/* ferrari img  */}
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/9139595/pexels-photo-9139595.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/3954426/pexels-photo-3954426.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/9735310/pexels-photo-9735310.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/3954418/pexels-photo-3954418.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/5126057/pexels-photo-5126057.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    {/* mercedes img  */}

    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/1637857/pexels-photo-1637857.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/23508689/pexels-photo-23508689/free-photo-of-blue-mercedes-amg-gt.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/23230765/pexels-photo-23230765/free-photo-of-mercedes-benz-g-className-parked-on-the-side-of-a-street-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    {/* PORSHE IMG  */}
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/23945351/pexels-photo-23945351/free-photo-of-yellow-car-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://img.freepik.com/premium-photo/sports-car-garage_941094-37.jpg?ga=GA1.1.687011306.1720700746&semt=sph" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.unsplash.com/photo-1533922598206-a1a2594e5873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://img.freepik.com/free-photo/black-mini-coupe-road_114579-5056.jpg?ga=GA1.1.687011306.1720700746&semt=sph" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://img.freepik.com/free-photo/mini-coupe-high-speed-drive-road-with-front-lights_114579-5040.jpg?ga=GA1.1.687011306.1720700746&semt=sph" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://img.freepik.com/premium-photo/view-3d-car-with-amazing-background_1020617-42960.jpg?ga=GA1.1.687011306.1720700746&semt=sph" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    {/* mustang img  */}
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/10905505/pexels-photo-10905505.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/18038881/pexels-photo-18038881/free-photo-of-sports-shelby-mustang-on-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/22710922/pexels-photo-22710922/free-photo-of-vintage-ford-mustang.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/13095618/pexels-photo-13095618.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/6509108/pexels-photo-6509108.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-dark">
      <img style={{height:200,objectFit:"cover"}} src="https://images.pexels.com/photos/18869633/pexels-photo-18869633/free-photo-of-red-vintage-ford-mustang.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>





    </div>
  </div>
</div>
      </div> 
    </>
  )
}

export default Carname
