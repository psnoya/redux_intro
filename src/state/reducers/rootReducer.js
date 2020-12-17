import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case "TEST":
      return {
        ...state,
        message: {
          greeting: action.payload,
        }
      }

      case "STORE_USERS":
        return {
          ...state,
          users: action.payload
        }

      default:
        return state
  }
}

export default rootReducer
