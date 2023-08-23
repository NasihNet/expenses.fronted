

import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {

    try {
        const expenses = [
            { id: 1, description: 'Groceries', amount: 23.166 },
            { id: 2, description: 'Gas', amount: 18.52 },
            { id: 3, description: 'Student Loan', amount: 600 },
        ]

        dispatch(ActionCreators.setExpenses(expenses));
    } catch (error) {
        console.log('Error!');
    }

}


export const NewExpense = async (dispatch, expense) => {
    
    try {

        //api call
        dispatch(ActionCreators.newExpenses({ id: 10, description: expense.description, amount: expense.amount }))
    } catch (error) {
        console.log('Error!');
    }

}

export const EditExpense = async (dispatch, expense) => {
    debugger
    try {
       
        //api call
        dispatch(ActionCreators.editExpenses(expense))
    } catch (error) {
        console.log('Error!');
    }

}

export const DeleteExpenses = async (dispatch, expense) => {
    
    try {
        //api call
        dispatch(ActionCreators.deleteExpenses(expense))
    } catch (error) {
        console.log('Error!');
    }

}