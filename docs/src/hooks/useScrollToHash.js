// @ts-nocheck
import { useEffect } from 'react';

const useScrollToHash = () =>{
  // Declare a new state variable, which we'll call "count"
  useEffect(()=>{
    var hash = window.location.hash;
    if (hash) {
      var element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
     window.scrollTo(0, 0);
    }
  },[])
}

export default useScrollToHash;