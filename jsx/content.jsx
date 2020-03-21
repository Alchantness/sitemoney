const React = require('react')
require('../css/main.css')
require('../node_modules/bootstrap/dist/js/bootstrap.bundle')


class Content extends React.Component{
    constructor(props){
        super(props)
 
    }
    render(){
    return <button type="button" className="btn btn-primary">Primary</button>
    }
}

module.exports = Content