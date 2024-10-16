import {BiLogoTelegram} from 'react-icons/bi'
import {BsTwitterX} from 'react-icons/bs'
import {FaFacebook, FaDiscord, FaInstagram} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-bg">
    <div>
      <img
        src="https://res.cloudinary.com/student7/image/upload/v1729069771/Frame_43095_vpkbs9.png"
        alt="website logo"
        className="footer-logo"
      />
    </div>

    <div className="icon-c">
      <BiLogoTelegram className="foot-icon" />
      <BsTwitterX className="foot-icon" />
      <FaInstagram className="foot-icon" />
      <FaFacebook className="foot-icon" />
      <FaDiscord className="foot-icon" />
    </div>
  </div>
)

export default Footer
