import React from 'react'
//antDesign组件
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig.js'
import './left.less'
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
                {item.title}
            </Menu.Item>
        })
    }
    render() {
        return (<div>
            <div className="logo">
                <img  src="/assets/logo.png" alt=""/>
            </div>
            <Menu theme="dark">
                {this.state.menuTreeNode}
            </Menu>

        </div>);
    }
}