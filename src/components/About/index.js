import './index.css'
import {MdAutoGraph} from 'react-icons/md'

import {IoWalletOutline} from 'react-icons/io5'
import {RiToolsFill} from 'react-icons/ri'
import {LiaHandsSolid} from 'react-icons/lia'

const About = () => (
  <div>
    <div className="about-section">
      <h1>About EthiAi</h1>
      <p className="about-para">
        At Eth Ai, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button className="read-btn">Read More</button>
    </div>
    <div className="about-bg">
      <div className="about-fe">
        <MdAutoGraph className="icon" />
        <h1 className="about-fe-heading">Stay Ahead</h1>

        <p className="about-fe-para">
          No more guesswork—get clear, trustable insights.
        </p>
      </div>
      <div className="about-fe">
        <IoWalletOutline className="icon" />
        <h1 className="about-fe-heading">Know Your Assets</h1>

        <p className="about-fe-para">
          Always stay on top of how your investments are performing.
        </p>
      </div>
      <div className="about-fe">
        <RiToolsFill className="icon" />
        <h1 className="about-fe-heading">Simple, Not Overwhelming</h1>
        <p className="about-fe-para">
          Our tools are designed to make complex market analysis easy to
          understand and act on.
        </p>
      </div>
      <div className="about-fe">
        <LiaHandsSolid className="icon" />
        <h1 className="about-fe-heading">Future-Proof</h1>
        <p className="about-fe-para">
          We’re constantly improving, adding new features to help you make the
          most informed decisions possible.
        </p>
      </div>
    </div>
  </div>
)
export default About
