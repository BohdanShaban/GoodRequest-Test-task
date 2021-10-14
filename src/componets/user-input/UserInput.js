import './userInput.css'
import React, { Component } from 'react';
import Select from 'react-select'

import {connect} from 'react-redux';
import {paymentTypeChoosed, paymentAmountChoosed, sheltersLoaded} from '../../actions'


const options = [
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' }
]

const style = {
  control: base => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: 'none'
  }),
  indicatorSeparator: (styles) => ({display:'none'})
};

const SelectPlaceholder = (
  <div>
    <div className="title title__input">Útulok</div>
    <div className="input-label">Vyberte útulok zo zoznamu</div>
  </div>
)


class UserInput extends Component {

    state = {
      disabled: true
    }

    componentDidMount() {
      this.checkPaymentType();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.paymentType !== this.props.paymentType){
        this.checkPaymentType();
      }
    }


    checkPaymentType = () => {
      if(this.props.paymentType === 'organization') {
        this.setState({disabled:true})
      } else { this.setState({disabled:false}) }
    }

    render() {
      return (

        <div  className='input-block'>
          
          <Select placeholder={SelectPlaceholder} 
                  isDisabled={this.state.disabled} 
                  onChange={this.selectValueChange} 
                  styles={style} options={options} 
                  isSearchable={false} 
          />
  
        </div>
      )
    }
}


const mapStateToProps = (state) => {
  return {
    paymentType: state.paymentType
  }
}
const mapDispatchToProps = {
  //paymentAmountChoosed
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);