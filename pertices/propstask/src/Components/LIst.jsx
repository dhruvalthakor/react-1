import React from 'react'

function LIst() {
    const array=['Black','Grey','Red','Blue',' Orange', "Brown" ];
   const coloritem=array.map(array=>array);
    console.log(coloritem);
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div style={{width:400,height:300,backgroundColor:{coloritem}}}>ssssd</div>
    </div>
    <div class="carousel-item">
    
    </div>
    <div class="carousel-item">
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default LIst
