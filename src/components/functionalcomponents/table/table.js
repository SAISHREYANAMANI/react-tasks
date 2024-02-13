import Tableimage from "./tableimage"
import Tabledata from "./tabledata"
import Tablerow from "./tablerow"
function Table(){
    return(
<table>
<tr>
<th>head1</th>
<th>head2</th>
<th>head3</th>
</tr>
<Tablerow/>
<Tablerow/>
<Tablerow/>
</table>

    )
}
export default Table