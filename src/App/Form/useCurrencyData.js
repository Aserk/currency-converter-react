import { useEffect, useState } from "react";

export const useCurrencyData = () => {
    const [currencyData, setCurrencyData] = useState(
        {
            currencies: [],
            status: "loading",
        }
    );

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { date, rates } = await response.json();
                setCurrencyData({
                    date,
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
    }, []);

    return currencyData;
}