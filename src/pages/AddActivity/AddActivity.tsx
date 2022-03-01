import React, { useRef, useContext, useState } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonDatetime,
  IonButton,
  IonToast,
  IonText,
} from "@ionic/react";

import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useActivities } from "../../Hooks/useActivities";
import { useFormCustom } from "../../Hooks/useForm/useFormCustom";
import { IFormInputs } from "../../Hooks/useForm/IUseForm";
import { ActivityType } from "../../Interfaces/IActivity";

import portfolio3 from "../../images/portfolio-3.jpg";
import portfolio4 from "../../images/portfolio-4.jpg";
import nature from "../../images/nature-3191091_1920.jpg";
import { MessageError } from "../../components/MessageError/MessageError";

interface IFormData {
  activityType: string;
  title: string;
  descripcion: string;
  hora: string;
}

const AddActivity: React.FC = () => {
  /// VARIABLES
  const inputActivities: IFormInputs[] = [
    {
      placeholder: "Titulo de la actividad: ",
      type: "text",
      name: "title",
    },
    {
      placeholder: "Descripcion: ",
      type: "text",
      name: "descripcion",
    },
  ];

  const selectImage = {
    descansar: nature,
    trabajar: portfolio3,
    hobbie: portfolio4,
  };

  /// HOOKS
  const history = useHistory();
  const { addActivity } = useActivities();
  const typeActivity = useRef<HTMLIonSegmentElement>(null);
  const [toastMsg, setToastMsg] = useState<string>("");
  const [error, setError] = useState(false);

  const { formulario, handleChange, resetForm } = useFormCustom<IFormData>({
    activityType: "",
    title: "",
    descripcion: "",
    hora: "",
  });
  const { descripcion, hora, title } = formulario as IFormData;
  const activityType = typeActivity.current?.value as ActivityType;

  console.log("NEGADO ", !activityType);

  /// METODOS

  const createActivity = () => {
    const validate =
      !!activityType?.length &&
      !!title?.length &&
      !!descripcion?.length &&
      !!hora?.length;

    try {
      if (validate === false) {
        setError(true);
        throw new Error("Uups... Debe completar todos los campos");
      }

      addActivity({
        title,
        descripcion,
        hora: new Date(hora).toLocaleTimeString().toString(),
        activityType,
        isCompleted: false,
        _id: (Math.random() * 100).toString(),
        imageUrl: selectImage[activityType],
      });

      setError(false)
      setToastMsg("La actividad se ha agregado correctamente");

      setTimeout(() => {
        history.push("/all-activities");
        resetForm();
      }, 2000);
    } catch (error: any) {

      setToastMsg(error);
    }
  };

  return (
    <IonPage>
      {/* Nos dara alerta en caso de que exista algun mensaje dentro del toast*/}
      <IonToast
        isOpen={!!toastMsg}
        message={toastMsg}
        duration={4000}
        color="medium"
        onDidDismiss={() => setToastMsg("")}
      />

      <Header title="Agregar actividad" />

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonSegment ref={typeActivity}>
                <IonSegmentButton value="trabajar">
                  <IonLabel color="primary">Trabajo</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="descansar">
                  <IonLabel color="primary">Descanso</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="hobbie">
                  <IonLabel color="primary">Hobbie</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>

            {!activityType && error && (
              <MessageError message="Debe elegir alguna categoria." />
            )}
          </IonRow>

          {inputActivities.map(({ name, placeholder, type }, indexI) => (
            <IonRow key={indexI}>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">{placeholder}</IonLabel>
                  <IonInput
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onIonChange={handleChange}
                    value={formulario[name]}
                  />
                </IonItem>
              </IonCol>

              {!formulario[name] && error && (
                <MessageError message={`Su actividad debe tener un ${name}.`} />
              )}
            </IonRow>
          ))}

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Comenzar: </IonLabel>
                <IonDatetime
                  display-format="h:mm A"
                  picker-format="h:mm A"
                  value={formulario["hora"]}
                  onIonChange={handleChange}
                  name="hora"
                />
              </IonItem>
            </IonCol>

            {!formulario["hora"] && error && (
              <MessageError
                message={`Su actividad debe tener una hora de inicio.`}
              />
            )}
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton expand="block" fill="outline" onClick={createActivity}>
                Agregar actividad
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddActivity;
