import { IActivity } from "../IActivity";

export type TypeActivitiesAction =
  | { type: "addActivity"; payload: IActivity }
  | { type: "completeActivity"; payload: { idActivity: string } }
  | { type: "deleteActivity"; payload: { idActivity: string } }
  | { type: "openModalActivity"; payload: boolean }
  | { type: "getActivities" }
  | { type: "activitySelected"; payload: IActivity  };
