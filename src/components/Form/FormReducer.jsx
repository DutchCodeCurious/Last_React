export const INITIAL_STATE = {
  users: {
    id: "",
    name: "",
    image: "",
  },
  events: {
    createdBy: "",
    title: "",
    description: "",
    image: "",
    categoryIds: [],
    location: "",
    startTime: "",
    endTime: "",
  },
  categories: {
    name: "",
  },
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return {
        ...state,
        users: {
          ...state.users,
          ...action.payload,
        },
      };
    case "UPDATE_EVENTS":
      return {
        ...state,
        events: {
          ...state.events,
          ...action.payload,
        },
      };
    case "UPDATE_CATEGORIES":
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
