import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const FormMain = styled.form`
    width: 500px;
    margin: 0 auto;
    padding: 32px;
    background: #ccc;
`

export default function PageIndex() {
    const [val, setVal] = useState('')

    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });

    const submitTrigger = () => {
        console.log()
    }

    return (
        <FormMain action="/test" method="post" onSubmit=submitTrigger>
            <input type="text" />
            <button>Submit</button>
        </FormMain>
    )
}
