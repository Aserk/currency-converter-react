import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 800px;
    min-height: 427px;
    padding: 20px;
    margin: auto 20px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.outerSpace};
    border-radius: 16px;
    box-shadow: 0 4px 30px ${({ theme }) => theme.color.outerSpace};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: grid;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 520px;
    }
`;