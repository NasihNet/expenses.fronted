import { React, useEffect, useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import { DeleteExpenses, NewExpense ,EditExpense} from '../services/expenses';
import { useDispatch } from 'react-redux'


export default ({expense , setIsEditing}) => {
    const descriptions = ['Groceries', 'Credit Card', 'Student Loans'];
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();
     
useEffect(() => {

if (expense !== undefined) {
    setIsNewExpense(false);
    setAmount(expense.amount);

} else {
    setIsNewExpense(true);
}

},[expense]);

    return <Form onSubmit={event => {
        event.preventDefault();
        
        if (isNewExpense) {
            NewExpense(dispatch, { description: description, amount: amount });
        } else {
            debugger
            EditExpense(dispatch, {id: expense.id, description: description, amount: amount});
            setIsEditing(false);
         }
    }}>

        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as='input'
                    onChange={event => setDescription(event.target.value)} placeholder='Description'>
                  
                </Form.Control>
            </Col>

            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={amount}
                    onChange={event => setAmount(event.target.value)} />
            </Col>

            <div style={{ marginTop: 'auto' }}>
                {isNewExpense
                    ? <Button variant='primary' type='submit'>Add</Button>                  
                    : <div>
                        <Button style={{ marginRight: '2px'}} variant="danger"
                        onClick={() => DeleteExpenses(dispatch,expense)}>Delete</Button>
                        <Button style={{ marginRight: '2px'}} variant='success' type='submit'>Save</Button>
                        <Button style={{ marginRight: '2px'}} variant="info" onClick={() =>setIsEditing(false)}>Cancel</Button>
                    </div>}
            </div>
        </Row>
    </Form>


}