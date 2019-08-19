import {useState, useEffect} from 'react';
import axios from 'axios'

export const useCustomFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios('https://jsonplaceholder.typicode.com/users');
    
          setData(result.data);
        };
    
        fetchData();
    }, []);

    return [data, setData];
}