const initialState = {
    username: '',
    email: '',
    password: '',
};

export const profileReducer = (state = initialState, action) => {
     // kondisi yang akan mengubah nilai
     // state global berdasarkan action tertentu
     if (action.type === 'CREATE_PROFILE') {
        const data = action.payload;
        const newUsername = data.username;
        const newEmail = data.email;
        const newPassword = data.password;
        
        return {
          ...state,
          username: newUsername,
          email: newEmail,
          password: newPassword
        };
      }
     return state;
};