const initState = {
    certainShelterSelected: false,
    sheltersArr: [],
    totalSum: 0
}


const reducer = (state = initState, action) => {

    switch(action.type) {
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
        
        case 'CERTAIN_SHELTER_CHOOSED': 
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                certainShelterSelected: true
            }

        default:
            return state;
    }
}

export default reducer;