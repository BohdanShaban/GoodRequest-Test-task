import './paymentChooseBtn.css'
import styled from "styled-components"

import pawImg from './paw.png'
import walletImg from './wallet.png'


const ChooseBtn = styled.button`
    width: 279px;
    height: 186px;
    display: block;
    cursor: pointer;
    border: 1px solid #CD8B65;

    color: ${ props => props.active ? '#FFFFFF' : '#585757' }; 
    background: ${ props => props.active ? 'linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)' : '#FAF9F9' };

    border-radius: ${ props => props.isShelter ? '24px 0px 0px 24px' : '0px 24px 24px 0px' };
`


const PaymentChooseBtn = ({toCertainShelter = true, isActive = false}) => {


    const labelTxt = toCertainShelter ? 'Chcem finančne prispieť konkrétnemu útulku' : 
                                      'Chcem finančne prispieť celej nadácii';
    const imgPath = toCertainShelter ? walletImg : pawImg;


    return (
        <div>
            <ChooseBtn active={isActive} isShelter={toCertainShelter} className="payment-choose__left">

                <div className="payment-choose__circle">
                    <img className="payment-choose__icon" src={imgPath} alt="imgPath"/>
                </div>
                <p className="payment-choose__text"> {labelTxt} </p>

            </ChooseBtn>
        </div>
    )
}

export default PaymentChooseBtn;