import React from 'react'

function Marks({gread}) {
if (gread>=0&&gread<20) {
    console.log("F");
    return (
        <h1>Grade F</h1>
      )
}else if(gread>20&&gread<29) {
    return (
        <h1>Grade D</h1>
      )
}else if(gread>30&&gread<39 ) {
    return (
        <h1>Grade D+</h1>
      )
}else if(gread>40&&gread<49) {
    return (
        <h1>Grade C</h1>
      )
}else if(gread>50&&gread<59) {
    return (
        <h1>Grade c+</h1>
      )
}else if(gread>60&&gread<69) {
    return (
        <h1>Grade B</h1>
      )
}else if(gread>70&&gread<79) {
    return (
        <h1>Grade B+</h1>
      )
}else if(gread>80&&gread<89) {
    return (
        <h1>Grade A</h1>
      )
}else if(gread>90&&gread<=100) {
    return (
        <h1 >Grade A+</h1>
      )
}else {
    return (
        <h1 className="text-danger">plese enter under 100</h1>
      )
}
   
 
}

export default Marks
