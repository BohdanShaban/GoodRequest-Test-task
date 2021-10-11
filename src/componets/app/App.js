

import RightImage from "../right-image/RightImage";
import FirstPage from "../pages/first-page/FirstPage";
import Footer from "../footer/Footer";

import './app.css' 


const App = () => {

    
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

export default App;