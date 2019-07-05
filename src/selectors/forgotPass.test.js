import {
  getError,
  getMessage
} from './forgotPass';

describe('forgotPass selectors', () => {
  const state = {
    forgotPass: {
      error: 'oops',
      message: 'Email sent'
    },
  };

  it('gets error', () => expect(getError(state)).toEqual('oops'));

  it('gets message', () => expect(getMessage(state)).toEqual('Email sent'));
});
