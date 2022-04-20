import React , {useState} from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

export const New = ({inputs , title}) => {
  const [file , setFile] = useState("");
    return (
      <div className='new'>
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>Add new {title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file) : "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"} alt="new_item" />
            </div>
            <div className="right">
              <form>
              <div className="formInput">
                  <label htmlFor="chosefile" >Image : <DriveFolderUploadOutlinedIcon className='icon'/></label>
                  <input type="file" id="chosefile" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                </div>
               {inputs.map((input)=> {
                 return (
                <div className='formInput' key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
                </div>
               )})}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
