const initialState = {
  alertOn: false,
  alertHeading: null,
  alertMessage: null,
};

const alertOperations = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_ALERT": {
      console.log(`Inside Alert Reducer ${action.type}`);
      return {
        ...state,
        alertOn: true,
        alertHeading: action.payload.alertHeading,
        alertMessage: action.payload.alertMessage,
      };
    }

    case "HIDE_ALERT":
      return {
        ...state,
        alertOn: false,
        alertHeading: null,
        alertMessage: null,
      };
    default:
      return state;
  }
};

export default alertOperations;
