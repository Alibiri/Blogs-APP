import React from 'react'
import './settings.css'
import SideBar from "../../components/sideBar/SideBar"
import img from '../../assets/6.jpg'
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={img} alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="text" placeholder="safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                <SideBar/>
            
        </div>
    )
}
