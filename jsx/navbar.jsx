const React = require('react')
let menus = [
    "Главная","Новости","Услуги","О нас","Ты пидорас","ЛОЛ","Кек","Чебурек"
]

class Navbar extends React.Component{

    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler " data-toggle = "collapse" data-target = "#navBarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className = "collapse navbar-collapse" id = "navBarSupportedContent">
                    <ul className = "navbar-nav mr-auto">
                        {menus.map((e)=> <MenusComponent content = {e} key = {e}/>)}
                    </ul>
                </div>
            </nav>
           </div>
        )
    }
}

function MenusComponent(props){
    return( 
    <li className="nav-item active">
        <a className="nav-link" href="#"> {props.content}</a>
    </li>)
}

module.exports = Navbar

