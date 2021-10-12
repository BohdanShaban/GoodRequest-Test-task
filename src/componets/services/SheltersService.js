export default class SheltersService {  

    constructor() {
      this._apiUrlBase = 'https://frontend-assignment-api.goodrequest.com/api/v1'; // !!!  this.  !!!
    }
  
    // !!!!!  CRUCIAL THING: Where Promice Will Be Returned ? -> Then .then() Should Be Used  !!!!!
    getResource = async (url) => { // BASE f() FOR ALL NEXT f()s
  
      const res = await fetch(`${this._apiUrlBase}${url}`); //  !!!  await -> fetch()  !!! 
  
      if (! res.ok) { throw new Error(`!!!!!! COULD NOT GET ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };
  
      return await res.json(); //  !!!  await -> .json()  !!! 
    }

    getAllShelters = async () => {
        const shelters = await this.getResource(`/shelters`);
        return shelters;
    }

}