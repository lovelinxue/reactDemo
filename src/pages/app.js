import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './app.scss'
import { Button } from 'antd';

export default function App(){

  const [count,setCount] = useState(10)

  useEffect(()=>{
    console.log('该方法类似于生命周期的方法.');
    console.log('该方法类似于生命周期的方法.在改方法里可以执行网络请求,后边添加[],只会执行一次');
  },[])

  return <div className='container'>
    <h1>这是 APP 首页</h1>
    <Link to='/login'>点击跳转到登录界面</Link>
    <br/>
    <Link to='/home'>点击跳转到首页界面</Link>
    <br/>
    {/* 如果是class组件  JS 跳转的方法要写成 
        this.props.history.push('./login')   
    */}

    <p>
      当前Count次数: {count}
    </p>
    <Button onClick={()=>{setCount(count + 1)}}>更新次数</Button>
  </div>

}