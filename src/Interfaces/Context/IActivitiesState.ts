import { IActivity } from "../IActivity";

export interface IActivitiesState {
    activities : IActivity[];
    activitySelected : IActivity | undefined;
    stateModalActivity: boolean;
}