import './paymentChoose.css'


const PaymentChoose = () => {


    return (
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
    )
}

export default PaymentChoose;