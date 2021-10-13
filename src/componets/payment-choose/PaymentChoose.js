import './paymentChoose.css'
import React, {Component} from "react";

import {connect} from 'react-redux';
import {certainShelterShoosed, sheltersRequested, sheltersLoaded} from '../../actions'
import PaymentChooseBtn from './payment-choose-btn/PaymentChooseBtn';
class PaymentChoose extends Component {

    



    render() {
        return (
            <div className="paymentChooseWrapper">

                <PaymentChooseBtn/>
                <PaymentChooseBtn toCertainShelter={false} isActive={true} />

    
                {/* <button className="payment-choose payment-choose__left">
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
                </button > */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // menuItems: state.menu,
        // loading: state.loading,
        // error: state.error
    }
}
const mapDispatchToProps = {
    //onItemFromCartDeleate
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentChoose);