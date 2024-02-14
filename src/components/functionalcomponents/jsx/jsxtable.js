import Tabdata from "./jsx";

function Table(){
    return(
        <table>
         <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>rate</th>
            <th>count</th>
          </tr>
            <Tabdata/>
        </table>
    )
}
export default Table