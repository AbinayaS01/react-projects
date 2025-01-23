export function ActorsItem({item,removeFn}){
    return (
        <>
        <tr>
            <td>{item.actorId}</td>
            <td><img src={item.actorImage} width="100" height="100"></img></td>
            <td>{item.actorName}</td>
            <td>{item.actorMovie}</td>
            <td>
          <button
            className="btn btn-danger"
            onClick={() => removeFn(item.actorId)}
          >
            Delete
          </button>
          </td>
        
            </tr>
    </>
    )
}