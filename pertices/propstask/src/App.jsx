import Conditional1 from "./Components/Conditional1"
import Gallery from "./Components/Gallery"
import LIst from "./Components/LIst"



function App() {


  return (
    <>
    {/* <div className="container d-flex flex-column mt-5 bg-black text-white">
    <h1 className="text-center">:-Notable Scientists</h1>
    <div className="d-flex mt-3 gap-5 justify-content-center">
    <Gallery name="Maria Skłodowska-Curie"num={"4"} img={"szV5sdG"} alt="Maria Skłodowska-Curie" Profession=" physicist and chemist" Awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" Discovered="polonium (chemical element)"/>
      <Gallery name="Katsuko Saruhashi" num={"2"} img={"YfeOqp2"} alt="Katsuko Saruhashi" Profession="geochemist" Awards=" (Miyake Prize for geochemistry, Tanaka Prize)" Discovered="a method for measuring carbon dioxide in seawater"/>
      
    </div>
    </div> */}
    {/* <Conditional1/> */}
    <LIst/>
    </>
  )
}

export default App
