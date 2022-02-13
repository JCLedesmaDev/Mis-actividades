import { createContext } from "react";
import { IActivitiesContext } from "../Interfaces/Context/IActivitiesContext";
//Este Context tendra alojada toda la informacion que compartiremos con nuestros componentes
export const ActivitiesContext = createContext<IActivitiesContext>(
  {} as IActivitiesContext
);
