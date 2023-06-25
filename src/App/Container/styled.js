import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 800px;
    min-height: 608px;
    padding: 20px;
    margin: auto 20px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.outerSpace};
    border-radius: 32px;
    box-shadow: 0 0 16px ${({ theme }) => theme.color.outerSpace};
    display: grid;
`;