import { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RightImage from "../right-image/RightImage";
import { FirstPage,SecondPage } from "../pages";
import Footer from "../footer/Footer";

import './app.css' 


export default class App extends Component {

    

    render() {
        return (

            <Router>
                <div>
                    
                    <div className="container">
                        <div className="page_wrapper">

                            <FirstPage/>

                            <RightImage/>

                        </div>
                    </div>

                    <Footer/>

                </div>
            </Router>
        )
    }
}