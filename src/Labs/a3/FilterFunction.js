function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
            <h3>Array Filter Function</h3>
            <p>Numbers greater than 2: {numbersGreaterThan2.join(", ")}</p>
            <p>Even numbers: {evenNumbers.join(", ")}</p>
            <p>Odd numbers: {oddNumbers.join(", ")}</p>
        </div>
    );
}

export default FilterFunction;