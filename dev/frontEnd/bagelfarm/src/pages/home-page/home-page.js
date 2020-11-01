import React, {Component} from "react"
import './home-page.css';

class HomePage extends Component {
    render() {
        return (
            <>
                <div id="page-container">
                    <div id="content-wrap">
                        <div class="home-page">
                            <img src={require('../../images/banner.png')} id="banner"/>
                            <div class="banner-text">
                                <h2 id="banner-header">Welcome To Dan's Bagel Shop</h2>
                                <p id="banner-content">We are really excited to have you as a customer! If this is your first time here, please take some time to review the steps below to make your first order!</p>
                            </div>
                        </div>
                        <h1 id="hto-header">How To Place An Order</h1>
                        <div class="order-steps">
                            <div id="first-step">
                                <h3>Step 1.</h3>
                                <p>Head on over to the <a href="/order">orders</a> tab.</p>
                            </div>
                            <div id="second-step">
                                <h3>Step 2.</h3>
                                <p>Choose the items you want, and add them to your cart.</p>
                            </div>
                            <div id="third-step">
                                <h3>Step 3.</h3>
                                <p>Review, place, and track the status of your order.</p>
                            </div>
                            <div id="fourth-step">
                                <h3>Step 4.</h3>
                                <p>Pick up your order and enjoy!</p>
                            </div>
                        </div>
                        <div id="line"><hr /></div>

                        <h1 id="about-header">Who We Are</h1>

                        <div class="about-container">
                            <p>Here at Dan's Bagel Shop, we are dedicated to providing a simple and enjoyable way to order your favorite food. We pride ourselves in our friendly service, delicious food, and charitability. 
                                Each day, we donate food that is not picked up by a customer to the local food bank. Over the years, we have made over 20,000 donations! <br/><br/>
                                Our friendly and capable staff is looking forward to receiving your order! Please, feel free to get acquainted with our intuitive and powerful website.                       
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;
