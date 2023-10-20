function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <div>
            <h3>Array Index and Length</h3>
            <p>Number Array: {numberArray1.join(", ")}</p>
            <p>Length of numberArray1: {length1}</p>
            <p>Index of '3' in numberArray1: {index1}</p>
        </div>
    );
}

export default ArrayIndexAndLength;
