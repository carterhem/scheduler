import {useState} from "react";

export default function useVisualMode(initial) {
  const [mode,setMode] = useState(initial)
  const [history, setHistory] = useState([initial])

  const transition = (newMode, replace = false) => {
    //if replace is not true, have a history
    //if replace is true, have no history and be back to original state
   if(!replace) {
    setMode(newMode);
    setHistory([...history,newMode]);
   } else {
    setMode(newMode);
    //using spread so that only values are injected into array
    setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode])
    // previous, creating new array with only one value in it
    
   }
    
  };

  const back = () => {
    if (history.length > 1) {
      const previousHistory = history.slice(0, -1);
      //removing the last item added aka creating the array before the item was added
      setHistory(previousHistory);
      //using setHistory to change state back to previous state
      setMode(previousHistory[previousHistory.length -1]);
      //setting mode to the index of last item of previous history(arrays are zero indexed)


    }

  };

return {mode, transition, back};
};