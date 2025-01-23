function ListCity() {
    let allCities=["Chennai","Mumbai","Pune"];
    let mappedAllCities=allCities.map((eachcity)=><li className="list-group-item">{eachcity}</li>)
    return (
        <>
            <h3>List of Cities</h3>
            <div>
            <ul className="list-group">{mappedAllCities}</ul>
            </div>
            
        
        </>
      );
}

export default ListCity;