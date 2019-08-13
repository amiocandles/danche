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
                render(sex){
                    return sex ==1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
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