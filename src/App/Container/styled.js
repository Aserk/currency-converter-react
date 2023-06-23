import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 800px;
    min-height: 608px;
    padding: 20px;
    margin: auto 20px;
    color: ${({ theme }) => theme.color.white};
    display: grid;
`;