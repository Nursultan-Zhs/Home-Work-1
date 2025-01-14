import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Page2 = () => {
  const [nuru, setNuru] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setNuru(response.data); 
      })
  }, []);

  return (
    <div>
      <h1>Page2</h1>
      <button onClick={() => 
        navigate(-1)}>go back</button>
      {nuru.map((item) => (
        <h1 key={item.id}>{item.title}</h1> 
      ))}
    </div>
  );
};

export default Page2;