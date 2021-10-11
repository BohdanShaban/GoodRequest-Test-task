import dogImg from './Mask_Group.png'

import styled from "styled-components"


const ImageWrapper = styled.div`

    margin-left: 65px;
    width: 364px;
    height: 730px;
`



const RightImage = () => {


    return (
        <ImageWrapper> 
            <img src={dogImg} alt="Mask_Group"/> 
        </ImageWrapper>
    )
}

export default RightImage;