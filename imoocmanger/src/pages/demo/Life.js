import React from 'react'
import Child from './Chile.js'
//按需导入antDesign组件
import { Button,Input } from 'antd'
//导入样式
// import 'antd/dist/antd.css'
import './index.less'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    handeAdd=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return <div className="content">
            <p>生命周期</p>
            <Input placeholder="Basic usage" />
            <Button type="primary" ghost onClick={this.handeAdd}>AntD点击一下</Button>
            <button onClick={this.handeAdd}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name="Bob"></Child>
        </div>
    }
}