function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <div>
            <h3>Map Function</h3>
            <p>Original Array: {numberArray1.join(", ")}</p>
            <p>Squares: {squares.join(", ")}</p>
            <p>Cubes: {cubes.join(", ")}</p>
        </div>
    );
}

export default MapFunction; 
