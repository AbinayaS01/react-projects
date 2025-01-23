import { useState } from "react";
import { getPropertyById, updateProperty } from "./property-data";
import { useNavigate, useParams } from "react-router-dom";

export function PropertyEdit() {
  let navigate = useNavigate();
  let { pid } = useParams();
  let propertyId = pid;
  let [editProperty, setEditProperty] = useState(getPropertyById(propertyId));

  let [validationErrors, setValidationErrors] = useState({});
  function handleEditFormSubmit(event) {
    event.preventDefault();
    console.log(editProperty);
    updateProperty(editProperty);
    navigate("/property-home/property-list");
  }

  function handleChangeInput(event) {
    setEditProperty({
      ...editProperty,
      [event.target.name]: event.target.value,
    });
    if (event.target.name != "PropertyImageUrl") {
      if (event.target.value == "") {
        setValidationErrors({
          ...validationErrors,
          [event.target.name]: `${event.target.name} is required`,
        });
      } else {
        let newErrors = { ...validationErrors };
        delete newErrors[event.target.name];
        setValidationErrors(newErrors);
      }
    }
  }

  return (
    <>
      <div className="row my-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="container my-5">
            <form onSubmit={(event) => handleEditFormSubmit(event)}>
              <div className="card">
                <div className="card-header bg-success text-light">
                  <h4>EDIT PROPERTY</h4>
                </div>
                <div className="card-body">
                  <div className="form-control-group mb-2">
                    <label htmlFor="pName" className="form-label">
                      PROPERTY NAME:
                    </label>
                    <input
                      type="text"
                      id="pName"
                      className="form-control"
                      placeholder="Enter Property Name"
                      name="propertyName"
                      value={editProperty.propertyName}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.propertyName}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="pOwner" className="form-label">
                      Property Owner:
                    </label>
                    <input
                      type="text"
                      id="pOwner"
                      className="form-control"
                      placeholder="Enter Owner Name"
                      name="propertyOwner"
                      value={editProperty.propertyOwner}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.propertyOwner}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="pCost" className="form-label">
                      Property Cost
                    </label>
                    <input
                      type="text"
                      id="pCost"
                      className="form-control"
                      placeholder="Enter Property Price"
                      name="propertyCost"
                      value={editProperty.propertyCost}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.propertyCost}
                    </div>
                  </div>

                  <div className="form-control-group mb-2">
                    <label htmlFor="pImage" className="form-label">
                      Property Image Url:
                    </label>
                    <input
                      type="text"
                      id="pImage"
                      className="form-control"
                      placeholder="Enter Property Image Url"
                      name="propertyImageUrl"
                      value={editProperty.propertyImageUrl}
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                    <div className="text-danger text-small">
                      {validationErrors.propertyImageUrl}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-success text-light">
                  {Object.keys(validationErrors).length == 0 ? (
                    <button
                      type="submit"
                      className="btn btn-light text-success"
                    >
                      UPDATE
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-light text-success"
                      disabled
                    >
                      UPDATE
                    </button>
                  )}

                  <button
                    type="reset"
                    className="btn btn-light text-success mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}
