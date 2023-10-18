import { useEffect } from "react";

function useOutsideClick(ref, cb, id) {
  const clickHandler = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.id !== id
    ) {
      cb();
    }
  };
  return useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
  }, [ref]);
}

export default useOutsideClick;
