
const React = require('react');
const ReactDOM = require('react-dom')
require('../css/main.css')
require('../node_modules/bootstrap/dist/js/bootstrap.bundle')
const Content = require('./content.jsx')


ReactDOM.render(<Content/>,
    document.getElementById('content')
)
