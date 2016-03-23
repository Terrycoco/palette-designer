import * as actions from 'actions/auth';
import authReducer from 'reducers/authReducer';

describe('auth actions', () =>{
  it('logs in anon', ()=>{
    const action = actions.loginAnonymous();
   console.log(action);
    expect(typeof actions.loginAnonymous()).to.equal('object');
  });
});

// describe('auth reducer', () => {
//   it('logs in anon to state', () => {
//
//   });
// });
