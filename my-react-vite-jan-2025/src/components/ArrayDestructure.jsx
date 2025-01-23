function ArrayDestructure() {
    let allNames=["John","Jane","Jack","Jill"];
    let name1=allNames[0];
    let name2=allNames[1];
    let name3=allNames[2];
    let name4=allNames[3];


    let addAllNames=[...allNames,"Alex","Bob"]
    let [name11,name22,name33,name44]=allNames;
    let[name111,name222,name333,name444,name55,name66]=addAllNames;
    return ( <>
    <h2>Destructure demo</h2>
    <h3>List of Names</h3>
    <p>{name1}</p>
    <p>{name2}</p>
    <p>{name3}</p>
    <p>{name4}</p>
    <h3>List of Names by Destructuring the array</h3>
    <p>{name11}</p>
    <p>{name22}</p>
    <p>{name33}</p>
    <p>{name44}</p>
    <h3>List of Names by spread operator</h3>
    <p>{name111}</p>
    <p>{name222}</p>
    <p>{name333}</p>
    <p>{name444}</p>
    <p>{name55}</p>
    <p>{name66}</p>
    </> );
}

export default ArrayDestructure;