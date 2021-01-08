import { TestScheduler } from "jest";

import { login, logout} from '../../actions/auth'

test('Should generate login action object', () => {
    const uid = 'dggfj27763'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('Should generate logout action onject', () => {
    const uid = 'dggfj27763'
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})