import { useEffect } from "react";
import { useState } from "react";

export const useCurrencyData = () => {
    const [currencyData, setCurrencyData] = useState(
        {
            currencies: [],
            status: "loading",
        }
    );

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch("https://api.exchangerate.host/latest");
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    const { rates } = await response.json();
                    setCurrencyData({
                        currencies: Object.keys(rates),
                        status: "success"
                    });
                } catch (error) {
                    console.error("Something bad happened!", error);
                    setCurrencyData({
                        status: "error",
                    });
                }
            })();
        }, 2000); 
    }, []);

    return currencyData;
}