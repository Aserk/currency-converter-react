import "./style.css";

const Form = () => (
    <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <p>
            <label>
              <span className="form__labelText">
                Kwota PLN:
              </span>
              <input className="form__field js-amount" type="number" min="0" />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">
                Waluta:
              </span>
              <select className="form__field js-currency" name="currency">
                <option value="USD" selected>Dolar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Funt Brytyjski</option>
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