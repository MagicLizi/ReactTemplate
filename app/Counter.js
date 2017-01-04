import React from 'react';
import ReactDom from 'react-dom';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this['state'] = {}
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {

    }


    render() {
        const {value, onIncreaseClick} = this['props'];
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}