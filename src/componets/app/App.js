import { Component } from "react";

import RightImage from "../right-image/RightImage";
import FirstPage from "../pages/first-page/FirstPage";
import Footer from "../footer/Footer";

import './app.css' 


export default class App extends Component {

    

    render() {
        return (

            <div>
    
                <div className="container">
                    <div className="page_wrapper">
    
                        <FirstPage/>
    
                        <RightImage/>
    
                    </div>
                </div>
    
                <Footer/>
    
            </div>
        )
    }
}