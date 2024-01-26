import React,{useId} from 'react'

export default function InputField({
    label,
    className="",
    amount,
    onAmountchange,
    currencytypes=[],
    onCurrencychange,
    selectedCurrency="usd",
    diableamountfield=false,
    diablecuurencyfield=false,

}) {
    const amountkey =useId();
    console.log(selectedCurrency)
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor={amountkey}>
                    {label}
                </label>
                <input
                    id={amountkey}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    amount={amount}
                    value={amount}
                    onChange={(e)=>(onAmountchange &&
                        onAmountchange(Number(e.target.value))
                    )}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    // disabled={diablecuurencyfield}
                    value={selectedCurrency}
                    onChange={(e)=>(
                        onCurrencychange && onCurrencychange(e.target.value)
                    )}
                    
                >
                    {
                        currencytypes.map((currency)=>{
                            return(
                                <option key={currency} value={currency}>
                            {currency}
                        </option>
                            )
                        })
                    }
                        <option value="">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}
