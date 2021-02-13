import React from 'react'

const Logout = () => {

    const handleSubmit = async () => {
        axios.post(`https://blog6666.herokuapp.com/auth/login/`, { username ,email, password })
          .then(response => {
            localStorage.setItem("Authorization", response.data.key);
            history.push("/")
            document.location.reload()
        }).catch(({response:{data}}) => setErr({data}))
        // catch(({response:{data}}) => setErr({data}))
        }

    return (
        <div>

            
            
        </div>
    )
}

export default Logout
