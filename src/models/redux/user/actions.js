const actions = {
  SET_STATE: 'user/SET_STATE',
  LOGIN: 'user/LOGIN',
  RETRIEVING: 'user/RETRIEVE',
  LOAD_CURRENT_ACCOUNT: 'user/LOAD_CURRENT_ACCOUNT',
  LOGOUT: 'user/LOGOUT',
}

export const loginAction = ({ email, password }) => ({
  type: actions.LOGIN,
  payload: {
    email,
    password,
  },
})

export default actions
