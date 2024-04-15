import './Service.css';
import Hardware from './hardware.jpg'

const Service = ()=>{
    return(
       <div>
        <h2>OUR SERVICES</h2>
        <div className='Service'>
            <div className='ServiceContainer' id='Hardware'>
                <h2>Hardware Service & Sales</h2>
                <p>
                Computer’s Peripherals Desktop / Laptops / Netbooks servers / workstations / Firewall devices Enterprise switches and Routers Configuration and Management
                </p>
            </div>
            <div className='ServiceContainer' id='Software'>
                <h2>Software Service & Sales</h2>
            </div>
            <div className='ServiceContainer' id='Network'>
                <h2>Network Service & Sales</h2>
            </div>
            <div className='ServiceContainer' id='Infra'>
                <h2>I.T. Infrastructure Solutions</h2>
            </div>
            <div className='ServiceContainer' id='Maintenance'>
                <h2>Maintenance Service</h2>
            </div>
        </div>
       </div>
    )
}

export default Service;