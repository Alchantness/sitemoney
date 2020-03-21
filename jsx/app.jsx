
const React = require('react');
const ReactDOM = require('react-dom')
require('../css/main.css')
require('../node_modules/bootstrap/dist/js/bootstrap.bundle')
const Content = require('./content.jsx')
const Navbar = require('./navbar.jsx')


ReactDOM.render(<Navbar/>,
    document.getElementById('content')
)
