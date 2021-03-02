import { Link } from 'react-router-dom'
import { Button } from 'antd';

import './style.scss'

export default function (props) {
    return (
        <div className="login-wrap">
            <Button type="primary" onClick={ ()=> props.history.push("/home")}>登录</Button>
            <Link to="/home">首页</Link>
        </div>
    )
}