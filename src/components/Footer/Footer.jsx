
import { Link } from 'react-router-dom'
import './FooterStyle.css'
function Footer() {
  
  
    return (
    <div className="footerContainer">
<div className="leftFooter">© Copyright Vesperr. All Rights Reserved
Designed by <span className='bootstrap'>BootstrapMade</span></div>
<div className="rightFooter">
  <Link className='linkFooter' to="/">Home</Link>
  <Link className='linkFooter' to="/">About</Link>
  <Link className='linkFooter' to="/">Privacy</Link>
  <Link className='linkFooter' to="/">Policy</Link>
  <Link className='linkFooter' to="/">Terms of Use</Link>
  
</div>
    </div>
  )
}

export default Footer