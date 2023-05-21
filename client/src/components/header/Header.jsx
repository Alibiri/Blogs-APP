import React from 'react';
import './header.css';
import img from '../../assets/2.jpeg';
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={img} alt=""/>
        </div>
    )
}
