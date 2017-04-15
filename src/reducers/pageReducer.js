const page = (state={}, action) => {
  switch (action.type) {
    case 'PAGE_INCREASE':
      return Object.assign(
        {},
        state,
        {pageNumber: action.pageNumber}
      )
    default: 
      return state;
  }
};

export default page;
