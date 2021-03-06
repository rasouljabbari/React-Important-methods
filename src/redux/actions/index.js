import streams from "../../apis/streams";
import {
    SIGN_IN, SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
} from "../types/types";

export const signIn = (payload) => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}
export const createStream = formValues => async (dispatch , getState) => {
    const userId = getState().auth;
    const response = await streams.post('/streams', { ...formValues , userId});
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
}

export const deleteStream = (id) => async dispatch => {
    // Nothing is returned so we don't need response
    const response = await streams.delete(`/streams/${id}`);
    console.log(response)
    dispatch({
        type: DELETE_STREAM,
        payload: response.status
    })
}
