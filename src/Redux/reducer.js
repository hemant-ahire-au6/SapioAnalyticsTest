let initialState = {
  liked: [],
  character: [],
  characterTwo: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        character: payload,
        characterTwo: payload,
      };

    case "SET_LIKED_CHARACTERS":
      return {
        ...state,
        liked: [...state.liked, payload],
      };

    case "SET_DISLIKED_CHARACTERS":
      const array = [...state.liked];
      const index = array.indexOf(payload);

      if (index > -1) {
        array.splice(index, 1);
      }

      return {
        ...state,
        liked: array,
      };

    case "SEARCH_CHARACTERS":
      var searchItems;

      if (payload.toLowerCase() === "male") {
        searchItems = state.characterTwo.filter((data) => {
          return data.gender.toLowerCase() === "male";
        });
      } else if (payload.toLowerCase() === "female") {
        searchItems = state.characterTwo.filter((data) => {
          return data.gender.toLowerCase() === "female";
        });
      } else {
        searchItems = state.characterTwo.filter((data) => {
          return (
            data.name.toLowerCase().includes(payload.toLowerCase()) ||
            data.status.toLowerCase().includes(payload.toLowerCase()) ||
            data.species.toLowerCase().includes(payload.toLowerCase())
          );
        });
      }

      // const searchItems = state.characterTwo.filter((data) => {
      //   return (
      //     data.name.toLowerCase().includes(payload.toLowerCase()) ||
      //     data.gender.toLowerCase().includes(payload.toLowerCase()) ||
      //     data.status.toLowerCase().includes(payload.toLowerCase()) ||
      //     data.species.toLowerCase().includes(payload.toLowerCase())
      //   );
      // });
      console.log(searchItems);
      return { ...state, character: searchItems };

    default:
      return state;
  }
};

export default reducer;
