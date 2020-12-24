import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const text = 'Hello world'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set startdate', () => {
    const startDate = moment(1)
    const action = {
        type: 'SET_START_DATE',
        startDate,
    }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate,
        endDate: moment().endOf('month')
    })
});

test('Should set endDate', () => {
    const endDate = moment(1)
    const action = {
        type: 'SET_END_DATE',
        endDate,
    }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate
    })
});