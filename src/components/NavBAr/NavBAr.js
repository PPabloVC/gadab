
import './styles.css';
//import './assets/img/logo1';


const NavBAr =() => {
    return (
        <div className ='navbar-container'>
            <div>
                <img width={'100px'} alt="logo1"/>
            </div>

            <div>
                <ul>
                    <li> 
                        <a href='#'>Home</a>
                    </li>
                    <li> 
                        <a href='#'>Contact</a>
                    </li>
                    <li> 
                         <a href='#'>About</a>
                    </li>
                </ul>
                
            </div>
            <div>
                <button className='loguin'> Loguin </button>
            </div>

        </div>
    );
};
export default NavBAr;