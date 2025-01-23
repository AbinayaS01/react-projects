import { useState } from "react";
import { getAllProperties, deleteProperty } from "./property-data";
import { useNavigate } from "react-router-dom";


export function PropertyList() {
  let navigate = useNavigate();
  let [allProperties, setAllProperties] = useState(getAllProperties());

  // Correctly update state when removing a property
  function removeProperty(propertyId) {
    deleteProperty(propertyId); // Remove the property from data
    setAllProperties(getAllProperties()); // Update the state with updated data
  }
  function editProperty(propertyId){
    navigate(`/property-home/property-edit/${propertyId}`);
  }

  // Map properties to cards
  let mappedAllproperties = allProperties.map((property) => (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={property.propertyId}>
      <div className="card">
        <div className="card-header">
          <img
            src={property.propertyImageUrl}
            alt={property.propertyName}
            className="card-img-top" width="200" height="200"
            // style={{ height: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <p><b>Property Name: </b>{property.propertyName}</p>
          <p><b>Property Owner: </b>{property.propertyOwner}</p>
          <p><b>Property Cost: </b>{property.propertyCost}</p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary mx-2" onClick={() => editProperty(property.propertyId)}>Edit</button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeProperty(property.propertyId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container m-5">
        <h2>List of Entities</h2>
        <div className="row">{mappedAllproperties}</div>
      </div>
    </>
  );
}
