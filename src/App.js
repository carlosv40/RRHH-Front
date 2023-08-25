import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleados from "./empleados/AgregarEmpleados";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route exact path='/' element={<ListadoEmpleados/>}/>
          <Route exact path='/agregar' element={<AgregarEmpleados/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
