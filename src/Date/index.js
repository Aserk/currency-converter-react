import { StyledDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const CurrentDate = () => {

    const formattedDate = useCurrentDate();

    return (
        <StyledDate>
            {`Dzisiaj jest ${formattedDate}`}
        </StyledDate>
    )
};

export default CurrentDate;