import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = () => {

  const [options, request] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function ajax() {
      if (!options.url) return;
      const res = await axios(options);
      setResponse(res.data);
    }
    ajax();
  }, [options]);

  return [response, request];
};

export default useAjax;