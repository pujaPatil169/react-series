export default function InputBox({
  label = "",
  className = "",
  amount,
  From,
  options,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor="">
          label
        </label>
        <input
          type="number"
          placeholder="amount"
          className="outline-none w-full bg-transparent py-1.5"
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
          value={From}
          onChange={(e)=>onCurrencyChange(e.target.value)}
        >
            {
                options && options.map((opt)=>(
                    <option value={opt}>{opt}</option>

                ))
            }
        </select>
      </div>
    </div>
  );
}
