import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | ''>('');
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
            setStatus('success');
            setTimeout(() => {
                setMessage('');
                setStatus('');
                navigate('/navbar/home');
            }, 2000);
        } catch (error) {
            setStatus('error');
            if (error.response && error.response.data) {
                setMessage('Credentials are wrong');
            } else {
                setMessage('An error occurred. Please try again.');
            }
            setTimeout(() => {
                setMessage('');
                setStatus('');
            }, 2000);
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
            setStatus('success');
            setIsRegistering(false);
            setTimeout(() => {
                setMessage('');
                setStatus('');
            }, 2000);
        } catch (error) {
            setStatus('error');
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
                position: 'relative',
            }}
        >
            {status === 'success' && (
                <Alert
                    message={message}
                    type="success"
                    showIcon
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                        width: message === 'Login Successful' ? '250px' : '210px',
                        textAlign: 'center',
                        color: 'black',
                    }}
                />
            )}
            {status === 'error' && (
                <Alert
                    message={message}
                    type="error"
                    showIcon
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                        width: '200px',
                        textAlign: 'center',
                    }}
                />
            )}

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
                                style={{ color: 'black' }}
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
                            <a href="#register-here" onClick={() => setIsRegistering(true)} style={{ color: '#F24405', fontWeight: 'bolder' }}>
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
                            <a href="#login" onClick={() => setIsRegistering(false)} style={{ color: '#9EF8EE', fontWeight: 'bolder' }}>
                                Login Here
                            </a>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
