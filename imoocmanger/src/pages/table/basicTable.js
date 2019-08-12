import React from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
import axios from './../../axios/common'
export default class BasicTable extends React.Component{

    state={
        dataSource2:[]
    }

    params = {
        page:1
    }

    //定义数据源
    componentDidMount() {
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'上海自由贸易试验区祖冲之路2277弄1号905',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区海淀苏州街18号院2楼',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市北京经济技术开发区科创十一街18号C座',
                time: '09:00'
            },
        ]
        this.setState({
            dataSource: data
        })
        this.request();
    }

    // 动态获取mock数据
    request = ()=>{
      axios.ajax({
          url:'/table/list',
          data:{
              params: {
                  page: 1
              }
          }
      }).then((res)=>{
          if (res.code==0){
              this.setState({
                  dataSource2:res.result
              })
          }
      })
    }

    render() {
        //表头列
        const columns=[
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        return(
            <div>
                <Card title="基础表格">
                    <Table
                        bordered//边框
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}//不需要分页
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}