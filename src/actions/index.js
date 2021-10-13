

const certainShelterShoosed = () => {
    return {
        type: 'CERTAIN_SHELTER_CHOOSED'
    }
}

const sheltersLoaded = (shelters) => {
    return {
        type: 'SHELTERS_LOADED',
        payload: shelters
    }
}

const menuRequested = () => {
    return {
        type: 'SHELTERS_REQUESTED'
    }
}


export {
    certainShelterShoosed,
    sheltersLoaded,
    menuRequested
};