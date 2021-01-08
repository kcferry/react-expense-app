import React from 'react';
import { shallow } from 'enzyme'
import { Header } from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()

});

test('Should call startLogOut on button click', () => {
    const startLogOut = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogOut} />)
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled()

})