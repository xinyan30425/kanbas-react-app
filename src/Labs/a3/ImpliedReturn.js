function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <div>
            <h3>Implied Return in ES6 Arrow Functions</h3>
            <p>Result of multiply(4, 5) = {fourTimesFive}</p>
        </div>
    );

}

export default ImpliedReturn;


