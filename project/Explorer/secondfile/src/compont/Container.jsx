// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import Herosection from './Herosection'
import Carlogo from './Carlogo'
import Carvideo from './Carvideo'
import Carname from './Carname'
import Contact from './Contact'



function Container() {
  return (
 <main>
    <section>
<Herosection/>
   </section>
 <section>
  <Carlogo/>
 </section>
 <section>
  <Carvideo/>
 </section>
 <section>
  <Carname/>
 </section>
 <section>
  <Contact/>
 </section>
 </main>
   
  )
}

export default Container
