

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


export {
    paymentTypeChoosed,
    paymentAmountChoosed,
    sheltersLoaded,
    certainShelterChoosed,
    changePageNum
};