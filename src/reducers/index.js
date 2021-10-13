const initState = {
    paymentType: '',
    paymentAmount:'',
    sheltersArr: []
}


const reducer = (state = initState, action) => {

    switch(action.type) {

        case 'PAYMENT_TYPE_CHOOSED': 
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                paymentType: action.payload
            }

        case 'PAYMENT_AMOUNT_CHOOSED': 
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                paymentAmount: action.payload
            }
        
        case 'SHELTERS_REQUESTED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                shelters: state.sheltersArr,
                //loading: true,
                //error: false
            };

        case 'SHELTERS_LOADED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                sheltersArr: action.payload,
                //loading: false,
                //error: false
            }

        default:
            return state;
    }
}

export default reducer;