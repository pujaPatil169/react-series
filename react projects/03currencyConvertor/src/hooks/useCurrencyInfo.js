import { useEffect,useState } from "react";

  const useCurrencyInfo = (currency)=>{
    const apiKey = 'c8d0a7b59524618c1df5e9d0';
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
    const [data,setData] = useState({});

        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
        .then((res)=>res.json())
        .then((res) => {
            console.log('response is ',res)
            setData(res)
            console.log(data);

          });
        
    return data;

  }

  export default useCurrencyInfo;