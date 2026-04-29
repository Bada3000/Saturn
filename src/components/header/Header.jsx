import LOGO from '/saturn-logo.png'
import './Header.css'
const Header = () => {
    return <div className="header">
                <div className="container header_container">
                    <img className='saturn-logo' src={LOGO} alt="Логотип" />
                    <h2 className="header-logo">Saturn</h2>
                </div>
            </div>
}
 
export default Header;