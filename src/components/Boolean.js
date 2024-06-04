import React, { useState } from 'react'

function Boolean() {
  //isLogin= true or false
  let [isLogin, setIsLogin] = useState(false)


  const makeTrue = () => {
    setIsLogin(true)
  }

  const makeFalse = () => {
    setIsLogin(false)
  }
  return (
    <div>
      <div>{(isLogin==true)?

        <form>
          <h3>Register</h3>
        </form>
      :

      <form>
        <h3>Login</h3>

      </form>
      }</div>
      <button onClick={makeTrue}>True</button>
      <button onClick={makeFalse}>False</button>
    </div>
  )
}

export default Boolean
