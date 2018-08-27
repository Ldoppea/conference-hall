import { types } from 'k-ramel'
import split from 'lodash/split'

const defaultData = {
  providers: split(process.env.REACT_APP_AUTH_PROVIDERS, ','),
  initialized: false,
  authenticated: false,
  uid: undefined,
  signinError: {},
  signupError: {},
  changePasswordError: {},
}

export default types.object({ defaultData })
