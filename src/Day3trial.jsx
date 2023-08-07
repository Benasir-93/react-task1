import React from 'react'

function Day3trial() {
    let a={
        name:"benasir",
        age:29,
        job:"full stack"
    }
    let b=()=>"hello guys!!"
    function demo() {
      alert("hey!!!!!")
    }
      return (
    <>
    <div>
        <h1>my name is {a.name}</h1>
        <h2>i'm learning {a.job}</h2>
        <p>{b()}</p>
        <button onclick={demo()}>click</button>
    </div>
    </>
  )
}

export default Day3trial