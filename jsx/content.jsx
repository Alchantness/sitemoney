const React = require('react')
const ReactDOM = require('react-dom')

var style = {
    borderWidth: "1px", 
    borderColor: "red", 
    borderStyle:"solid"
}
class Content extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
    return <div style = {style}>ДОБРЫЙ ВЕЧИР</div>
    }
}

module.exports = Content