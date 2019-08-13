//主页面结构，通过props.children加载主页面中所有的菜单
import React from 'react'
import { Row,Col } from 'antd';
import Header from "./components/Header"
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/commonless.css'
import Home from './pages/home'
export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        {/*<Home/>*/}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}