import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import { IActivity } from "../../Interfaces/IActivity";
import { useActivities } from "../../Hooks/useActivities";

interface CompleteModalProps {
  activity: IActivity | null;
  // closeModal: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = (props) => {
  const { activity } = props;


  const { completeActivity, stateModalActivity, modalActivity } =
    useActivities();

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonImg src={activity?.imageUrl} />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-center">
            <IonText>
              <h2 style={{
                color: "#000",
                fontWeight: "bold"
              }}> {activity?.title}</h2>
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-center ion-no-padding">
            <IonText color="medium">
              ¿Está seguro de que desea marcar esta actividad como completada?
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton
              color="danger"
              fill="clear"
              onClick={() => modalActivity(stateModalActivity)}
            >
              Cancelar
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton
              color="danger"
              fill="clear"
              onClick={() => completeActivity(activity?._id as string)}
            >
              Completar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default CompleteModal;
