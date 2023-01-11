import { StyledForm, Fieldset, Legend, Button, Field, FieldText } from "./styled";
// import { currencies } from "../Currencies"
import { useState } from "react";
import { Result } from "./Result";
import { useCurrencyData } from "./useCurrencyData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");

  const { date, currencies, status } = useCurrencyData();

  // const findCurrency = () => currencies.find(({ short }) => short === currency);
  // const calculateResult = () => {
  //   setResult({
  //     currency,
  //     sourceAmount: +amount,
  //     targetAmount: amount / findCurrency().rate,
  //     rate: findCurrency().rate,
  //   });
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // calculateResult();
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