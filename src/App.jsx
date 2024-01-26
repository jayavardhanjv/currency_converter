import { useState } from 'react'
import {InputField} from './components'
import useCustomhooks from './hooks/useCustomhooks'


function App() {
  const[amount,setAmount]=useState(0);
  const[from,setFrom]=useState("usd");
  const[to,setTo]=useState("inr");
  const[convertedAmount,setConvertedAmount]=useState(0);
  console.log(from)
  const currencyInfo=useCustomhooks(from);
  const options=Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  

  return (
    <>
    <div className='flex justify-center w-full'>
    <div
        className=" h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-white w-1/2"
        // style={{
        //   backgroundImage:`url('https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        // }}

    >
        <div className="w-full">
          <div className='flex items-center justify-center p-14 m-6'>
          <h1 className=' text-4xl text-clip text-center font-bold font-serif'>Currency converter</h1>
          
          </div>
          <h2 className=' text-xl text-clip text-center font-medium font-serif'>Convert your Currency</h2>

        </div>
    </div>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert() ;                      
                    }}
                >
                    <div className="w-full mb-1">
                        <InputField
                            label="From"
                            amount={amount}
                            currencytypes={options}
                            onAmountchange={(currency)=>{
                              setAmount(currency)
                            }}
                            selectedCurrency={from}
                            onCurrencychange={(currency)=>{
                              setFrom(currency)
                            }}

                            
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
                        <InputField
                            label="To"
                            amount={convertedAmount}
                            currencytypes={options}
                            onCurrencychange={(currency)=>{
                              setTo(currency)
                            }}
                            selectedCurrency={to}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase() }
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
);
}

export default App
