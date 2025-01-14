import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const Detail = () => {
    const [ data, setData] = useState([]);
  
    const params = useParams();
  
    useEffect(() =>{
       axios(`https://jsonplaceholder.typicode.com/users/${params.id}}`)
       .then(({data}) => setData(data))
    }, [params.id])

   
    return (
        <div>
         
            <h1>{data.name}</h1>
            <h1>{data.username}</h1>
        </div>
    );
}

export default Detail;
