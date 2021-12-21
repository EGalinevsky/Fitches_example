import React from 'react'
import { useState } from 'react/cjs/react.development'
import Button from './button/Button'
import Input from './input/Input'

const MainContainer = () => {
    const textFirst = 'первая'
    const textSecond = 'вторая'
    const textThird = 'третья'

    return (
        <div>
            <Input />
            <Button text={textFirst} />
            <Button text={textSecond} />
            <Button text={textThird} />
        </div>
    )
}

export default MainContainer
