import React from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

export const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="new_item" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="chosefile" >Image : <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input type="file" id="chosefile" style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label >UserName</label>
                <input type="text" placeholder='Username' />
              </div>
              <div className="formInput">
                <label >Name and Surname</label>
                <input type="text" placeholder='Jone Doe' />
              </div>
              <div className="formInput">
                <label >E-Mail</label>
                <input type="email" placeholder='Jonedoe@gmail.com' />
              </div>
              <div className="formInput">
                <label >Phone Number</label>
                <input type="text" placeholder='+00 000 000 00' />
              </div>
              <div className="formInput">
                <label >PassWord</label>
                <input type="password" placeholder='Password' />
              </div>
              <div className="formInput">
                <label >Address</label>
                <input type="text" placeholder='Your address' />
              </div>
              <div className="formInput">
                <label >Country</label>
                <input type="text" placeholder='Your country' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
