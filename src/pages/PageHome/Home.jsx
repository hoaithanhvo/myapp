import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../components/ThereProvider'

function Home() {
    const theme = useContext(ThemeContext)
    console.log(theme.age);
    return (
        <div style={{ textAlign: "center" }}>

            <h1>{`Chào mừng  ${theme.firstname}  đến với trang chủ`}</h1>
        </div>
    )
}

export default Home