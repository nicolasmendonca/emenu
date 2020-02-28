const primaryTheme = {
  primaryColor: 'white',
  mainTitleBg: 'lightgray',
  mainTitleColor: 'black',
};

// const secondaryTheme = {
//   primaryColor: 'red',
//   mainTitleBg: 'lightgray',
//   mainTitleColor: 'white',
// };

export const activeTheme = (state = primaryTheme, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
