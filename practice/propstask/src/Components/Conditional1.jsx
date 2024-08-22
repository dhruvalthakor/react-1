import React from 'react'
import Drive1 from './Drive1'

function Conditional1() {
    const ans=10;
  return (
    <div>
      <Drive1 age={ans} allow={ans>18?"can":"can't"}/>
    </div>
  )
}

export default Conditional1
