import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    text-align: center;
    padding: 20px;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid ${({ theme }) => theme.color.jewel};
    padding: 20px;
    border-radius: 8px;
`;

export const Legend = styled.legend`
    width: 100%;
    max-width: 360px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.jewel};
`;

export const Button = styled.button`
    width: 100%;
    max-width: 360px;
    border-radius: 8px;
    border: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.jewel};
    color: white;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(115%);
    }
`;

export const Field = styled.input`
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    padding: 8px;
`;

export const FieldText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
`;