import { useEffect,useState } from "react";

//   const useCurrencyInfo = (currency)=>{
//     const apiKey = 'c8d0a7b59524618c1df5e9d0';
//     let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
//     const [data,setData] = useState({});
//         fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
//         .then((res)=>res.json())
//         .then((res) => {
//             console.log('response is ',res)
//             setData(res)
//           })
//         .catch((e)=>{console.log('error loading your api data ',e)});
//     return data;

//   }

//   export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// const useCurrencyInfo = (currency) => {
//   const apiKey = 'c8d0a7b59524618c1df5e9d0';
//   const [data, setData] = useState({});


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);
//         const result = await response.json();
//         console.log('result is ',result);
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     // Cleanup function to avoid setting state if the component is unmounted
//     return () => {
//       // This can be used to cancel or ignore any outstanding requests if needed.
//     };
//   }, [currency]); // This runs when the currency changes


//   // return useEffect(()=>{
//   //   console.log(data);
//   //   return data
//   // },[data])
//   return data;
// };
const useCurrencyInfo = (From) => {
  const apiKey = 'c8d0a7b59524618c1df5e9d0';
  const [data,setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${From}`);
        const result = await response.json();
        console.log('result is ', result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [From]);

 return data;
};

export default useCurrencyInfo;
