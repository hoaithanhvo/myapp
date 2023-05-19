import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Form.module.scss"
import Vector from "../../img/Vector.png"
// import PropTyes from ''
import { ThemeContext } from '../ThereProvider'
// const ThemeContext=createContext()
const Form = () => {
    const newArray = []
    const theme = useContext(ThemeContext)
    newArray.push(theme.firstname)
    // console.log(newArray);
    console.log(theme.firstname);
    const loginData = [
        { username: '123', password: '123' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: theme.email, password: theme.password }
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [localStorageChange, setLocalStorageChange] = useState(false);

    const [showPassword, setShowPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const handleLocalStorageChange = () => {
            setLocalStorageChange(!localStorageChange);
        };

        window.addEventListener('storage', handleLocalStorageChange);

        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, [localStorageChange]);

    localStorage.setItem('mydata', JSON.stringify(loginData));

    const handle = (e) => {
        e.preventDefault();

        const loginDataJSON = localStorage.getItem('mydata');

        if (loginDataJSON) {
            const loginData = JSON.parse(loginDataJSON);
            const found = loginData.find((item) => item.username === username && item.password === password);

            if (found) {
                navigate('/Home');
            } else {
                alert('Sai mật khẩu hoặc tên đăng nhập');
            }
        } else {
            alert('Không tìm thấy dữ liệu đăng nhập');
        }
    };

    return (
        <div className={styles.container}>
            {/* <h1>{theme.firstname}</h1> */}
            <h2 className={styles.login}> Login</h2>
            <p className={styles.account}>
                Don't have an account? <Link style={{ color: '#FE904B' }} to="Create">Create Now</Link>
            </p>
            <form onSubmit={handle}>
                <p className={styles.email}>Email</p>
                <input
                    placeholder="Nhập tài khoản"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p className={styles.email}>Password</p>
                <div className={styles.input}>
                    <input
                        placeholder="Nhập mật khẩu"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img src={Vector} alt='' onClick={() => setShowPassword(!showPassword)} />
                </div>
                <br />
                <button type="submit">Login</button>
                <p className={styles.email}>Forgot a password?</p>
                <p className={styles.or}>Or</p>
            </form>
        </div>
    );
};

export default Form;
