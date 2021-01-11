import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage' 
import { LoginPage } from '../../components/LoginPage'

test('Should render the loading page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})