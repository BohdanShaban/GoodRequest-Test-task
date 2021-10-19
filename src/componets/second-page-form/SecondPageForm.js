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

// const Yup = require('yup');
// require('yup-phone');


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

            <label className="title title__input" htmlFor={props.name}>{label}</label>

            <div style={{display:'flex'}}>
                { isPhone ? <img src={flagImg} style={{marginRight:'12px'}} alt='flag' /> : null }
                
                    <input {...field} {...props} className="input-label" />
                    {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                    ) : null}
            </div> 
        </div>
      </>
    );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const SecondPageForm = () => {


    return (
        <Formik
            initialValues = {{
                name: '',
                surname: '',
                email: '',
                phone: '+421 '
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
                phone: Yup.number()
                        .typeError("That doesn't look like a phone number")
                        .positive("A phone number can't start with a minus")
                        .integer("A phone number can't include a decimal point")
                        .min(8)
                        .required('A phone number is required'),
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))} // !!! values is Obj 
        >
            <Form className="form">

                 {/* <!-- TITLES BLOCK-S (Component-s) --> */}
                <TitlesWrapper>
                    <UpperTitle titleTxt={'O vás'} />
                </TitlesWrapper>

                <MyTextInput
                    placeholder='Zadajte Vaše meno'
                    label="Meno"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                
                <MyTextInput
                    placeholder='Zadajte Vaše priezvisko'
                    label="Priezvisko"
                    id="surname"
                    name="surname"
                    type="text"
                    autoComplete="off"
                />

                <MyTextInput
                    placeholder='Zadajte Váš e-mail'
                    label="E-mailová adresa"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                />

                <MyTextInput
                    isPhone
                    label="Telefónne číslo"
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                />
                
                
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