import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from "./FormCreate.module.scss"
import { ThemeContext } from '../ThereProvider'


const FormCreate = () => {
    const thanh = useContext(ThemeContext)
    console.log(thanh.age);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [userData, setUserData] = useState({});
    const [localStorageChange, setLocaclStorageChange] = useState(false);

    useEffect(() => {
        const existingData = localStorage.getItem("mydata");

        if (existingData && typeof existingData === "string") {
            const parsedData = JSON.parse(existingData);
            setUserData(parsedData);
        }
    }, [localStorageChange]);

    const handle = (e) => {
        e.preventDefault();
        thanh.setFirstName(firstname);
        thanh.setPassword(password);
        thanh.setEmail(email)
        if (!firstname || !lastname || !email || !password || !confirmpassword) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        const existingData = localStorage.getItem("mydata");
        let existingUserData = {};

        if (existingData) {
            existingUserData = JSON.parse(existingData);
            console.log(existingUserData);
        }

        const newKey = Object.keys(existingUserData).length + 1;
        const newUserData = {
            ...existingUserData,
            [newKey]: {
                username: firstname,
                password: password
            },
        };

        localStorage.setItem("mydata", JSON.stringify(newUserData));
        setUserData(newUserData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Cập nhật flag để thông báo thay đổi trong local storage
        setLocaclStorageChange(!localStorageChange);
        alert("Chúc mừng bạn đã tạo tài khoản thành công")
    };
    console.log(userData);
    return (


        <div className={styles.container}>
            <h2>Create your Account</h2>
            <p>
                Already have an account? <Link style={{ color: "#FE904B" }} to="/">Login</Link>
            </p>
            <form onSubmit={handle}>
                <p>First name</p>
                <input name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                <p>Last name</p>
                <input value={lastname} onChange={(e) => setLastName(e.target.value)} />
                <p>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                <p>Confirm Password</p>
                <input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
                <br />
                <button type="submit">Register</button>
                <p className={styles.or}>Or</p>
            </form>
        </div>
    );
};

export { FormCreate }
