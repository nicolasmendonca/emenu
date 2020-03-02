const primaryTheme = {
  primaryColor: '#bf25ff',
  secondaryColor: '#00ffe7',
  lighterBgColor: 'white',
  mainTitleBg: 'lightgray',
  mainTitleColor: 'black',
  shadowColor: '#00000042',
  mainBgColor: '#f3f3f3',
  bodyBgColor: '#f1f1f1',
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
