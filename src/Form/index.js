import "./style.css";
import { currencies } from "../Currencies"

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walut</legend>
      <p>
        <label>
          <span className="form__labelText">
            Kwota PLN:
          </span>
          <input className="form__field" type="number" min="0" />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Waluta:
          </span>
          <select
            className="form__field"
            name="currency"
          >
            {currencies.map(currency => (
              <option
                key={currency.short}
                value={currency.name}
              >
                {currency.name}
              </option>
            ))};
          </select>
        </label>
      </p>
      <p>
        Aktualny kurs <span className="js-selectedCurrency"></span>:
        <span className="js-exchangeRate"></span>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <p className="js-resultField"></p>
    </fieldset>
  </form>
);

export default Form;