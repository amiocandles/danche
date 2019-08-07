import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        console.log('did mount');
    }
    componentWillReceiveProps(nextProps) {
            console.log('will props' + nextProps.name)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should upate')
        return true;
    }
    componentWillUnmount() {
        console.log('will upate')
    }
    componentWillUpdate() {
        console.log('did upate')
    }

    render() {
        return <div>
            <p>这里是子组件，测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}