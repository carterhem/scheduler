import React, {useState} from "react";

export default function useVisualMOde(initialMode) {
  const [mode,setMode] = useState(initialMode)
return {mode};
};