function ForLoops() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];

    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }

    return (
        <div>
            <h3>For Loops</h3>
            <p>Original String Array: {stringArray1.join(", ")}</p>
            <p>Modified String Array: {stringArray2.join(", ")}</p>
        </div>
    );
}

export default ForLoops;