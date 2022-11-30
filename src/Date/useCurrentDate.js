import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return formattedDate;
};