import './footer.css'

import footerDogImg from './footer dog.png'
import footerGoodBoyImg from './Good boy.png'


const Footer = () => {


    return (
        <footer>
            <div className="container">

                <div className="footer-border"></div>

                <div className="footerWrapper">
                    <div className="footer-logo">
                        <img className="gog-img" src={footerDogImg} alt="dog"/>
                        <img className="gog-txt" src={footerGoodBoyImg} alt="dog"/>
                    </div>
                    <div className="info-block">
                        <div className="title">Nadácia Good boy</div>
                        <a href="#" className="footer-link">O projekte </a>
                        <a href="#" className="footer-link">Ako na to</a>
                        <a href="#" className="footer-link">Kontakt</a>
                    </div>
                    <div className="info-block">
                        <div className="title">Nadácia Good boy</div>
                        <a href="#" className="footer-link">O projekte </a>
                        <a href="#" className="footer-link">Ako na to</a>
                        <a href="#" className="footer-link">Kontakt</a>
                    </div>
                    <div className="info-block">
                        <div className="title">Nadácia Good boy</div>
                        <a href="#" className="footer-link"> O projekte </a>
                        <a href="#" className="footer-link"> Ako na to</a>
                        <a href="#" className="footer-link">Kontakt</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;