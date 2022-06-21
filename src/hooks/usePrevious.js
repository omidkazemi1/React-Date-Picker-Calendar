import { useState } from "react";

const usePrevious = state => {
    const [tuple, setTuple] = useState([null, state]);

    if (tuple[1] !== state) {
        setTuple([tuple[1], state]);
    }

    return tuple[0];
};

export default usePrevious;
