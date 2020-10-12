import React from "react"
import Layout from '../../hoc/Layout/Layout'
import './account-info.css';

function AccountInfo() {
    const bg_image = '../../images/bg-windmill.png';

    return (
        <div className='account-info'>
            <div>
                <div className="bg-image">
                    <img src={require('../../images/bg-windmill.png')}/>
                </div>
                <h2 className='account-info-header'> Account Information </h2>
                <div className="content-area">
                    <div className="content-item">
                        <h1 className="content-header" id="first-last-name"> First & Last Name </h1>
                        <h1 className="content-info"> Brent Buffenbarger </h1>
                    </div>
                    <div className="content-item" id="email-address">
                        <h1 className="content-header"> Email Address </h1>
                        <h1 className="content-info"> sample@gmail.com </h1>
                    </div>
                    <div className="content-item" id="password">
                        <h1 className="content-header"> Password </h1>
                        <a href="/account"> <h1 className="content-info"> Change Password (click here)</h1></a>
                    </div>
                    <div className="content-item" id="funds">
                        <h1 className="content-header"> Funds </h1>
                        <h1 className="content-info"> $100.00 </h1>
                        <a href="/account"><button className="btn" id="add-funds-btn"> Add Funds </button></a>
                    </div>
                    <a href="/account"><button className="btn" id="view-orders-btn"> View Orders </button></a>
                    <a href="/account"><button className="btn" id="view-tasks-btn"> View Tasks </button></a>
                    <a href="/account"><button className="btn" id="inventory-btn"> Inventory </button></a>
                    <a href="/account"><button className="btn" id="manage-accounts-btn"> Manage Accounts </button></a>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
}

export default AccountInfo;
