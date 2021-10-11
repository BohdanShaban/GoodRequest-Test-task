import './firstPage.css'

import TopPageIndicator from '../../topPageIndicator/TopPageIndicator';
import PageHeader from '../../page-header/PageHeader';
import PaymentChoose from '../../payment-choose/PaymentChoose';
import UserInput from '../../user-input/UserInput';
import SumChooseBtns from '../../sum-choose-btns/SumChooseBtns';
import NextPageBtn from '../../next-page-btn/NextPageBtn';
import UpperTitle from '../../upper-titles/UpperTitle';
import UpperSubTitle from '../../upper-titles/UpperSubTitle';



const FirstPage = () => {


    return (

        <div className="page_content">

            {/* <!-- PAGE-DOTS BLOCK (Component) --> */}
            <TopPageIndicator/>


            {/* <!-- PAGE-HEADER BLOCK (Component)  --> */}
            <PageHeader headerTxt="Vyberte si možnosť, ako chcete pomôcť" />


            {/* <!-- PAYMENT-CHOOSE BLOCK (Component) --> */}
            <PaymentChoose/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <div className="titlesWrapper">
                <UpperTitle titleTxt={'O projekte'} />
                <UpperSubTitle subTitleTxt={'Nepovinné'} />
            </div>

            {/* <!-- INPUT BLOCK (Component) --> */}
            <UserInput/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <div className="titlesWrapper">
                <UpperTitle titleTxt={'Suma, ktorou chcem prispieť'} />
            </div>


            {/* <!-- CHOOSE-SUM BLOCK (Component) --> */}
            <SumChooseBtns/>


            {/* <!-- BTN BLOCK (Component) --> */}
            <NextPageBtn/>

        </div>
    )
}

export default FirstPage;