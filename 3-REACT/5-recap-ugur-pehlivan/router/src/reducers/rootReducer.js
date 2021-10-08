const initialState = {
  cards: [
    {
      id: "1",
      title: "alex",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reprehenderit",
    },
    {
      id: "2",
      title: "wilma",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reprehenderit",
    },
    {
      id: "3",
      title: "john",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reprehenderit",
    },
  ],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      let newCards = state.cards.filter((card) => card.id !== action.id);
      return {
        ...state,
        cards: newCards,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
