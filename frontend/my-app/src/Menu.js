import './Menu.css';
import logo from './logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(){
    return (
    <div classname="Header">
     <div className="Menu">
        <span className="Menu-left">
        <img src={logo} className="Menu-logo" alt="logo" />
        </span>
        <span className="Menu-right">
            <ul className="Menu-ul">
                <li className='Menu-li'>Home</li>
                <li className='Menu-li'>About</li>
                <li className='Menu-li'>Services</li>
                <li className='Menu-li'>Blog</li>
                <li className='Menu-li'>Contact</li>
            </ul>
        </span>
    </div>
    </div>  
    );
}
  
export default Menu;