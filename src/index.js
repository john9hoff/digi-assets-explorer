import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Blocks from './pages/blocks/Blocks'

ReactDOM.render(<App />, document.getElementById('root'))

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/blocks" component={Blocks} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
