import './secondPageForm.css'
import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components"
import {connect} from 'react-redux';


import NextPageBtn from '../next-page-btn/NextPageBtn';
import PrevPageBtn from '../prev-page-btn/PrevPageBtn';
import UpperTitle from '../upper-titles/UpperTitle';
import flagImg from './slovak_flag.png'


const PrevNextBtnsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`
const TitlesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 56px;
`

const MyTextInput = ({ label, isPhone=false, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="input-block">
            {/* <div className="title title__input"> {titleTxt} </div> */}
            <label className="title title__input" htmlFor={props.name}>{label}</label>

            <div style={{display:'flex'}}>
                { isPhone ? <img src={flagImg} style={{marginRight:'12px'}} alt='flag' /> : null }
                {/* <input className="input-label" placeholder={placeHolderTxt} 
                    onChange={this.onValueChange}  value={this.state.inputTxt} /> */}
                    <input {...field} {...props} className="input-label" />
                    {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                    ) : null}
            </div> 
        </div>

        {/* <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null} */}
      </>
    );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const SecondPageForm = () => {


    return (
        <Formik
            initialValues = {{
                name: 'Zadajte Vaše meno',
                surname: 'Zadajte Vaše priezvisko',
                email: 'Zadajte Váš e-mail',
                phoneNumber: '+421 '
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Min 2 characters to conmpeate is neded')
                        .required('This Field is Required!'),
                surname: Yup.string()
                        .min(2, 'Min 2 characters to conmpeate is neded')
                        .required('This Field is Required!'),
                email: Yup.string()
                        .email('Wrong email')
                        .required('This Field is Required!'),
                phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))} // !!! values is Obj 
        >
            <Form className="form">

                 {/* <!-- TITLES BLOCK-S (Component-s) --> */}
                <TitlesWrapper>
                    <UpperTitle titleTxt={'O vás'} />
                </TitlesWrapper>

                <MyTextInput
                    label="Meno"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                
                <MyTextInput
                    label="Priezvisko"
                    id="surname"
                    name="surname"
                    type="text"
                    autoComplete="off"
                />

                <MyTextInput
                    label="E-mailová adresa"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                />


                
                {/* <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                    autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name="amount"/>

                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage component="div" className="error" name="currency"/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage component="div" className="error" name="text"/> */}
                
                {/* <!-- BTN BLOCK (Component) --> */}
                <PrevNextBtnsWrapper>
                    <PrevPageBtn pageTxt={'Späť'}/>
                    <NextPageBtn pageTxt={'Pokračovať'}/>
                </PrevNextBtnsWrapper>

            </Form>
        </Formik>
    )
}

const mapStateToProps = (state) => {
    return {
        //currentPage: state.currentPage
    }
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPageForm);