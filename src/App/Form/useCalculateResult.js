import { useState } from "react";

export const useCalculateResult = () => {
    const [result, setResult] = useState("");

    const calculateResult = (currencyBase, currencyTarget, sourceAmount, status, dateUpdate) => {
        const requestURL = "https://api.exchangerate.host/convert?from=" + currencyBase
            + "&to=" + currencyTarget + "&amount=" + sourceAmount + "&places=2";

        (async () => {
            try {
                const response = await fetch(requestURL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { result, date } = await response.json();
                setResult({
                    currencyBase,
                    currencyTarget,
                    sourceAmount,
                    result,
                });
                status = "success";
                dateUpdate = date;
            } catch (error) {
                console.error("Something bad happened!", error);
                status = "error";
            }
        })();
    };

    return { calculateResult, result };
};