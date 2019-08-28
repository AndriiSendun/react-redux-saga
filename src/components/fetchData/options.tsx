import { useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export const useCustomFetch = (initState: [] = []): [User[], Dispatch<SetStateAction<[]>>] => {
    const [data, setData]: [User[],  Dispatch<SetStateAction<[]>>] = useState(initState);

    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');

      setData(result.data);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return [data, setData];
}
