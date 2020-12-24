import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INTIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expenses', () => {
    const expense = {
        id: '6',
        description: 'TV',
        note: '',
        amount: 245,
        createdAt: 12
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expenses', () => {
    const description = 'Phone Bill'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test('Should NOT edit an expenses if ID not found', () => {
    const description = 'Phone Bill'
    const action = {
        type: 'EDIT_EXPENSE',
        id: 34,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})




