import { Navbar, Feature, Benefits, Demo, Feedback, Footer, Header, Joinus, Whyus} from '../containers';

const Home = () => {
  return (
    <div>
        <div className="Home">
          <Navbar />
          <Header />
          <Feature />
          <Benefits />
          <Demo />
          <Whyus />
          <Feedback />
          <Joinus />
          <Footer />
        </div>
    </div>
  )
}

export default Home