// useLastValue hook by Yahya Emre BAKKAL (github.com/emrebakkal)

import { useState, useEffect } from 'react';

function useLastValue(val) {
    const [lastVal, setLastVal] = useState(val);

    useEffect(() => {
        const storedVal = localStorage.getItem('lastVal');
        if (storedVal !== null) {
            if (typeof val === 'string') {
                if (storedVal !== val) {
                    setLastVal(storedVal);
                }
            }
            else if (typeof val === 'number') {
                const parsedVal = parseInt(storedVal, 10);
                if (!isNaN(parsedVal) && parsedVal !== val) {
                    setLastVal(parsedVal);
                }
            }
        }
        localStorage.setItem('lastVal', val.toString());
    }, [val]);
    return lastVal;
}

export { useLastValue };
