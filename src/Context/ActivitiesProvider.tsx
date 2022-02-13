import { useEffect, useReducer } from "react";
import { IActivity } from "../Interfaces/IActivity";
import { ActivitiesContext } from "./ActivitiesContext";
import { ActivityReducer, INITIAL_STATE } from "./ActivitiesReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ActivitiesProvider: React.FC<Props> = (props) => {
  const [activitieState, dispatch] = useReducer(ActivityReducer, INITIAL_STATE);

  /// AQUI IRA TODA LA CUESTION DE LOGICA Y METODOS

  const getActivies = () => {

    dispatch({
      type: "getActivities",
    });
  };

  const addActivity = (activity: IActivity) => {
    dispatch({
      type: "addActivity",
      payload: activity,
    });
  };

  const completeActivity = (idActivity: string) => {
    dispatch({
      type: "completeActivity",
      payload: { idActivity },
    });
  };

  const modalActivity = (stateModalActivity: boolean) => {
    dispatch({
      type: "openModalActivity",
      payload: !stateModalActivity,
    });
  };

  const deleteActivity = (idActivity: string) => {
    dispatch({
      type: "deleteActivity",
      payload: { idActivity },
    });
  };

  const selectActivity = (activity: IActivity) => {
    dispatch({
      type: "activitySelected",
      payload: activity,
    });
  };

  useEffect(() => {
    getActivies();
  }, []);

  return (
    <ActivitiesContext.Provider
      value={{
        activities: activitieState.activities,
        stateModalActivity: activitieState.stateModalActivity,
        activitySelected: activitieState.activitySelected,

        addActivity,
        completeActivity,
        modalActivity,
        deleteActivity,

        getActivies,
        selectActivity,
      }}
    >
      {props.children}
    </ActivitiesContext.Provider>
  );
};
