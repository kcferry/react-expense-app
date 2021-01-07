import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'


let startEditExpense, history, wrapper, startRemoveExpense

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history} 
            expense={expenses[2]}
        />)
});

test('Should render edit expense page properly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('Should Handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
});


