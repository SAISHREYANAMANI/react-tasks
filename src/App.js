import Styletext from "./components/functionalcomponents/styles/textstyle";
import TableBootstrap from "./components/functionalcomponents/styles/SASS/bootstraptable";
// import Drop from "./components/functionalcomponents/styles/SASS/dropdowns";
import Spinner from "./components/functionalcomponents/spinners/spinner";
import Navbars from "./components/functionalcomponents/navbars/navbars";
import Carousels from "./components/functionalcomponents/caurosel/caurosel";
import ModalExample from "./components/functionalcomponents/modals/modals";
import AnimatedToast from "./components/functionalcomponents/toasts/toast";
function App() {
  return (
    
    <div>
  {/* <Styletext/> */}
  {/* <TableBootstrap/> */}
  {/* <Drop/> */}
  {/* <Spinner/> */}
  <Navbars/>
  <Carousels/>
  <ModalExample/>
  <AnimatedToast/>
    </div>
  );
}
export default App;
