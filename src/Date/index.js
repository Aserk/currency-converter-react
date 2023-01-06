import { Date } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const CurrentDate = () => {

    const date = useCurrentDate();
    
    const formattedDate = date.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <Date>
            {`Dzisiaj jest ${formattedDate}`}
        </Date>
    )
};

export default CurrentDate;