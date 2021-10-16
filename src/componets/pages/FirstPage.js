import styled from "styled-components"


import TopPageIndicator from '../topPageIndicator/TopPageIndicator';
import PageHeader from '../page-header/PageHeader';
import PaymentChoose from '../payment-choose/PaymentChoose';
import UserShelterSelect from '../user-shelter-select/UserShelterSelect';
import SumChooseBtns from '../sum-choose-btns/SumChooseBtns';
import NextPageBtn from '../next-page-btn/NextPageBtn';
import PrevPageBtn from '../prev-page-btn/PrevPageBtn';
import UpperTitle from '../upper-titles/UpperTitle';
import UpperSubTitle from '../upper-titles/UpperSubTitle';



const TitlesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 56px;
`
const PrevNextBtnsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`



const FirstPage = () => {


    return (

        <div style={{maxWidth:'557px'}}>

            {/* <!-- PAGE-DOTS BLOCK (Component) --> */}
            <TopPageIndicator/>


            {/* <!-- PAGE-HEADER BLOCK (Component)  --> */}
            <PageHeader headerTxt="Vyberte si možnosť, ako chcete pomôcť" />


            {/* <!-- PAYMENT-CHOOSE BLOCK (Component) --> */}
            <PaymentChoose/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <TitlesWrapper>
                <UpperTitle titleTxt={'O projekte'} />
                <UpperSubTitle subTitleTxt={'Nepovinné'} />
            </TitlesWrapper>

            {/* <!-- INPUT BLOCK (Component) --> */}
            <UserShelterSelect/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <TitlesWrapper>
                <UpperTitle titleTxt={'Suma, ktorou chcem prispieť'} />
            </TitlesWrapper>


            {/* <!-- CHOOSE-SUM BLOCK (Component) --> */}
            <SumChooseBtns/>


            {/* <!-- BTN BLOCK (Component) --> */}
            <PrevNextBtnsWrapper>
                <div></div>
                <NextPageBtn pageTxt={'Pokračovať'}/>
            </PrevNextBtnsWrapper>
            

        </div>
    )
}

export default FirstPage;