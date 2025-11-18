const appReducer=combineReducers({

})

const rootReducer = (state: any, action: any) => {
  if (action.type === 'logout') {
    const resetState = appReducer(undefined, action);
    return {
      ...resetState,
    };
  } else {
    return appReducer(state, action);
  }
}

export default rootReducer;