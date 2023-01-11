import { useState } from "react";

export const useCalculateResult = () => {
    const [result, setResult] = useState("");

    const calculateResult = (currencyBase, currencyTarget, sourceAmount) => {
        const requestURL = "https://api.exchangerate.host/convert?from=" + currencyBase 
                            + "&to=" + currencyTarget + "&amount=" + sourceAmount +"&places=2";

        (async () => {
            try {
                const response = await fetch(requestURL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { result } = await response.json();
                setResult({
                    currencyBase,
                    currencyTarget,
                    sourceAmount,
                    result,
                });
                // setCurrencyData({
                //     date,
                //     currencies: Object.keys(rates),
                //     status: "success"
                // });
            } catch (error) {
                console.error("Something bad happened!", error);
                // setCurrencyData({
                //     status: "error",
                // });
            }
        })();
    };

    return { calculateResult, result };
};