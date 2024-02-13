import ButtonComponent from "./components/functionalcomponents/buttons/button-component";
import OrderedListComponment from "./components/functionalcomponents/lists/order-list/orderedlits";
import UnorderedList from "./components/functionalcomponents/lists/unorder-list/unorderedList";
import Table from "./components/functionalcomponents/table/table";
function App() {
  return (
    
    <div>
    <h1>HELLO WORLD</h1>
    <ButtonComponent></ButtonComponent>
    <OrderedListComponment/>
    <UnorderedList/>
    <Table/>
    </div>
  );
}

export default App;
