export const Result = ({ result }) => {
    if (result !== "") return (
        <>
            <p>
                Za {result.sourceAmount} {result.currencyBase} otrzymasz: {result.result} {result.currencyTarget}
            </p>
        </>
    )
};