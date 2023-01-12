import { useState } from "react";

export const useCalculateResult = () => {
    const [resultDate, setResultDate] = useState("");

    const calculateResult = (currencyBase, currencyTarget, sourceAmount) => {
        const requestURL = "https://api.exchangerate.host/convert?from=" + currencyBase
            + "&to=" + currencyTarget + "&amount=" + sourceAmount + "&places=2";

            (async () => {
                try {
                    const response = await fetch(requestURL);
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    const { result, date } = await response.json();
                    setResultDate({
                        currencyBase,
                        currencyTarget,
                        sourceAmount,
                        result,
                        date,
                        status: "success",
                    });
                } catch (error) {
                    console.error("Something bad happened!", error);
                    setResultDate({
                        status: "error",
                    })
                }
            })();
    };

    return { calculateResult, resultDate };
};