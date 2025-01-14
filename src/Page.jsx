import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Page = () => {
    
    const [users, setUsers] = useState([])

     const navigate = useNavigate();

    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => setUsers(data))
    }, [])

    return (

        <div>
            <h1><Link>Page</Link></h1>
      
         <button onClick={() =>{
                navigate(-1)
           }}>go back</button> 
            {
                users.map(item =>{
                    return <h1 key={item.id}  to={`/user/${item.id}`}>{item.name}</h1>
                })
            }
        </div>
    );
}

export default Page;

