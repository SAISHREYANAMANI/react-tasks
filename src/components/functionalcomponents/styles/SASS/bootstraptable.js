
import Drop from "./dropdowns"
import Toast from "./toast"
import Image from "../../image/image"
const TableBootstrap=()=>{
    return(

        <div className="container mt-3">
          <div className="spinner-grow text-muted"></div>
          
  <h2>Contextual Classes</h2>
  <p>
    Contextual classes can be used to color the table, table rows or table
    cells. The classes that can be used are: .table-primary, .table-success,
    .table-info, .table-warning, .table-danger, .table-active, .table-secondary,
    .table-light and .table-dark:
  </p>
  <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>Defaultson</td>
        <td>def@somemail.com</td>
      </tr>
      <tr className="table-primary">
        <td>Primary</td>
        <td>Joe</td>
        <td>joe@example.com</td>
      </tr>
      <tr className="table-success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr className="table-danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr className="table-info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr className="table-warning">
        <td><Image/></td>
        <td><Toast/></td>
        {/* <td>bo@example.com</td> */}
        <td><Drop/></td>
      </tr>
      <tr className="table-active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr>
      <tr className="table-secondary">
        <td>Secondary</td>
        <td>Secondson</td>
        <td>sec@example.com</td>
      </tr>
      <tr className="table-light">
        <td>Light</td>
        <td>Angie</td>
        <td>angie@example.com</td>
      </tr>
      <tr className="table-dark">
        <td>Dark</td>
        <td>Bo</td>
        <td>bo@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

    )
}


export default TableBootstrap