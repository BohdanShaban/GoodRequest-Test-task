import './paymentChooseBtn.css'
import styled from "styled-components"
import { Component } from 'react'

import {connect} from 'react-redux';
import {certainShelterShoosed, sheltersRequested, sheltersLoaded} from '../../../actions'

import pawImg from './paw.png'
import walletImg from './wallet.png'


const ChooseBtn = styled.button`
    width: 279px;
    height: 186px;
    display: block;
    cursor: pointer;
    border: 1px solid #CD8B65;

    // color: ${ props => props.active ? '#FFFFFF' : '#585757' }; 
    // background: ${ props => props.active ? 'linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)' : '#FAF9F9' };

    color: #585757; 
    background: #FAF9F9;

    border-radius: ${ props => props.isShelter ? '24px 0px 0px 24px' : '0px 24px 24px 0px' };

    &.active {
        color: #FFFFFF;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`


class PaymentChooseBtn extends Component {


    render() {

        const {toCertainShelter = true, isActive} = this.props;

        const labelTxt = toCertainShelter ? 'Chcem finančne prispieť konkrétnemu útulku' : 
                                            'Chcem finančne prispieť celej nadácii';
        const imgPath = toCertainShelter ? walletImg : pawImg;
        const btnIdStr = toCertainShelter ? 'shelter' : 'organization';

        const classNameStr = isActive ? 'payment-choose-btn active' : 'payment-choose-btn';

        return (
            
            <ChooseBtn isShelter={toCertainShelter} id={btnIdStr} className={classNameStr}>

                <div className="payment-choose__circle">
                    <img className="payment-choose__icon" src={imgPath} alt="imgPath"/>
                </div>
                <p className="payment-choose__text"> {labelTxt} </p>

            </ChooseBtn>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentChooseBtn);