import './paymentChoose.css'
import React, {Component} from "react";

import {connect} from 'react-redux';
import {certainShelterShoosed, sheltersRequested, sheltersLoaded} from '../../actions'
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
        }

        // TOGLE active CLASS
        if(target && target.id === 'shelter') {
            //console.log('shelter');
            

        } else if (target && target.id === 'organization') {
            //console.log('organization');
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
        // menuItems: state.menu,
        // loading: state.loading,
        // error: state.error
    }
}
const mapDispatchToProps = {
    //onItemFromCartDeleate
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentChoose);