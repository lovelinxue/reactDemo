import React,{useState,useEffect} from 'react';
import {Table,message} from 'antd'
import { Link } from 'react-router-dom';
import Axios from 'axios';



export default function Home(){

	let [data,setData] = useState([])
	let [index,setIndex] = useState(0)

	let columns = [
	 {
		title: '地区',
		dataIndex: 'name',
		key: 'name',
		align:'center'
	  },
	  {
		title: 'Node',
		dataIndex: 'node',
		key: 'node',
		align:'center'
	  },
	  {
		title: 'JAVA',
		dataIndex: 'java',
		key: 'java',
		align:'center'
	  },
	  {
		title: 'PHP',
		dataIndex: 'php',
		key: 'php',
		align:'center'
	  },

	  {
		title: 'Python',
		dataIndex: 'python',
		key: 'Python',
		align:'center'
	  }]

	useEffect(()=>{
		Axios.get('/data.json').then((res)=>{
			let data = res.data
			if (data.code === 1) {
				message.success('数据请求成功',2)
				setData(data.data)
			} else {
				message.error(data.msg,2)
			}
		})
	},[])

	return<div className='home'>
		<h1>语言大数据报告</h1>
		<div className='table'>
			<div className='nav'>
				<a className={index == 0 ? "select" : ''} onClick={()=>{setIndex(0)}}>语言动态</a>
				<a className={index == 1 ? "select" : ''} onClick={()=>{setIndex(1)}}>语言地图</a>
				<a className={index == 2 ? "select" : ''} onClick={()=>{setIndex(2)}}>语言热搜</a>
				<a className={index == 3 ? "select" : ''} onClick={()=>{setIndex(3)}}>语言播报</a>
			</div>
			<p>数据纯属虚构</p>
			<Table
				align='cneter'
				bordered
				columns={columns}
				dataSource={data}
			/>
			<Link to='/' className='link'>{'< 回首页'}</Link>
		</div>
	</div>
}


