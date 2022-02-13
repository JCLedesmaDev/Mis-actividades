import { useContext } from "react";
import { ActivitiesContext } from "../Context/ActivitiesContext";

export const useActivities = () => {
  /* Utilizamos este useHooks para evitar llamar muchas veces el Context
    Entonces, de esta manera, llamamos solo una vez el context y retomamos
    los valores que nos provee
*/

  const activitiesContext = useContext(ActivitiesContext);

  return { ...activitiesContext };
};
