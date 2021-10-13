import './sumChooseBtns.css'
import React, {Component} from "react";

import {connect} from 'react-redux';
import {paymentTypeChoosed, paymentAmountChoosed, sheltersLoaded} from '../../actions'


class SumChooseBtns extends Component {

    btnsGroupClick = (e) => {

        // TOGLE active CLASS
        const target = e.target;
        //console.dir(target);
        if(target && target.tagName === 'BUTTON') {

            document.querySelectorAll('.choose-sum-btn').forEach( menuItem => { menuItem.classList.remove('active'); })
            target.classList.add('active');

            // CHANGE STATE PARAM ( paymentType )
            this.props.paymentAmountChoosed( target.id );
            console.log(`paymentAmount: ${this.props.paymentAmount}`)
        }
    }


    render() {


        return (
            <div onClick={(e) => this.btnsGroupClick(e)} className="chooseSumBtnsGroup">

                <button id='5' className="choose-sum-btn">5 €</button>
                <button id='10' className="choose-sum-btn">10 €</button>
                <button id='20' className="choose-sum-btn">20 €</button>
                <button id='30' className="choose-sum-btn">30 €</button>
                <button id='50' className="choose-sum-btn active">50 €</button>  
                <button id='100' className="choose-sum-btn">100 €</button>
                <button id='_' className="choose-sum-btn"> __ €</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        paymentAmount: state.paymentAmount
    }
}
const mapDispatchToProps = {
    paymentAmountChoosed
}

export default connect(mapStateToProps, mapDispatchToProps)(SumChooseBtns);;