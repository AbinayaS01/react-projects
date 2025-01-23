export function Cities(){
    let cities=["Coimbatore","Cochin","Thrivandrum","Chennai"];
    return(
        <>
            <ul>
                {cities.map((city)=>(
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </>
    );
}