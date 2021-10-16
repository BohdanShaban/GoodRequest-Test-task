import './userInputBlock.css'
import React, {Component} from "react";
import {connect} from 'react-redux';

import {changePageNum} from '../../actions'



class UserInputBlock extends Component {


    render() {

        return (
            <div class="input-block">
                <div class="title title__input">Útulok</div>
                <input id="textInput" type="text" class="input-label" placeholder="Zadajte Vaše meno" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = {
    changePageNum
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputBlock);