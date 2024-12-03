import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [From, setFrom] = useState('USD');
  const [To, setTo] = useState('INR');
  // Fetch data with useCurrencyInfo hook
  const data = useCurrencyInfo(From);
  
  // Ensure options is an array (handles empty data)
  const options = data?.conversion_rates ? Object.keys(data.conversion_rates) : [];

  const BackgroundImage = 'https://images.pexels.com/photos/29366218/pexels-photo-29366218/free-photo-of-sunlit-skyscrapers-in-urban-architecture-scene.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load';

  const swap = () => {
    setFrom(To);
    setTo(From);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (data?.conversion_rates && options.length > 0) {
      const rate = data.conversion_rates[To];
      setConvertedAmount(amount * rate);
    }
  };

//------------IMP FEATURE------------------------------------------------------------------------------

//------------you can uncomment below useEffect if you want you your enter amount to be converted automatically without clicking the convert below 
// useEffect(()=>{
//convert();
// },[amount,From,To,data,options]);

//------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="w-full h-screen flex flex-wrap  justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  className=''
                  amount={amount}
                  options={options}
                  selectedOption={From}
                  onAmountChange={(value) => setAmount(value)}
                  onCurrencyChange={(value) => setFrom(value)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  className=''
                  amount={convertedAmount}
                  options={options}
                  selectedOption={To}
                  onConvertedAmountChange={(value) => setConvertedAmount(value)}
                  onCurrencyChange={(value) => setTo(value)}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                Convert {From} to {To}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
