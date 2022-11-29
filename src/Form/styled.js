import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    text-align: center;
    padding: 20px;
`;

export const StyledFieldset = styled.fieldset`
    border: 2px solid hsl(145, 70%, 33%);;
    padding: 20px;
    border-radius: 8px;
`;

export const StyledLegend = styled.legend`
    width: 100%;
    max-width: 360px;
    padding: 10px;
    border-radius: 8px;
    background-color: hsl(145, 70%, 33%);
`;

export const StyledButton = styled.button`
    width: 100%;
    max-width: 360px;
    border-radius: 8px;
    border: none;
    padding: 10px;
    background-color: hsl(145, 70%, 33%);;
    color: white;

    &:hover {
        background-color: hsl(145, 70%, 28%);
    }

    &:active {
        background-color: hsl(145, 70%, 23%);
    }
`;

export const StyledField = styled.input`
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    padding: 8px;
`;

export const StyledFieldText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
`;