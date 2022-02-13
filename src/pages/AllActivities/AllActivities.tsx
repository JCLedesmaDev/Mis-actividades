import React, { useContext, useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonText,
  IonModal,
} from "@ionic/react";

import { Header } from "../../components/Header/Header";
import { Activity } from "../../components/Activity/Activity";
import { useActivities } from "../../Hooks/useActivities";
import AllActivitiesCSS from "./AllActivities.module.css";
import { useHistory } from "react-router-dom";
import iconEmoji from "../../images/icons8-winking-face-with-tongue-48.png";
import CompleteModal from "../../components/ModalComplete/CompleteModal";

const AllActivities: React.FC = () => {
  const { activities, stateModalActivity, activitySelected } = useActivities();
  const history = useHistory();

  return (
    <IonPage>
      {activitySelected && (
        <IonModal isOpen={stateModalActivity}>
          <CompleteModal activity={activitySelected} />
        </IonModal>
      )}

      <Header title="Todas las actividades" />

      <IonContent>
        <IonGrid className={AllActivitiesCSS.container}>
          {activities?.length > 0 ? (
            activities.map((activity: any, index: number) => (
              <Activity key={index} activity={activity} />
            ))
          ) : (
            <IonRow className={AllActivitiesCSS.textContainer}>
              <IonCol>
                <h3>Uupss no tiene ninguna actividad guardada!</h3>
                <img src={iconEmoji} alt="" />
              </IonCol>

              <IonCol>
                <p>Haz click aqui para crear tu actividad!</p>
                <IonButton
                  shape="round"
                  expand="block"
                  fill="solid"
                  onClick={() => history.push("/add-activity")}
                >
                  <IonText>Crear actividad</IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
