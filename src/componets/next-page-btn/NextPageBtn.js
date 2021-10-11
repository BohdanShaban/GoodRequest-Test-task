import './nextPageBtn.css'

import styled from "styled-components"


const NextBtn = styled.div`
    padding: 20px 24px;
    background: ${ props => props.isActive ? 'linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)' : '#9F9F9F' };
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    color: #FFFFFF;
`


const NextPageBtn = ({active}) => {

    return (
        <NextBtn isActive={active} > Pokračovať </NextBtn>
    )
}

export default NextPageBtn;