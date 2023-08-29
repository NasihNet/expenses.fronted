

import { setExpenses, newExpense, editExpense, deleteExpense,
    setExpensesError, editExpenseError, newExpenseError, deleteExpenseError } from "../app/expensesSlice";
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL : 'https://localhost:7055/Expenses',

});

export const GetExpenses = async (dispatch) => {

    try {
        const { data } = await axiosInstance.get();

        dispatch(setExpenses(data));
    } catch (error) {
       
        dispatch(setExpensesError());
    }

}


export const NewExpense = async (dispatch, expense) => {
    
    try {
        const { data } = await axiosInstance.post("",expense);
        //api call
        dispatch(newExpense(data))
    } catch (error) {
        dispatch(newExpenseError());
    }

}

export const EditExpense = async (dispatch, expense) => {
    debugger
    try {
       
        //api call
        const { data } = await axiosInstance.put("",expense);
        dispatch(editExpense(data))
    } catch (error) {
        dispatch(editExpenseError());
    }

}

export const DeleteExpenses = async (dispatch, expense) => {
    
    try {
        //api call
       await axiosInstance.delete("",{data: {...expense}});
        dispatch(deleteExpense(expense))
    } catch (error) {
        dispatch(deleteExpenseError());
    }

}