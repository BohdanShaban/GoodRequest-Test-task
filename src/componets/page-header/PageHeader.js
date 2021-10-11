import styled from "styled-components"

const Header = styled.h1`
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;

    margin-top: 28px;
`


const PageHeader = ({headerTxt}) => {


    return (
        <Header> {headerTxt} </Header>
    )
}

export default PageHeader;