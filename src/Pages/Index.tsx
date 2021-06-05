import React from 'react'
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

    const submitTrigger = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(123)
    }

    return (
        <FormMain action="/test" method="post" onSubmit={submitTrigger}>
            <input type="text" />
            <button>Submit</button>
        </FormMain>
    )
}
