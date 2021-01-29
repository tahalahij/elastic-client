// import api from 'api';
// import jwt from 'jsonwebtoken';
//
// const initialState = {
//   data: {},
//   loading: false,
// };
// export const login = (data, cb) => async (dispatch) => {
//   try {
//     dispatch(loginStart());
//     const res = await api.auth.login(data);
//     const decoded = jwt.decode(res.data.token);
//
//     dispatch(
//       loginSuccess({
//         token: res.data.token,
//         ...decoded,
//       }),
//     );
//     if (cb) {
//       cb();
//     }
//   } catch (err) {
//     dispatch(loginFail());
//     if (err.response.data.message === 'Username Or Password Is Not Valid') {
//       dispatch(notifError('کلمه عبور یا نام کاربری اشتباه است'));
//     } else {
//       dispatch(notifError('خطا در ارتباط با سرور'));
//     }
//   }
// };
//
// export const {
//   loginStart,
//   loginSuccess,
//   loginFail,
//   logout,
// } = authSlice.actions;
//
// export default authSlice.reducer;
