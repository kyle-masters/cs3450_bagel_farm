import React from "react"
import Button from '../../components/UI/Button/Button'
import './account-info.css';

function AccountInfo() {

    return (
        <div className='account-info'>
            <div>
                <h2 className='account-info-header'> Account Information </h2>
                <div className="content-area">
                    <div className="content-item">
                        <h1 className="content-header" id="first-last-name"> First & Last Name </h1>
                        <Button width={"12%"}
                                height={"23%"}
                                right={"38%"}
                                top={"16%"}
                                fontSize={"15px"}>Edit</Button>
                        <h1 className="content-info"> Brent Buffenbarger </h1>
                    </div>
                    <div className="content-item" id="email-address">
                        <h1 className="content-header"> Email Address </h1>
                        <Button width={"12%"}
                                height={"23%"}
                                right={"48%"}
                                top={"16%"}
                                fontSize={"15px"}>Edit</Button>
                        <h1 className="content-info"> sample@gmail.com </h1>
                    </div>
                    <div className="content-item" id="password">
                        <h1 className="content-header"> Password </h1>
                        <Button width={"12%"}
                                height={"23%"}
                                right={"60%"}
                                top={"16%"}
                                fontSize={"15px"}>Edit</Button>
                        <a href="/account"> <h1 className="content-info"> Change Password (click here)</h1></a>
                    </div>
                    <div className="content-item" id="funds">
                        <h1 className="content-header"> Funds </h1>
                        <h1 className="content-info"> $100.00 </h1>
                        <Button width={"35%"}
                                height={"45%"}
                                right={"2%"}
                                bottom={"8%"}>Add Funds</Button>
                    </div>
                    <Button width={"43%"}
                                height={"8.5%"}
                                left={"5%"}
                                bottom={"14%"}>View Orders</Button>
                    <Button width={"43%"}
                                height={"8.5%"}
                                right={"5%"}
                                bottom={"14%"}>View Tasks</Button>
                    <Button width={"43%"}
                                height={"8.5%"}
                                left={"5%"}
                                bottom={"3%"}>Inventory</Button>
                    <Button width={"43%"}
                                height={"8.5%"}
                                right={"5%"}
                                bottom={"3%"}>Manage Accounts</Button>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
}

export default AccountInfo;
