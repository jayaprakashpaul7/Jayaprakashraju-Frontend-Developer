import './index.css'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'

const Roadmap = () => {
  const data = [
    {label: 'Launch of EthAi: Officially'},
    {label: 'Development of Core AI Agents'},
    {label: 'User Onboarding Campaign'},
    {label: 'Community Engagement Initiatives'},
  ]

  const data2 = [
    {label: 'Launch of EthAi: Officially'},
    {label: 'Development of Core AI Agents'},
    {label: 'User Onboarding Campaign'},
    {label: 'Community Engagement Initiatives'},
  ]

  const data3 = [
    {label: 'Launch of EthAi: Officially'},
    {label: 'Development of Core AI Agents'},
    {label: 'User Onboarding Campaign'},
    {label: 'Community Engagement Initiatives'},
  ]

  return (
    <div className="road-bg">
      <h1>Roadmap</h1>
      <div className="phase-c">
        <div>
          <span>PHASE 1</span>
          <h1 className="r-heading">Kicking Off</h1>
          <ul>
            {data.map(each => (
              <li>
                <IoIosCheckmarkCircleOutline className="icon" />
                <div>
                  <p className="r-label">{each.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img src="https://res.cloudinary.com/student7/image/upload/v1729066628/Container_2_t8netx.png" />
      </div>
      <div className="phase-c">
        <div className="div-2">
          <span>PHASE 2</span>
          <h1 className="r-heading">Kicking Off</h1>
          <ul>
            {data2.map(each => (
              <li>
                <IoIosCheckmarkCircleOutline className="icon" />
                <div>
                  <p className="r-label">{each.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img src="https://res.cloudinary.com/student7/image/upload/v1729066629/Container_fp4zyu.png" />
      </div>
      <div className="phase-c">
        <div>
          <span>PHASE 3</span>
          <h1 className="r-heading">Kicking Off</h1>
          <ul>
            {data3.map(each => (
              <li>
                <IoIosCheckmarkCircleOutline className="icon" />
                <div>
                  <p className="r-label">{each.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src="https://res.cloudinary.com/student7/image/upload/v1729066628/Container_1_xndxeo.png" />
      </div>
    </div>
  )
}
export default Roadmap
