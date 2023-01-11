import { StyledForm, Fieldset, Legend, Button, Field, FieldText } from "./styled";
import { useState } from "react";
import { Result } from "./Result";
import { useCurrencyData } from "./useCurrencyData";
import { useCalculateResult } from "./useCalculateResult";

const Form = () => {
  const { date, currencies, status } = useCurrencyData();
  const { calculateResult, result } = useCalculateResult();

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // const calculateResult = () => {
  //   setResult({
  //     currencyTo: currency,
  //     currencyBase: "PLN",
  //     sourceAmount: +amount,
  //     targetAmount: amount,
  //     rate: 1,
  //   });
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult("PLN", currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <p>
          <label>
            <FieldText>
              Kwota PLN*:
            </FieldText>
            <Field
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
            <FieldText>
              Waluta:
            </FieldText>
            <Field as="select"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option
                  key={currency}
                  value={currency}
                >
                  {currency}
                </option>
              ))};
            </Field>
          </label>
        </p>
        <Button>Przelicz</Button>
        <Result result={result} />
      </Fieldset>
    </StyledForm>
  )
};

export default Form;