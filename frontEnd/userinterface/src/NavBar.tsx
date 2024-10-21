import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation } from "react-router-dom";
import './NavBarStyles.css';
import DynamicForm from './dynamicForm';
import TitleNew from './title';
import { LogoutOutlined } from '@ant-design/icons';
import PrivateRoute from './Private-Route';

const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (pathname === '/' || pathname === '/') {
            localStorage.removeItem('token');
            setToken(null);
        } else {
            setToken(localStorage.getItem('token'));
        }
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/', { replace: true });
    };

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink
                            to="/navbar/home"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="logout">
                        <span onClick={handleLogout} className="logout-button">
                            <LogoutOutlined /> LogOut
                        </span>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <PrivateRoute>
                    <Routes>
                        <Route path="home" element={<DynamicForm />} />
                        <Route path="title" element={<TitleNew />} />
                    </Routes>
                </PrivateRoute>
            </div>
        </div>
    );
};

export default NavBar;
