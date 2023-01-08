import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return date;
};