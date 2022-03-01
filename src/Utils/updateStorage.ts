import { IActivity } from "../Interfaces/IActivity";

export const updateStorage = (activities: IActivity[]) => {
  
  //Cambiar nombre por el que sea en la circunstancia.
  localStorage.setItem("activities", JSON.stringify(activities));
};

export const getStorage = (nameStorage: string) => {
  return JSON.parse(localStorage.getItem(nameStorage) as any);
};
