import { IonCol, IonText } from "@ionic/react";
import React from "react";


interface Props {
    message: string;
}

export const MessageError: React.FC<Props> = ({message}) => {
  return (
    <IonCol size="12" className="msgError">
      <IonText> {message} </IonText>
    </IonCol>
  );
};
