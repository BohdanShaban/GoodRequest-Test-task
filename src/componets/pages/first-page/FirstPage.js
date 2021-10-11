import './firstPage.css'

import TopPageIndicator from '../../topPageIndicator/TopPageIndicator';
import PageHeader from '../../page-header/PageHeader';
import PaymentChoose from '../../payment-choose/PaymentChoose';
import UserInput from '../../user-input/UserInput';
import SumChooseBtns from '../../sum-choose-btns/SumChooseBtns';
import NextPageBtn from '../../next-page-btn/NextPageBtn';



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
                <div className="title">O projekte</div>
                <div className="sub-title">Nepovinné</div>
            </div>

            {/* <!-- INPUT BLOCK (Component) --> */}
            <UserInput/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <div className="titlesWrapper">
                <div className="title">Suma, ktorou chcem prispieť</div>
            </div>


            {/* <!-- CHOOSE-SUM BLOCK (Component) --> */}
            <SumChooseBtns/>


            {/* <!-- BTN BLOCK (Component) --> */}
            <NextPageBtn/>

        </div>
    )
}

export default FirstPage;