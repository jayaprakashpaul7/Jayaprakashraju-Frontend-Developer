import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {isnavbarClicked: false}

  onClickNavbar = () => {
    this.setState(prev => ({
      isnavbarClicked: !prev.isnavbarClicked,
    }))
  }

  render() {
    const {isnavbarClicked} = this.state
    return (
      <div>
        <nav className="nav-header">
          <img
            src="https://res.cloudinary.com/student7/image/upload/v1728990719/Group_20_klszv3.png"
            alt="website logo"
            className="logo"
          />
          <button className="nav-btn" onClick={this.onClickNavbar}>
            <HiOutlineMenuAlt4 className="nav-icon" />
          </button>
        </nav>
        {isnavbarClicked ? (
          <ul>
            <li>Features</li>
            <li>Why us?</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
          </ul>
        ) : null}
        <div className="desktop-head">
          <ul>
            <li>Features</li>
            <li>Why us?</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
