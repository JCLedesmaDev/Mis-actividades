import { IActivitiesContext } from "../Interfaces/Context/IActivitiesContext";
import { IActivitiesState } from "../Interfaces/Context/IActivitiesState";

import portfolio3 from "../images/portfolio-3.jpg";
import portfolio4 from "../images/portfolio-4.jpg";
import nature from "../images/nature-3191091_1920.jpg";
import { TypeActivitiesAction } from "../Interfaces/Context/TActivitiesActionReducer";
import { getStorage, updateStorage } from "../Utils/updateStorage";
import { IActivity } from "../Interfaces/IActivity";

export const INITIAL_STATE: IActivitiesState = {
  activities: [
    // {
    //   title: "Tomar mi siesta",
    //   descripcion: "Esto es un ejemplo de como funciona.",
    //   hora: "14:00",
    //   activityType: "descansar",
    //   isCompleted: false,
    //   _id: (Math.random() * 100).toString(),
    //   imageUrl: nature,
    // },
  ],
  activitySelected: undefined,
  stateModalActivity: false,
};

// ACA MODIFICAMOS EL STATE INICIAL
export const ActivityReducer = (
  state: IActivitiesState,
  action: TypeActivitiesAction
): IActivitiesState => {
  switch (action.type) {
    case "getActivities":
      const activities = getStorage("activities");
      if (activities === null) updateStorage([]);

      return {
        ...state,
        activities: getStorage("activities"),
      };

    case "activitySelected":
      return {
        ...state,
        activitySelected: action.payload,
      };

    case "addActivity":
      const activity = {
        ...state,
        activities: [...state.activities, action.payload],
      };
      updateStorage(activity.activities);
      return activity;

    case "completeActivity":
      const activityUpdate = {
        ...state,
        activities: state.activities.map((activity) => {
          if (activity._id === action.payload.idActivity) {
            activity.isCompleted = true;
          }
          return activity;
        }),
        stateModalActivity: false,
        activitySelected: undefined,
      };
      updateStorage(activityUpdate.activities);

      return activityUpdate;

    case "deleteActivity":
      const activityDeleted = {
        ...state,
        activities: state.activities.filter((activity) => {
          if (activity._id !== action.payload.idActivity) {
            return activity;
          }
        }),
      };
      updateStorage(activityDeleted.activities);

      return activityDeleted;

    case "openModalActivity":
      return {
        ...state,
        stateModalActivity: action.payload,
      };

    default:
      return state;
  }
};
