const initState = {
    paymentType: '',
    paymentAmount:'',
    sheltersArr: [],
    selectedShelter: {},
    currentPage: 0,

    userName: '',
    userSurname: '',
    userEmail: '',
    userPhone: ''
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
        case 'SHELTERS_LOADED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                sheltersArr: action.payload,
                //loading: false,
                //error: false
            }
    
        case 'SHELTER_CHOOSED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                selectedShelter: action.payload,
                //loading: false,
                //error: false
            }
        case 'CHANGE_PAGE_NUM':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                currentPage: state.currentPage + action.payload
                //loading: false,
                //error: false
            }

        default:
            return state;
    }
}

export default reducer;