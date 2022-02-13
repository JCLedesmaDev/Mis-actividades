// Definiremos que contendra una "Actividad"
export interface IActivity {
  title: string;
  descripcion: string;
  hora: string;
  activityType: ActivityType;
  isCompleted: boolean;
  _id: string;
  imageUrl: string;
}
export type ActivityType = "descansar" | "trabajar" | "hobbie";
