import Users from '../components/Users';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Users />
            <Footer />
        </div>
    )
}

export default Home
