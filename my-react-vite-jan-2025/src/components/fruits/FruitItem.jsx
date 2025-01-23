// export function FruitItem(props){
export function FruitItem({item,removeFn}){
    // let {item,removeFn}=props;
    //console.log(props);
    return(<>
    <li className="list-group-item">
        {/* {props.item.fruitId}:{props.item.fruitName} {props.item.fruitColor} */}
        {item.fruitId}:{item.fruitName} {item.fruitColor}
        <button type="button"
         className="btn btn-danger mx-5"
        //   onClick={()=>props.removeFn(props.item.fruitId)}>
        onClick={()=>removeFn(item.fruitId)}>
            Remove
            </button>
    </li>
    </>
    );
}