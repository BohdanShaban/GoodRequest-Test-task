import styled from "styled-components"


const SubTitle = styled.div`

    margin-bottom: 13px;

    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;

    color: #2F2F2F;
    opacity: 0.8;
`


const UpperSubTitle = ({subTitleTxt}) => {


    return (
        <SubTitle> {subTitleTxt} </SubTitle>
    )
}

export default UpperSubTitle;