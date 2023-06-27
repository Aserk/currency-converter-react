import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    text-align: center;
    padding-top: 20px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    min-height: 326px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-height: 380px;
    }
`;

export const Legend = styled.legend`
    font-size: 24px;
`;

export const Button = styled.button`
    width: 100%;
    max-width: 405px;
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
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    text-align: left;
`;