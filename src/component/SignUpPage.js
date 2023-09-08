
import {useState} from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {SignUp} from '../services/authentication';

const SignUpPage = () => {
    const [username, setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    return <div style={{ width: '30rem', margin: 'auto', paddingTop: '8px' }}>

        <Form onSubmit={event => {
            event.preventDefault();
            SignUp(dispatch,{email,username,password,confirmPassword});
        }}>
            <h4 style={{ textAlign: 'center' }}>Welcome Back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email' onChange={event => setEmail(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username' onChange={event => setUserName(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password' onChange={event => setPassword(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Confirm Password' type='password' onChange={event => setConfirmPassword(event.target.value)}></FormControl>
            </InputGroup>
            <Button type='submit' variant='success' style={{ margin: 'auto', display: 'block', width: '10rem' }}
            disabled={ confirmPassword !== password || password.length < 0}>Sign In</Button>
        </Form>
    </div>

}

export default SignUpPage