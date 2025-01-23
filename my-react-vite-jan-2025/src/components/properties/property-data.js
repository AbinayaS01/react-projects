let allProperties=[
    {
        propertyId:501,
        propertyName:"XXX",
        propertyOwner:"Alice",
        propertyCost:5000000,
        propertyImageUrl:"https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        propertyId:502,
        propertyName:"YYY",
        propertyOwner:"Bob",
        propertyCost:6000000,
        propertyImageUrl:"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww"
    },
    {
        propertyId:503,
        propertyName:"ZZZ",
        propertyOwner:"Kemi",
        propertyCost:6500000,
        propertyImageUrl:"https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww"
    }
];

export function getAllProperties(){
    return allProperties;
}
export function getPropertyById(propertyId){
    return allProperties.find((property)=>property.propertyId==propertyId);
}

export function addProperty(newProperty){
    newProperty.propertyId=allProperties.length==0?501:allProperties[allProperties.length-1].propertyId+1;
    allProperties.push(newProperty);
}
export function updateProperty(updatedProperty){
    let index=allProperties.findIndex((property)=>property.propertyId==updatedProperty.propertyId);
    allProperties[index]=updatedProperty;
}

export function deleteProperty(propertyId){
    allProperties=allProperties.filter((property)=>property.propertyId!=propertyId);
}