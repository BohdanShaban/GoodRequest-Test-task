

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

const sheltersLoaded = (shelters) => {
    return {
        type: 'SHELTERS_LOADED',
        payload: shelters
    }
}

const sheltersRequested = () => {
    return {
        type: 'SHELTERS_REQUESTED'
    }
}


export {
    paymentTypeChoosed,
    paymentAmountChoosed,
    sheltersLoaded,
    sheltersRequested
};