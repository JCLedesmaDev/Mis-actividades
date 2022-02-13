import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.css"

/* Pages */
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";

import { accessibilityOutline, newspaperOutline } from "ionicons/icons";
import { ActivitiesProvider } from "./Context/ActivitiesProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Definimos un "contentId" para que nuestro Menu sepa que configuracion de Ruteo utiliza, para ello definiremos un Id unico en nuestra aplicacion */}
      <IonMenu side="start" contentId="scheduleAppMi">
        {/* Cabecera del Menu */}
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>

            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Contenido del menu */}
        <IonContent >
          <IonList className="cardContent">
            {/* Para que cuando le hagamos click al Item, el menu se cierre automaticamente */}
            <IonMenuToggle>
              {/* Este item, nos redireccionara a esa url */}
              <IonItem className="cardContent"
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="medium"
                  slot="start"
                  icon={accessibilityOutline}
                />
                <IonLabel>Lista de actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              {/* Este item, nos redireccionara a esa url */}
              <IonItem className="cardContent"
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                <IonLabel>Agregar actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <ActivitiesProvider>

        <IonRouterOutlet id="scheduleAppMi">
          <Route path="/all-activities" component={AllActivities} exact />
          <Route path="/add-activity" component={AddActivity} exact />

          <Redirect to="/all-activities" />
        </IonRouterOutlet>

      </ActivitiesProvider>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
