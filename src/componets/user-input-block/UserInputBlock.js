import './userInputBlock.css'
import React, {Component} from "react";
import {connect} from 'react-redux';

import {changePageNum} from '../../actions'
import flagImg from './slovak_flag.png'
import { userNamePassed, userSurnamePassed, userEmailPassed, userPhonePassed } from '../../actions' 



class UserInputBlock extends Component {

    state = {
        inputTxt: ''
    }

    onValueChange = (e) => {
        
        this.setState({ inputTxt: e.target.value }); // IMMUTABLE !!! 
        console.log( `AddCategModal Comp, onValueChange(), inputTxt: ${this.state.inputTxt}`);
    }

    userInputTypeValidate = () => {

    }


    render() {
        const { titleTxt, placeHolderTxt, isName, isSurname, isEmail, isPhone } = this.props;

        return (
            <div className="input-block">
                <div className="title title__input"> {titleTxt} </div>
                <div style={{display:'flex'}}>
                    { isPhone ? <img src={flagImg} style={{marginRight:'12px'}} alt='flag' /> : null }
                    <input id="textInput" type="text" className="input-label" placeholder={placeHolderTxt} 
                           onChange={this.onValueChange}  value={this.state.inputTxt} />
                </div> 
            </div>
        )
    }
}

UserInputBlock.defaultProps = {
    isName: false,
    isSurname: false,
    isEmail: false,
    isPhone: false
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputBlock);