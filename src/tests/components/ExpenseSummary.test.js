import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('Should render the summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={110} />)
    expect(wrapper).toMatchSnapshot()
});

test('Should render the summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={12} expenseTotal={1112387640} />)
    expect(wrapper).toMatchSnapshot()
})