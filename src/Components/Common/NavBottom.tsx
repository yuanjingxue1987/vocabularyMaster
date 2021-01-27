import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import SearchIcon from '@material-ui/icons/Search'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

export default function NavBottom() {
    const [currPage, setCurrPage] = useState('home');
    const routeHistory = useHistory()

    const handleNavClick = (val:string) => {
        setCurrPage(val)
        routeHistory.push("/" + val)
    }

    return (
        <BottomNavigation
            value={currPage}
            onChange={(event, val) => {
                handleNavClick(val)
            }}
            showLabels={false}
        >
            <BottomNavigationAction value="home" icon={<SearchIcon />} />
            <BottomNavigationAction value="collection" icon={<LibraryBooksIcon />} />
        </BottomNavigation>
    )
}


