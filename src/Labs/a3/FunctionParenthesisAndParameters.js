const FunctionParenthesisAndParameters = () => {
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <div>
            <h3>Function Parenthesis and Parameters in ES6</h3>
            <p>Result of square(2) = {twoSquared}</p>
            <p>Result of plusOne(3) = {threePlusOne}</p>
        </div>
    );
}

export default FunctionParenthesisAndParameters;