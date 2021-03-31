import { useEffect, useState } from 'react';
import axios from 'axios';

const useAjax = () => {

  const [options, request] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function ajax() {
      if (!options.url) return;
      let res = await axios(options);
      setResponse(res.data);
    }
    ajax();
  }, [options])

  // request  is our setter for updation request details
  // response is our getterfor the axios results 
  return [request, response];
}

export default useAjax;
