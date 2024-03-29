export default (state, action) => {
  switch (action.type) {
    case "RECEIEVE_USERS":
      return { ...state, users: [...action.payload] };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    default:
      return state;
  }
};
