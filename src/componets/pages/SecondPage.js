//import styled from "styled-components"


import TopPageIndicator from '../topPageIndicator/TopPageIndicator';
import PageHeader from '../page-header/PageHeader';
import SecondPageForm from '../second-page-form/SecondPageForm';


// import NextPageBtn from '../next-page-btn/NextPageBtn';
// import PrevPageBtn from '../prev-page-btn/PrevPageBtn';
// import UpperTitle from '../upper-titles/UpperTitle';
import UserInputBlock from "../user-input-block/UserInputBlock";

// actionFunction Passed in UserInputBlock Comp

// const TitlesWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 56px;
// `
// const PrevNextBtnsWrapper = styled.div`
//     margin-top: 50px;
//     display: flex;
//     justify-content: space-between;
// `



const SecondPage = () => {


    return (    

        <div style={{maxWidth:'557px'}}>

            {/* <!-- PAGE-DOTS BLOCK (Component) --> */}
            <TopPageIndicator/>


            {/* <!-- PAGE-HEADER BLOCK (Component)  --> */}
            <PageHeader headerTxt="Potrebujeme od Vás zopár informácií" />


            {/* <!-- SECOND PAGE FORM (Component) --> */}
            <SecondPageForm/>


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            {/* <TitlesWrapper>
                <UpperTitle titleTxt={'O vás'} />
            </TitlesWrapper> */}


            {/* <!-- USER INPUT BLOCK (Component) --> */}
            {/* <UserInputBlock isName titleTxt={'Meno'} placeHolderTxt={'Zadajte Vaše meno'}  />
            <UserInputBlock isSurname titleTxt={'Priezvisko'} placeHolderTxt={'Zadajte Vaše priezvisko'}  />
            <UserInputBlock isEmail titleTxt={'E-mailová adresa'} placeHolderTxt={'Zadajte Váš e-mail'}  />
            <UserInputBlock isPhone titleTxt={'Telefónne číslo'} placeHolderTxt={'+421'} name="phone" /> */}


            {/* <!-- BTN BLOCK (Component) --> */}
            {/* <PrevNextBtnsWrapper>
                <PrevPageBtn pageTxt={'Späť'}/>
                <NextPageBtn pageTxt={'Pokračovať'}/>
            </PrevNextBtnsWrapper> */}
            

        </div>
    )
}

export default SecondPage;