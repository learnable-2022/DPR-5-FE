import { Navbar } from '../components';
import { Aboutus, Footer } from '../containers';

const About = () => {
  return (
    <div>
        <div className="About">
          <Navbar />
          <Aboutus />
          <Footer />
        </div>
    </div>
  )
}

export default About