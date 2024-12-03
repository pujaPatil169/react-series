import {useId} from 'react';
export default function InputBox({
  label ,
  className = "",
  amount,
  selectedOption,
  options,
  onAmountChange,
  onCurrencyChange,
}) {
  const idHtmlFor = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={idHtmlFor}>
         { label}
        </label>
        <input
        id={idHtmlFor}
          type="number"
          placeholder="amount"
          className={`outline-none w-full bg-transparent py-1.5 ${className}`}
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          name=""
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          id=""
          value={selectedOption}
          onChange={(e)=>onCurrencyChange(e.target.value)}
        >
            {
                options && options.map((opt)=>(
                    <option key={opt} value={opt}>{opt}</option>

                ))
            }
        </select>
      </div>
    </div>
  );
}

//-----------------notes--------------------------------------------------

// This <select> element in your React component renders a dropdown list of options, and here’s how it works:

// value={'hww'}:

// The value prop of the <select> is set to 'hww'. This means that the option with the value='hww' will be selected by default. If an option with that value exists in options, it will be shown as the selected option when the dropdown is first rendered.
// If there is no option with value='hww', the dropdown will show no selected option (or behave as if no option is selected).
//---my mistake---- was before i was sending 'usd' and 'inr' in selectedOption but inr and usd is not present in any of the option rathere  USD and INR were present which is in all caps thats why they were not showing beacause inr and usd in small leters were not pressent among the options 