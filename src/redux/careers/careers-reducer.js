import {CAREERS} from "./careers.data";

const INITIAL_STATE = {
    careers: CAREERS,
    selectedCareer: null,
    error: null,
    loading: false
}

const careersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default:
            return state;
    }

}


export default careersReducer;
