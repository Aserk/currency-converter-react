import { StyledDate } from "./styled";
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
        <StyledDate>
            {`Dzisiaj jest ${formattedDate}`}
        </StyledDate>
    )
};

export default CurrentDate;