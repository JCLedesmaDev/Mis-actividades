import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";
import React from "react";

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <IonHeader className="colorHeader" >
      <IonToolbar className="colorHeader">
        {/* Para que se encuentren sobre el mismo bloque y no debajo del otro */}
        <IonButtons slot="start">
          <IonMenuButton className="colorHeader" />
        </IonButtons>

        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
