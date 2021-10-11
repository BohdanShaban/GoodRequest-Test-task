import styled from "styled-components"


const PrevBtn = styled.div`
    padding: 20px 24px;
    background: #F3E2D9;
    border-radius: 100px;

    font-family: Public Sans;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: #2F2F2F;
`


const PrevPageBtn = ({active}) => {

    return (
        <PrevBtn > Späť </PrevBtn>
    )
}

export default PrevPageBtn;