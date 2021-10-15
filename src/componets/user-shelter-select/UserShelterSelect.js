import './userInput.css'
import React, { Component } from 'react';
import Select from 'react-select'

import {connect} from 'react-redux';
import {sheltersLoaded, certainShelterChoosed} from '../../actions'
import SheltersService from '../../services/SheltersService.js'


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


class UserShelterSelect extends Component {

    apiService = new SheltersService();

    state = {
      disabled: true,
      sheltersForSelectArr: []
    }

    componentDidMount() {
      this.checkPaymentType();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.paymentType !== this.props.paymentType){
        this.checkPaymentType();
        if(!this.state.disabled) {
          this.loadDataToStore();
        }
      }
    }

    loadDataToStore = () => {
      this.apiService.getAllShelters()
        .then( res => this.props.sheltersLoaded(res.shelters) )
        .then( () => this.transformDataForSelect() )
      console.log('DATA LOADED ............')
    }

    transformDataForSelect = () => {
      console.dir(this.props.sheltersArr);

      function renameKeys(obj, newKeys) {
        const keyValues = Object.keys(obj).map(key => {
          const newKey = newKeys[key] || key;
          return { [newKey]: obj[key] };
        });
        return Object.assign({}, ...keyValues);
      }

      const initSheltersArr = this.props.sheltersArr;
      let newArr = [];
      initSheltersArr.forEach( obj => {
        const newKeys = { id: "value", name: "label" };
        const renamedSingleObj = renameKeys(obj, newKeys);
        newArr.push(renamedSingleObj);
      });
      newArr.forEach( obj => {
        obj.value = obj.value.toString();
      })
      //console.dir(newArr)
      this.setState({sheltersForSelectArr: newArr})
    }

    checkPaymentType = () => {
      if(this.props.paymentType === 'organization') {
        this.setState({disabled:true})
      } else { this.setState({disabled:false}) }
    }

    selectValueChange = (selectedObj) => {
      console.log(`Selected: ${selectedObj.label}`);
      this.props.certainShelterChoosed(selectedObj);
    }

    render() {
      return (

        <div  className='input-block'>
          
          <Select placeholder={SelectPlaceholder} 
                  isDisabled={this.state.disabled} 
                  onChange={this.selectValueChange} 
                  styles={style}
                  options={this.state.sheltersForSelectArr} 
                  isSearchable={false} 
          />
  
        </div>
      )
    }
}


const mapStateToProps = (state) => {
  return {
    paymentType: state.paymentType,
    sheltersArr: state.sheltersArr,
    selectedShelter: state.selectedShelter
  }
}
const mapDispatchToProps = {
  sheltersLoaded,
  certainShelterChoosed
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShelterSelect);