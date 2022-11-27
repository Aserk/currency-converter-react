export const Result = ({ result }) => {
    if (result !== "") return (
        <div>
            <p>
                Aktualny kurs {result.currency}: {Number(result.rate).toFixed(2)}
            </p>
            <p>
                Otrzymasz: {Number(result.targetAmount).toFixed(2)}
            </p>
        </div>
    )
};