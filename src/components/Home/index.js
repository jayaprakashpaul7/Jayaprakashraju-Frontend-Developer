import './index.css'
import Header from '../Header'
import Features from '../Features'
import About from '../About'
import Tokenomics from '../Tokenomics'
import Roadmap from '../Roadmap'
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions'
import ExploreSection from '../ExploreSection'
import Footer from '../Footer'

const Home = () => (
  <div className="bg">
    <Header />
    <div>
      <div className="content">
        <h1 className="page-quote">
          When Innovation Meets <span className="innovation">Innovation</span>
        </h1>
        <p className="para">
          Empowering Trading Through <br /> Advanced Technology
        </p>
        <button className="dapp-btn">Open dApp</button>
      </div>

      <div className="content-desktop">
        <h1 className="page-quote">
          When Innovation Meets <span className="innovation">Investment</span>
        </h1>
        <p className="para">
          Empowering Trading Through <br /> Advanced Technology
        </p>
        <button className="dapp-btn">Open dApp</button>
      </div>
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FrequentlyAskedQuestions />
      <ExploreSection />
      <Footer />
    </div>
  </div>
)

export default Home
