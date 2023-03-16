export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRegistrIn = state => state.auth.isRegistrIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectBalance = state => state.auth.balance;
// export const selectBalance = state => state.auth.user.balance;

export const selecIsNotNewUser = state => state.auth.isNotNewUser;
