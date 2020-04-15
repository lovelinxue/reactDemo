import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import './app.scss'

//路由的Hooks使用
//使用函数组件怎么获取到路由的变量传的值,使用 useParams 来获取
//使用函数组件怎么路由跳转使用 useHistory

//函数组件的生命周期方法,和更新赋值数据的方法
//使用useEffect类似于生命周期的方法,可以进行网络请求,和数据的初始化
//使用useState可以对函数组件的值和参数进行复制和处理操作

export default function Detail(){

    const params = useParams()//使用Hooks 的路由传值方法
    const navHistory = useHistory()//使用Hooks 的路由跳转方法

    let [showData,setShowData] = useState('这是初始化的参数')

    useEffect(()=>{
        console.log('这里可以调用网络请求,如果最后加上[],那么就初始化界面执行一次,如果不加,每次更新就会调用该方法');
    },[])

  return <div className='container'>
    <h1>这是 detail 界面</h1>
    <br/>
    <h3>关于useState 和 useEffect 方法的使用</h3>
    <p>这里初始化的界面参数:{showData}</p>
    <button onClick={()=>{setShowData('点击按钮更新的数据')}}>更改初始值</button>
    <h3>关于useParams 和 useHistory 方法的使用</h3>
    <p>useParams: 当前的路由参数值为:{JSON.stringify(params.goodsID)}</p>
    <br/>
    <button onClick={()=>{
        navHistory.push('/')
    }}>useHistory: 跳转到首页</button>
    
  </div>

}

//如果写成有状态的组件怎么获取路由的外部属性,使用 this.props.match.params.goodsID
//如果使用有状态的组件Class来路由跳转的方法,使用 this.props.history.push('/')

// export default class Detail extends React.Component{

//     render(){
//         return(
//             <div>
//                 这是detail界面
//                 <p>我拿到的ID是: {this.props.match.params.goodsID}</p>
//             </div>
//         )
//     }

// }