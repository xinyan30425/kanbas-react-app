function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');
    
    numberArray1.splice(2, 1);  // remove 1 item starting at index 2
    stringArray1.splice(1, 1);  // remove 1 item starting at index 1

    return (
        <div>
            <h3>Adding and Removing Data to/from Arrays</h3>
            <p>Modified Number Array: {numberArray1.join(", ")}</p>
            <p>Modified String Array: {stringArray1.join(", ")}</p>
        </div>
    );
}

export default AddingAndRemovingDataToFromArrays;