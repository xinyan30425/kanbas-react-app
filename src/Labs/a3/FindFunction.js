function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');

    return (
        <div>
            <h3>Array Find Function</h3>
            <p>Number 4 from numberArray1: {four}</p>
            <p>'string3' from stringArray1: {string3}</p>
        </div>
    );
}

export default FindFunction;

