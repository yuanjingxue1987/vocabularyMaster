import React, {useState} from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import NavTop from './Components/Common/NavTop'
import NavBottom from './Components/Common/NavBottom'
import AppRoute from './AppRoute'


const MainWrap = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
`

const BodyWrap = styled.div`
    flex: 1 0 auto;
    justify-content: ;
`

export default function App() {
    const [sideOpen, setSideOpen] = useState(false);

    const handleMenuTrigger = (state: boolean) => () => {
        setSideOpen(state)
    }


    return (
        <MainWrap>
            <NavTop setSideOpen={handleMenuTrigger(true)} />
            <BodyWrap>
                <AppRoute />
            </BodyWrap>
            <NavBottom />
            <Drawer
                open={sideOpen}
                onClose={handleMenuTrigger(false)}
            >
                <p>123123</p>
            </Drawer>
        </MainWrap>
    )
}
