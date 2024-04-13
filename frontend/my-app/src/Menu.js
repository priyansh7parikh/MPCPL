import './Menu.css';
import logo from './logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(){
    return (
    <div classname="Header">
     <div className="Menu">
        <span class="Menu-left">
        {/* <img src={logo} className="Menu-logo" alt="logo" /> */}
        </span>
        <span class="Menu-right">
            <ul class="Menu-ul">
                <li class='Menu-li'>Home</li>
                <li class='Menu-li'>About</li>
                <li class='Menu-li'>Services</li>
                <li class='Menu-li'>Blog</li>
                <li class='Menu-li'>Contact</li>
            </ul>
        </span>
    </div>
    </div>  
    );
}
  
export default Menu;