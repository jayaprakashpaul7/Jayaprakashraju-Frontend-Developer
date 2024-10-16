import './index.css'
import {FaPlus} from 'react-icons/fa6'

const FrequentlyAskedQuestions = () => {
  const FreqentlyData = [
    {question: 'What is EthAi?'},
    {question: 'How can EthAi can help me as a Trader?'},
    {question: 'who can use EthAi'},
    {question: 'How does EthAi track smart money flow?'},
    {question: 'How does ensure data security?'},
  ]

  return (
    <div className="fre-bg">
      <h1 className="fre-heading">Frequently Asked Questions</h1>
      <ul>
        {FreqentlyData.map(each => (
          <li>
            <FaPlus />
            <p>{each.question}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FrequentlyAskedQuestions
