import { alertController } from "@ionic/core";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonIcon,
  IonItem,
  IonModal,
  IonRow,
} from "@ionic/react";
import { checkmarkOutline, trashOutline } from "ionicons/icons";
import React from "react";
import { useActivities } from "../../Hooks/useActivities";
import { IActivity } from "../../Interfaces/IActivity";
import CompleteModal from "../ModalComplete/CompleteModal";

import ActivityCSS from "./Activity.module.css";

interface Props {
  activity: IActivity;
}

export const Activity: React.FC<Props> = (props) => {
  const { activity } = props;

  const { stateModalActivity, modalActivity, deleteActivity, selectActivity } =
    useActivities();

  const handleButtonClick = async (idActivity: string) => {
    const alert = await alertController.create({
      header: "Eliminar actividad",
      message: "¿Esta seguro de eliminar esta actividad?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Eliminar",
          handler: () => {
            deleteActivity(idActivity);
          },
        },
      ],
    });

    await alert.present();
  };

  return (
    <IonRow className={ActivityCSS.activity}>
      <IonCol className="ion-text-center">
        <IonCard>
          <img src={activity.imageUrl} alt="Activity" />
          <IonCardHeader>
            <IonCardTitle>{activity.hora}</IonCardTitle>
            <IonCardSubtitle>{activity.title}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p>{activity.descripcion}</p>
            <IonItem lines="none">
              {!activity.isCompleted ? (
                <IonButton
                  fill="clear"
                  style={{
                    width: "100%",
                  }}
                  onClick={() => {
                    modalActivity(stateModalActivity);
                    selectActivity(activity);
                  }}
                >
                  Completar actividad
                </IonButton>
              ) : (
                <IonIcon
                  color="success"
                  style={{
                    width: "100%",
                  }}
                  icon={checkmarkOutline}
                />
              )}

              <IonIcon
                src={trashOutline}
                style={{
                  color: "red",
                }}
                onClick={() => handleButtonClick(activity._id)}
              />
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};
