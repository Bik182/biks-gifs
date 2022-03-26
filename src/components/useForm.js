import { useState, useEffect } from "react";

export  function useForm(initialValues) {
  const [state, setState] = useState(initialValues);

  return [
    state,
    (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
