import './userInputBlock.css'
import React, {Component} from "react";
import {connect} from 'react-redux';

import {changePageNum} from '../../actions'
import flagImg from './slovak_flag.png'



class UserInputBlock extends Component {


    render() {
        const { titleTxt, placeHolderTxt, isPhone } = this.props;

        return (
            <div className="input-block">
                <div className="title title__input"> {titleTxt} </div>
                <div style={{display:'flex'}}>
                    { isPhone ? <img src={flagImg} style={{marginRight:'12px'}} alt='flag' /> : null }
                    <input id="textInput" type="text" className="input-label" placeholder={placeHolderTxt} />
                </div> 
            </div>
        )
    }
}

UserInputBlock.defaultProps = {
    isPhone: false
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = {
    changePageNum
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputBlock);