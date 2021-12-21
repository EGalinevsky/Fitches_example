import React, { useState } from 'react'
import s from '../input/input.module.css'
import Todo from '../todo/Todo'

const Input = () => {
    const [click, setClick] = useState('')
    const [todos, setTodos] = useState([])
    const sendInput = 'send'
    const disableBTN = true

    const handlAddArray = () => {
        setTodos([...todos, click])
        setClick('')
    }
    return (
        <div className={s.block_input}>
            <input onChange={(e) => setClick(e.target.value)} placeholder='Enter any text' className={s.input_text} type="text" value={click} />
            <div>
                <button onClick={handlAddArray} disabled={click ? '' : disableBTN} className={s.btnSend}>{sendInput}</button>
            </div>
            {todos.length ? <ul className={s.list__item}>
                {todos.map((todo, i) => <Todo key={i} todo={todo} />)}
            </ul> : ''}

        </div>
    )
}

export default Input
