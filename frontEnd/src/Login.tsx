import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
    const image = '/Images/loginBackground.jpg';

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5566/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.access_token);
            setMessage('Login successful');
            navigate('/navbar/home');
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Invalid credentials');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    const handleRegisterSubmit = async () => {
        try {
            const reqBody = {
                name,
                email,
                password,
            };
            await axios.post('http://localhost:5566/user/createUser', reqBody);
            setMessage('Registration successful');
            setIsRegistering(false);
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Registration failed');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div
            className='container'
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className={`login-card ${isRegistering ? 'flip' : ''}`} style={{ width: '400px', borderRadius: '15px' }}>
                <div className='card'>
                    <Form onFinish={handleSubmit} style={{ width: '100%', textAlign: 'center' }}>
                        <h2 className='login'>Login</h2>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email' }]}
                        >
                            <Input
                                className='input'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                        >
                            <Input.Password
                                className='input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ background: 'black', color: 'white', fontWeight: 'bolder', borderColor: 'red' }} htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <p>
                            Don't have an account?{' '}
                            <a href="#register-here" onClick={() => setIsRegistering(true)}>
                                Register Here
                            </a>
                        </p>
                    </Form>
                </div>
                <div className='card'>
                    <Form onFinish={handleRegisterSubmit} style={{ width: '100%', textAlign: 'center' }}>
                        <h2 className='login'>Register Account</h2>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input
                                className='input'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email' }]}
                        >
                            <Input
                                className='input'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                        >
                            <Input.Password
                                className='input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ background: 'black', color: 'white', fontWeight: 'bolder', borderColor: 'red' }} htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                        <p>
                            Already have an account?{' '}
                            <a href="#login" onClick={() => setIsRegistering(false)}>
                                Login Here
                            </a>
                        </p>
                    </Form>
                </div>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Login;
