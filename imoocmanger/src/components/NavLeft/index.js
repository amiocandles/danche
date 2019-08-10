import React from 'react'
//antDesign组件
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig.js'
import './left.css'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component{
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                    { this.renderMenu(item.children)}
                </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (<div>
            <div className="logo">
                <img  src="/assets/logo.png" alt=""/>
                <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark">
                {this.state.menuTreeNode}
            </Menu>

        </div>);
    }
}