import restClient from '../../network/restClient';

const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_PASS: 'LOGIN_PASS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  CHANGEPAGE: 'CHANGEPAGE',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: (profile) =>{
    restClient.setTokenToAxio(profile.token);
    return ({
      type: actions.LOGIN_PASS,
      profile:profile
    })
  },
  logout: () => ({
    type: actions.LOGOUT
  }),
  changePage: (name) =>{
    return ({
      type: actions.CHANGEPAGE,
      pagename: name
    })
  } 
};
export default actions;
