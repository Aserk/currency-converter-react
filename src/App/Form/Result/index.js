import { Error } from "../Error";
import { Footer } from "./Footer";

export const Result = ({ resultDate }) => {
    if (resultDate !== "") return (
        resultDate.status === "loading" ?
            <p>Poczekaj chwilę...</p>
            : resultDate.status === "error" ? <Error />
                : <>
                    <p>
                        Za {resultDate.sourceAmount} {resultDate.currencyBase}&nbsp;
                        otrzymasz: {resultDate.result} {resultDate.currencyTarget}
                    </p>
                    <Footer date={resultDate.date} />
                </>
    );
};