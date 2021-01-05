import { TestScheduler } from 'jest'
import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return amount of 0 ', () => {
    const action = selectExpensesTotal([])
    expect(action).toBe(0)
})

test('Should return amount of one expense', () => {
    const action = selectExpensesTotal([expenses[0]])
    expect(action).toBe(195)
})

test('Should return amount of all expenses', () => {
    const action = selectExpensesTotal(expenses)
    expect(action).toBe(114195);
})