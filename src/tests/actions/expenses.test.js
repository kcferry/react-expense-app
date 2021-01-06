import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const creatMockStore = configureMockStore([thunk])

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action obbject', () => {
    const action = editExpense( 'abc123', {note: 'new note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'new note value'
        }
    })
})

test('Should set up add expense action obj with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
    const store = creatMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'THis one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

         return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        
        });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = creatMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

         return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults)
            done()
        
        });
})

// test('Should set up add expense action obj with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//         id: expect.any(String),
//         description: '',
//         note: '',
//         createdAt: 0,
//         amount: 0  
//         }   
//     })
// })
