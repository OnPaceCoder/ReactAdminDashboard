import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import AccountBalanceWalleetOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import MontizationOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"

const Widget = ({ type }) => {

    let data;

    //temp
    const amount = 100;
    const diff = 20;

    switch (type) {

        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlined className="icon" />
                )
            };


            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all users",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon" />
                )
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MontizationOutlinedIcon className="icon" />
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalleetOutlinedIcon className="icon" />
                )
            };
            break;



        default:
            break;

    }





    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive"><KeyboardArrowUpIcon />{diff} %</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;