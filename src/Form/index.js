import { StyledForm, StyledFieldset, StyledLegend, StyledButton, StyledField, StyledFieldText } from "./styled";
import { currencies } from "../Currencies"
import { useState } from "react";
import { Result } from "./Result";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const findCurrency = () => currencies.find(({ short }) => short === currency);
  const calculateResult = () => {
    setResult({
      currency,
      sourceAmount: +amount,
      targetAmount: amount / findCurrency().rate,
      rate: findCurrency().rate,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFieldset>
        <StyledLegend>Kalkulator walut</StyledLegend>
        <p>
          <label>
            <StyledFieldText>
              Kwota PLN*:
            </StyledFieldText>
            <StyledField
              type="number"
              min="0"
              step={0.01}
              required
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            <StyledFieldText>
              Waluta:
            </StyledFieldText>
            <StyledField as="select"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map(currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))};
            </StyledField>
          </label>
        </p>
        <StyledButton>Przelicz</StyledButton>
        <Result result={result} />
      </StyledFieldset>
    </StyledForm>
  )
};

export default Form;