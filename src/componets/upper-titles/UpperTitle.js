import styled from "styled-components"


const Title = styled.div`

    margin-bottom: 15px;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
`


const UpperTitle = ({titleTxt}) => {


    return (
        <Title> {titleTxt} </Title>
    )
}

export default UpperTitle;