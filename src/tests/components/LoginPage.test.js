import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render login page', () => {
    const wrapper = shallow(< LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogInGoogle on button click', () => {
    const startLoginGoogle = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} />)
    wrapper.find('button').at(0).simulate('click')
    expect(startLoginGoogle).toHaveBeenCalled()
})

test('Should call startLogInGithub on button click', () => {
    const startLoginGithub = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGithub={startLoginGithub} />)
    wrapper.find('button').at(1).simulate('click')
    expect(startLoginGithub).toHaveBeenCalled()
})

