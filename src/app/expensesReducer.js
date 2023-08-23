const initialState = {
    expenses: [],
};

export const ActionType = {
    SET_EXPENSES: 'SET_EXPENSES',
    NEW_EXPENSES: 'NEW_EXPENSES',
    EDIT_EXPENSES: 'EDIT_EXPENSES',
    DELETE_EXPENSES: 'DELETE_EXPENSES',
};

export const ActionCreators = {
    setExpenses: payload => ({ type: ActionType.SET_EXPENSES, payload }),
    newExpenses: payload => ({ type: ActionType.NEW_EXPENSES, payload }),
    editExpenses: payload => ({ type: ActionType.EDIT_EXPENSES, payload }),
    deleteExpenses: payload => ({ type: ActionType.DELETE_EXPENSES, payload }),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_EXPENSES:
            return { ...state, expenses: [...action.payload] };
        case ActionType.NEW_EXPENSES:
            return { ...state, expenses: [action.payload, ...state.expenses] };
        case ActionType.EDIT_EXPENSES: {
            const expenses = state.expenses.map(expense => {
                if (expense.id === action.payload.id) {
                    expense = action.payload;
                }
                return expense;
            });
            return { ...state, expenses: [...expenses] };
        }
        case ActionType.DELETE_EXPENSES:
            {
                const expenses = state.expenses.filter(expense =>
                    expense.id !== action.payload.id);
                return { ...state, expenses: [...expenses] };
    
            }
        default:
            return state;
    }
};
