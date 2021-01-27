import * as React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"
import PageIndex from './Pages/Index'
import PageCollection from './Pages/Collection'


export default function AppRoute() {
    return (
        <Switch>
            <Route path="/collection">
                <PageCollection />
            </Route>
            <Route path={["/home", "/"]}>
                <PageIndex />
            </Route>
        </Switch>
    )
}
