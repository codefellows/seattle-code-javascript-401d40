import { useState, useEffect } from 'react';
import axios from 'axios';

function useAjax() {

  // options is set by using request()
  let [options, request] = useState({});
  let [response, setResponse] = useState({});

  useEffect(() => {
    async function ajax() {
      const res = options.url && await axios(options);
      if (res) {
        setResponse(res.data);
      }
    }
    ajax();
  }, [options]);

  return [request, response];
}

export default useAjax;
