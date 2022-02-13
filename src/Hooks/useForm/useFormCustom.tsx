import { ChangeEvent, useState } from "react";

//Custom Hook Generico Tipado
export const useFormCustom = <TypeFormData extends Object>(
  initialState: TypeFormData
) => {
  /* PD: Colocamos <any> para poner hacer un arreglo de INPUTS y luego hacer 
    value={formulario[name]} ya que nos salta mil errores y no se solucionarlo (aun)
    Caso de que no se haga un array de INPUTS, quitar el <any>
  */
  const [formulario, setFormulario] = useState<any>(initialState);
  const [saveName, setSaveName] = useState<string[]>([]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (!saveName.includes(name)) {
      setSaveName([...saveName, name]);
    }

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const resetForm = () => {
    saveName.forEach((campoName) => {
      setFormulario({
        ...formulario,
        "title": "",  //Solucionar, en terioa con lo de abajo, deberia abarcar todo.
        [campoName]: ""
      });
    });
  };

  return {
    formulario,
    ...formulario,
    handleChange,
    resetForm,
  };
};

//  const inputLogin: IFormInputs[] = [
//     {
//       placeholder: "Correo electronico: ",
//       type: "email",
//       name: "email",
//     },
//     {
//       placeholder: "Contraseña: ",
//       type: "password",
//       name: "passowrd",
//     },
//   ];

// {inputLogin.map(({ type, placeholder, name }, indexInput) => (
//   <Fragment key={indexInput}>
//     <IonLabel>{placeholder}</IonLabel>

//     <IonInput
//       type={type}
//       placeholder={placeholder}
//       name={name}
//       onIonChange={handleChange}
//       value={formulario[name]}
//     />
//   </Fragment>
// ))}
