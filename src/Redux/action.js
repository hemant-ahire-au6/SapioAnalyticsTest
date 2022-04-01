import axios from "axios";

export const callAllCharacter = (data) => {
  return async (dispatch) => {
    dispatch({ type: "CALL_CHARACTER_API" });
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(res);

    dispatch({ type: "GET_CHARACTERS", payload: res.data.results });
  };
};

// const res = await axios.get("https://fakestoreapi.com/products");

export const getAllCharacter = (data) => {
  console.log(data);
  return {
    type: "GET_CHARACTERS",
    payload: data,
  };
};

export const setLikedCharacters = (data) => {

  return {
    type: "SET_LIKED_CHARACTERS",
    payload: data,
  };
};


export const setDislikedCharacters = (data) => {

  return {
    type: "SET_DISLIKED_CHARACTERS",
    payload: data,
  };
};

export const searchCharacters = (data) => {

  return {
    type: "SEARCH_CHARACTERS",
    payload: data,
  };
};


