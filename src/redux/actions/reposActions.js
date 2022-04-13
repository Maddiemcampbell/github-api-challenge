import * as types from "./actionTypes";
import Axios from "axios";

export function loadRepositorySuccess(repos) {
  return {
    type: types.LOAD_REPOS_SUCCESS,
    repos: repos
  };
}

export function loadRepository(token) {
  return function(dispatch) {
    return Axios.get(`https://api.github.com/user`, {
      headers: { Authorization: `bearer ${token}` }
    })
      .then(({ data }) => {
        Axios.get(`${data.repos_url}`).then(({ data }) => {
          dispatch(loadRepositorySuccess(data));
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
