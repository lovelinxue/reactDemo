import React from 'react';
import './demo1.scss'
import {Button,Input,Select} from 'antd'
import 'antd/dist/antd.css'

const {Search} = Input;
const { Option } = Select;

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      list:[],
      inputValue:''
    }
  }

  inputChange = (e) => {
    this.setState({inputValue:e.target.value})
  }

  addDataWithList = () => {
    let list = this.state.list
    list.push(this.state.inputValue)
    this.setState({list,inputValue:''})
  }

  searchAction = (value) => {
    let list = this.state.list
    list.push(value)
    this.setState({list})
  }

  render(){
	let { list, inputValue } = this.state
	
    return(
      <div >
        <p>欢迎来到腾讯课堂</p>
        <h1>hello world</h1>
        <Input 
          type="text" 
          style={{width:400}}
          value={inputValue} 
          onChange={ this.inputChange } />
        <Button onClick={this.addDataWithList}>添加</Button>
        <ul>
          {list.map((item,index) => <li key={index}>{item}</li> )}
        </ul>
        <div>
          <Search 
            placeholder='请输入添加内容'
            enterButton='添加内容'
            style={{width:400}}
            onSearch={this.searchAction}
          />
          <br/>
		  <Select style={{width:300,margin:50}}>
				{list.map((item,index)=><Option key={index}>{item}</Option> )}
          </Select>
        </div>
       
      </div>
    )
  }

}



