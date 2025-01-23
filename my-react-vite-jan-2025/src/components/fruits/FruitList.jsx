import { useState } from "react";
import { FruitItem } from "./FruitItem";
export function FruitList(){

    let [allFruits,setAllFruits]=useState([
        {
            fruitId:101,
            fruitName:"Apple",
            fruitColor:"red"
        },
        {
            fruitId:102,
            fruitName:"Orange",
            fruitColor:"orange"
        },
        {
            fruitId:103,
            fruitName:"Banana",
            fruitColor:"yellow"
        },
    ]);
    let mappedAllFruits=allFruits.map((eachFruit)=>(
    <FruitItem key={eachFruit.fruitId} item={eachFruit} removeFn={(fruitId)=>deleteFruit(fruitId)}></FruitItem>
    ))

    function deleteFruit(fid)
{
    setAllFruits(allFruits.filter((eachFruit)=>eachFruit.fruitId!=fid));
}    return (
        <>
        <div className="container m-5">
            <h2>LIST OF FRUITS</h2>
            
            {allFruits.length==0?(<div className="alert alert-danger"> No Fruit to Display!</div>):
            <ul className="list-group">
                {mappedAllFruits}
            </ul>
}
        </div>
        </>
    );
}