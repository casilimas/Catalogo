import { Route } from "react-router-dom";
import GeneralComponent from "../componentes/general";

const GeneralRoutes = () => {
  return (
    <>
      <Route path="/general" element={<GeneralComponent />} />
    </>
  );
};

export default GeneralRoutes;
