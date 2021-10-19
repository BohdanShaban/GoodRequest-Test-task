

const paymentTypeChoosed = (idStr) => {
    return {
        type: 'PAYMENT_TYPE_CHOOSED',
        payload: idStr
    }
}

const paymentAmountChoosed = (tagIdStr) => {
    return {
        type: 'PAYMENT_AMOUNT_CHOOSED',
        payload: tagIdStr
    }
}

const sheltersLoaded = (newShelters) => {
    return {
        type: 'SHELTERS_LOADED',
        payload: newShelters
    }
}

const certainShelterChoosed = (chosedShelter) => {
    return {
        type: 'SHELTER_CHOOSED',
        payload: chosedShelter
    }
}

const changePageNum =  (iterator) => {
    return  {
        type: 'CHANGE_PAGE_NUM',
        payload: iterator
    }
}

const userNamePassed =  (nameStr) => {
    return  {
        type: 'USER_NAME_PASS',
        payload: nameStr
    }
}
const userSurnamePassed =  (surnameStr) => {
    return  {
        type: 'USER_SURNAME_PASS',
        payload: surnameStr
    }
}
const userEmailPassed =  (mailStr) => {
    return  {
        type: 'USER_EMAIL_PASS',
        payload: mailStr
    }
}
const userPhonePassed =  (phoneStr) => {
    return  {
        type: 'USER_PHONE_PASS',
        payload: phoneStr
    }
}



export {
    paymentTypeChoosed,
    paymentAmountChoosed,
    sheltersLoaded,
    certainShelterChoosed,
    changePageNum, 

    userNamePassed,
    userSurnamePassed,
    userEmailPassed,
    userPhonePassed
};