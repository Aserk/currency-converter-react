import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 800px;
    padding: 20px;
    margin: auto 20px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.outerSpace};
    display: grid;
`;