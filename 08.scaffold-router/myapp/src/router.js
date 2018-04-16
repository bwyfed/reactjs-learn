/**
 * Created by Hello on 2018/4/16.
 */
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>Home</div>
        )
    }
}
class Other extends Component {
    render() {
        return (
            <div>Other</div>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/other">其他页</Link></li>
                        <li><Link to="/info">列表页</Link></li>
                    </ul>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/other" component={Other}></Route>
                </div>
            </Router>
        )
    }
}

export default Main