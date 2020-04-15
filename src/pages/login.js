import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, Input, Button, Checkbox,message } from 'antd';
import axios from 'axios'

export default function Login(){

  let [username,setUsername] = useState('')
  let [password,setPassword] = useState('')
	let router = useHistory()

  return<div>
    
    <Form className='login-form'>
        <Form.Item>
          <h2>登录界面</h2>
        </Form.Item>
        <Form.Item>
          <Input placeholder='请输入您的账号' maxLength={10} onChange={(e)=>{setUsername(e.target.value)}}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='请输入您的密码' maxLength={10} type='password' onChange={(e)=>{setPassword(e.target.value)}} />  
        </Form.Item>
        <label>---:{username}  ---:{password}</label>
        <Form.Item>
          <Button type='primary' onClick={()=>{
            loginNetworking(username,password).then((res)=>{
              let data = res.data
              if (data.code === 1) {
                message.success('登录成功',2)
                router.push('/home')
              }else{
                message.error('登录失败' + data.msg,2)
              }
            })
          }}>登录</Button>
        </Form.Item>
    </Form>
  </div>
}

function loginNetworking(user,pass){
  return axios.get('/login.json',{params:{user,pass}})
}

