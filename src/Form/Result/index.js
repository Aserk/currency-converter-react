export const Result = ({ result }) => {
    if (result !== "") return (
        <>
            <p>
                Aktualny kurs {result.currency}: {result.rate.toFixed(2)}
            </p>
            <p>
                Za {result.sourceAmount} PLN otrzymasz: {result.targetAmount.toFixed(2)}
            </p>
        </>
    )
};