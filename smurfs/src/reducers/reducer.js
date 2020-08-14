import {
    //Import your actions here
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/actions';

const initialState = {
    smurfs: [],
    isFETCHING: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFETCHING: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFETCHING: false,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFETCHING: false,
                error: action.payload
            }
        case POST_START:
            return {
                ...state,
                isFETCHING: true,
                error: ''
            }
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFETCHING: false,
                error: ''
            }
        case POST_FAILURE:
            return {
                ...state,
                isFETCHING: false,
                error: action.payload
            }
        default:
            return state;
    }

}

export default reducer;