import './paymentChoose.css'
import React, {Component} from "react";

import {connect} from 'react-redux';
import {paymentTypeChoosed, sheltersRequested, sheltersLoaded} from '../../actions'
import PaymentChooseBtn from './payment-choose-btn/PaymentChooseBtn';

class PaymentChoose extends Component {

    paymentChooseClick = (e) => {
        //console.log('CLICKED !!!');

        // TOGLE active CLASS
        const target = e.target;
        //console.dir(target);
        if(target && target.tagName === 'BUTTON') {

            document.querySelectorAll('.payment-choose-btn').forEach( menuItem => { menuItem.classList.remove('active'); })
            target.classList.add('active');

            // CHANGE STATE PARAM ( paymentType )
            this.props.paymentTypeChoosed( target.id );
            //console.log(`PaymentType: ${this.props.paymentType}`)
        }
        
    }



    render() {
        return (
            <div onClick={(e) => this.paymentChooseClick(e)} className="paymentChooseWrapper">

                <PaymentChooseBtn/>
                <PaymentChooseBtn toCertainShelter={false} isActive={true} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        paymentType: state.paymentType
    }
}
const mapDispatchToProps = {
    paymentTypeChoosed
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentChoose);