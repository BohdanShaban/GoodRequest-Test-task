import styled from "styled-components"


import TopPageIndicator from '../topPageIndicator/TopPageIndicator';
import PageHeader from '../page-header/PageHeader';
import NextPageBtn from '../next-page-btn/NextPageBtn';
import PrevPageBtn from '../prev-page-btn/PrevPageBtn';
import UpperTitle from '../upper-titles/UpperTitle';
import UserInputBlock from "../user-input-block/UserInputBlock";



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



const SecondPage = () => {


    return (    

        <div style={{maxWidth:'557px'}}>

            {/* <!-- PAGE-DOTS BLOCK (Component) --> */}
            <TopPageIndicator/>


            {/* <!-- PAGE-HEADER BLOCK (Component)  --> */}
            <PageHeader headerTxt="Potrebujeme od Vás zopár informácií" />
            


            {/* <!-- TITLES BLOCK-S (Component-s) --> */}
            <TitlesWrapper>
                <UpperTitle titleTxt={'O vás'} />
            </TitlesWrapper>


            {/* <!-- USER INPUT BLOCK (Component) --> */}
            <UserInputBlock/>


            {/* <!-- BTN BLOCK (Component) --> */}
            <PrevNextBtnsWrapper>
                <PrevPageBtn pageTxt={'Späť'}/>
                <NextPageBtn pageTxt={'Pokračovať'}/>
            </PrevNextBtnsWrapper>
            

        </div>
    )
}

export default SecondPage;