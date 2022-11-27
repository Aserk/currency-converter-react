import { useEffect, useState } from "react";
import "./style.css"

const CurrentDate = () => {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <span className="date">
            {`Dzisiaj jest ${formattedDate} ${date.toLocaleTimeString()}`}
        </span>
    )
};

export default CurrentDate;