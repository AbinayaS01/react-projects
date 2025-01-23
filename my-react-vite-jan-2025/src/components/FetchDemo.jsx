import { useEffect, useState } from "react";

export function FetchDemo(){
    let [userData,setUserdata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data);
            setUserdata(data);
    });
    },[]);
    let mappedAllData=userData.map((eachUser)=>{
        return (
            <tr key={eachUser.id}>
                <td>{eachUser.id}</td>
                <td>{eachUser.name}</td>
                <td>{eachUser.username}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.address.city}</td>
            </tr>
            
        )
    })
    return (
        <>
        <div className="container m-3">
            <h3>
            LIST OF USERS
            </h3>
            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
                </thead>
                <tbody>
                {mappedAllData}
                </tbody>
            
            </table>
        </div>
        </>
    );
}