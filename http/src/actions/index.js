import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = (friends) => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/friends';
    const friendRequest = axios.get(apiUrl);
       
    // redux-promise middleware takes care of resolving the promise
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    };
};

//enter redux-promise axios

