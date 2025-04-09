import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "./utils/store";
import { addCount, clearCart } from "./utils/countSlice";
import { useDispatch } from "react-redux";

function App() {
  const [countValue, setCountValue] = useState(0);

  const countHistorry = useSelector((store) => store.counter.history);
  const dispatch = useDispatch();

  function handleincreasecountValue() {
    setCountValue(countValue + 1);
    dispatch(addCount(countHistorry[countHistorry.length - 1] + 1));
  }
  function handledecreasecountValue() {
    if (countValue > 0) {
      setCountValue(countValue - 1);
      dispatch(addCount(countHistorry[countHistorry.length - 1] - 1));
    }
  }
  function handleresetValue() {
    if (countValue > 0) {
      setCountValue(0);
      dispatch(addCount(0));
    }
  }
  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-8 mb-16">Counter</h1>
      <p className="w-12 h-8 bg-red-100 font-semibold flex items-center justify-center rounded-md">
        {countHistorry[countHistorry.length - 1]}
      </p>
      <div className="buttons flex gap-4 mt-5">
        <button
          className="rounded-full text-white bg-green-500 font-bold w-14 py-1"
          onClick={() => {
            handleincreasecountValue();
          }}
        >
          +
        </button>
        <button
          className="rounded-full text-white bg-red-500 font-bold w-14 py-1"
          onClick={() => {
            handledecreasecountValue();
          }}
        >
          -
        </button>
        <button
          className="rounded-full text-white bg-yellow-500 w-14 py-1"
          onClick={() => {
            handleresetValue();
          }}
        >
          Reset
        </button>
      </div>
      <div className="history mt-24">
        <p>History:</p>
        <div className="txtarea bg-red-50 w-52 h-24 mt-2 p-2">
          {countHistorry}
        </div>
      </div>
    </div>
  );
}

export default App;
