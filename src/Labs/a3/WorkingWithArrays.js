import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from './AddingAndRemovingDataToFromArrays';
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

const WorkingWithArrays=() =>{
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;

    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];

    // Logging values to the console
    console.log("Working With Arrays:");
    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1);
    console.log("stringArray1:", stringArray1);
    console.log("variableArray1:", variableArray1);

    return (
        <div>
            <h3>Working With Arrays</h3>
            <p>functionScoped: {functionScoped}</p>
            <p>blockScoped: {blockScoped}</p>
            <p>constant1: {constant1}</p>
            <p>numberArray1: {numberArray1.join(", ")}</p>
            <p>stringArray1: {stringArray1.join(", ")}</p>
            <p>variableArray1: {JSON.stringify(variableArray1)}</p>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays;