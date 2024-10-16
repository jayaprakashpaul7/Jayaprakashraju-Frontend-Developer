import './index.css'
import React from 'react'

const Tokenomics = () => {
  const data = [
    {label: 'Name', value: 'EthAi'},
    {label: 'Token Name', value: '$EthAi'},
    {label: 'Token standard', value: 'ERC20'},
    {label: 'Blockchain', value: 'Ethereum'},
    {label: 'Total Supply', value: '100 Million'},
    {label: 'Tax', value: '5%/5%'},
  ]

  const data2 = [
    {label: 'Team', value: '35%'},
    {label: 'Marketing', value: '5%'},
    {label: 'Liquidity Pool', value: '90%'},
  ]

  return (
    <div>
      <div>
        <h1 className="t-h">Tokenomics</h1>
        <div className="tokenomics-bg">
          <img
            src="https://res.cloudinary.com/student7/image/upload/v1729057235/Donut_vjonx4.png"
            alt="donut"
          />
          <div className="tables">
            <table>
              <tbody>
                {data.map(item => (
                  <tr key={item.label} className="info-item">
                    <td className="label">{item.label}</td>
                    <td>:</td>
                    <td className="value"> {item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <tbody>
                {data2.map(item => (
                  <tr key={item.label} className="info-item">
                    <td className="label">{item.label} </td>
                    <td>:</td>
                    <td className="value"> {item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
