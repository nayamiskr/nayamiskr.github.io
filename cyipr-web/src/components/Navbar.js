import './Navbar.css';
import { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className= 'nav'>
                
                <img src="/image/logo.png" alt="Logo" className="logo" />
                <ul className='navLinks'>
                    <li><a href="/" className= 'link'>首頁</a></li>
                    <li><a href="/about" className= 'link'>關於我們</a></li>
                    <li><a href="/contact" className= 'link'>商標申請</a></li>
                    <li><a href="/PO" className= 'link'>各國專利局</a></li>
                    <li><a href="/example" className= 'link'>客戶案例</a></li>
                    <li><a href="/contact" className= 'link'>留言中心</a></li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
