import React from 'react'

function Login(props) {
    const user = {
        username : "Benson",
        email : "benson@gmail.com"
    }
    const setUsername = (e) => {
        user.username = e.target.value;
    }
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        console.log(user);
        props.handleLogin(user);
    }
  return (
    <section>
        <h2>Login section</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id="username" onChange={setUsername}/>
        <button>Login</button>
        </form>
    </section>
  )
}

export default Login