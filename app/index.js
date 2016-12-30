/**
 * Created by MagicLizi on 2016/12/30.
 */
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route,browserHistory } from 'react-router';

class App extends React.Component{
    render(){
        return(
            <h1>React模版项目</h1>
        )
    }
}

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
,document.getElementById('app'));