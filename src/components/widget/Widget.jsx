import React from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widget = ({type}) => {
    let data ;

    // test amount 
    const amount = 2356;
    const percentage = 20;
    switch (type) {
        case "user" :
            data = {
                title : "Users",
                isMoney : false ,
                 link : "See all users",
                 icon : <PersonOutlinedIcon className="icon" style={{color : "crimson" }}/>
            }
            break ; 
            case "order" : {
                data = {
                    title : "Order",
                    isMoney : false,
                    link : "View all orders" , 
                    icon : <ShoppingCartOutlinedIcon className="icon" style={{color : "crimson" }}/> , 
                }
            }
            break ; 
            case "earning" : {
                data = {
                    title : "Earning",
                    isMoney : true ,
                    link : "View net earnings" , 
                    icon : < MonetizationOnOutlinedIcon className="icon" style={{color : "crimson" }}/> , 
                }
            }
            break ; 
            case "balance" : {
                data = {
                    title : "Balance",
                    isMoney : true ,
                    link : "View your balance" , 
                    icon : <AccountBalanceWalletOutlinedIcon className="icon" style={{color : "crimson" }}/> , 
                }
            }
            break ; 
            default : break ;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="Counter">{data.isMoney ? "$" : "" }{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <KeyboardArrowUpIcon/>
            <span className="percentage positive">{percentage}%</span>
            {data.icon}
        </div>
        
    </div>
  )
}

export default Widget 