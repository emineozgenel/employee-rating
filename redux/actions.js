import { gql } from '@apollo/client';
import client from '../api/apollo-client';
export const ADD_VOTE = 'ADD_VOTE';
export const GET_LIST = 'GET_LIST';

export const addVote = (id) => {
  return {
    type: ADD_VOTE,
    id,
  };
};

export const fetchUser = () => async (dispatch) => {
  try {
    const { data } = await client.query({
      query: gql`
        query GetUsers {
          users {
            id
            name
            rocket
            timestamp
            twitter
          }
        }
      `,
    });
    if (data) {
      let response = Object.values(data.users).map((item, k) => ({
        ...item,
        vote: 0,
        uid: k,
      }));
      dispatch({
        type: GET_LIST,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
