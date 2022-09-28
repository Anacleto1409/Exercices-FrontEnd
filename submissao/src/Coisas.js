import React, { useState } from "react"

type LoginProps = {
    onLogin(a: any)=> any
}
function Login({ onLogin }: LoginProps) {
    const [input, setInput] = useState < string > ("")
    const handleChange = (e) => {
        setInput(e.target.value)

    }
    return (
        <div>
            <input value={input} onChange={handleChange(e)} />
            <button onClick>Entrar</button>
        </div>
    )
}
