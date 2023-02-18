import React from "react";
import './css/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Header()
{
    return (
        <header>
            <MenuIcon style={ { fontSize: 30, cursor: 'pointer' } } />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />

            <div className="rightButtons">
                <SearchIcon style={ { fontSize: 30, cursor: 'pointer' } } />
                <MoreHorizIcon style={ { fontSize: 30, cursor: 'pointer' } } />
            </div>
        </header >
    )
}