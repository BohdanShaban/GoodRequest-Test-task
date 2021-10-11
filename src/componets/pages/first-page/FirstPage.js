import './firstPage.css'


const FirstPage = () => {


    return (
        <div className="page_content">

            {/* <!-- PAGE-DOTS BLOCK (Component) --> */}
            <div className="page-dots">
                <div className="page__dot page__dot_active"></div> 
                <div className="page__dot"></div>
                <div className="page__dot"></div>
            </div>

            {/* <!-- HEADER BLOCK (Component) --> */}
            <h1 className="page-header">Vyberte si možnosť, ako chcete pomôcť</h1>

            {/* <!-- PAYMENT-CHOOSE BLOCK (Component) --> */}
            <div className="payment">

                <button className="payment-choose payment-choose__left">
                    <div className="payment-choose__circle">
                        <img className="payment-choose__icon" src="./icons/wallet.png" alt="wallet"/>
                    </div>
                    <p className="payment-choose__text">Chcem finančne prispieť <br/> konkrétnemu útulku</p>
                </button>

                <button className="payment-choose payment-choose__right active"> 
                    <div className="payment-choose__circle">
                        <img className="payment-choose__icon" src="./icons/paw.png" alt="paw"/>
                    </div>
                    <p className="payment-choose__text">Chcem finančne prispieť <br/> celej nadácii</p>
                </button>
            </div>

            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <div className="titlesWrapper">
                <div className="title">O projekte</div>
                <div className="sub-title">Nepovinné</div>
            </div>

            {/* <!-- INPUT BLOCK (Component) --> */}
            <div className="input-block">
                <div className="title title__input">Útulok</div>
                <input id="textInput" type="text" className="input-label" placeholder="Zadajte Vaše meno"/>
            </div>

            <div className="titlesWrapper">
                <div className="title">Suma, ktorou chcem prispieť</div>
            </div>

            {/* <!-- CHOOSE-SUM BLOCK (Component) --> */}
            <div className="chooseSumWrapper">
                <div className="choose-block">5 €</div>
                <div className="choose-block">10 €</div>
                <div className="choose-block">20 €</div>
                <div className="choose-block">30 €</div>
                <div className="choose-block active">50 €</div>  
                <div className="choose-block">100 €</div>
                <div className="choose-block"> __ €</div>
            </div>

            {/* <!-- BTN BLOCK (Component) --> */}
            <div className="buttonsWrapper">
                <div></div>
                <div className="btn-next active">Pokračovať </div>
            </div>

        </div>
    )
}

export default FirstPage;