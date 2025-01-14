import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
             
         <h1><Link to="/page">Page </Link></h1>
         <h1><Link to="/page2">Page2 </Link></h1>
    
        </div>
    );
}

export default Home;
