import React from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom'
import App from './App.js'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from "./pages/nomatch";
import Modals from "./pages/ui/modals";
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import SeniorTable from './pages/table/seniorTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import User from './pages/user/index'
import Common from "./common";
import OrderDetail from './pages/order/detail'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar/index'
// import {Switch} from "antd";
export default class IRouter extends React.Component {
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modals}/>
                            <Route path="/admin/ui/loadings" component={Loadings}/>
                            <Route path="/admin/ui/notification" component={Notice}/>
                            <Route path="/admin/ui/messages" component={Messages}/>
                            <Route path="/admin/ui/tabs" component={Tabs}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/ui/carousel" component={Carousel}/>
                            <Route path="/admin/form/login" component={FormLogin}/>
                            <Route path="/admin/form/reg" component={FormRegister}/>
                            <Route path="/admin/table/basic" component={BasicTable}/>
                            <Route path="/admin/table/high" component={SeniorTable}/>
                            <Route path="/admin/city" component={City}/>
                            <Route path="/admin/order" component={Order}/>
                            <Route path="/admin/user" component={User}/>
                            <Route path="/admin/bikeMap" component={BikeMap}/>
                            <Route path="/admin/charts/bar" component={Bar}/>
                            <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }
                    />
                </App>
            </HashRouter>
        )
    }
}