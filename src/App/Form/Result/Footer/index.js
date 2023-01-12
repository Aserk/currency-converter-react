import { StyledFooter } from "./styled";

export const Footer = ({ date }) => (
    <StyledFooter>
        Kursy walut pobrano z Europejskiego Centralnego Banku w dniu {date}
    </StyledFooter>
);