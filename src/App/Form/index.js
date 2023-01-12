import { StyledForm, Fieldset, Legend, Button, Field, FieldText } from "./styled";
import { useState } from "react";
import { Result } from "./Result";
import { useCurrencyData } from "./useCurrencyData";
import { useCalculateResult } from "./useCalculateResult";
import { Loading } from "./Loading";
import { Error } from "./Error";

const Form = () => {
  const { currencies, status } = useCurrencyData();
  const { calculateResult, resultDate } = useCalculateResult();

  const [amount, setAmount] = useState("");
  const [currencyBase, setCurrencyBase] = useState("PLN");
  const [currencyTarget, setCurrencyTarget] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyBase, currencyTarget, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {status === "loading" ? <Loading />
        : status === "error" ? <Error />
          : <>
            <Fieldset>
              <Legend>Kalkulator walut</Legend>
              <p>
                <label>
                  <FieldText>
                    Mam:
                  </FieldText>
                  <Field as="select"
                    name="currencyBase"
                    value={currencyBase}
                    onChange={({ target }) => setCurrencyBase(target.value)}
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
              <p>
                <label>
                  <FieldText>
                    Kwota {currencyBase}*:
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
                    Chcę otrzymać:
                  </FieldText>
                  <Field as="select"
                    name="currencyTarget"
                    value={currencyTarget}
                    onChange={({ target }) => setCurrencyTarget(target.value)}
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
              <Result resultDate={resultDate} />
            </Fieldset>
          </>
      }
    </StyledForm>
  )
};

export default Form;