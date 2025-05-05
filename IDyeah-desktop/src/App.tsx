import React, { Children } from 'react'
import FunctionPage from './Pages/FunctionPage/FunctionPage';
import { useContext, createContext } from 'react';
import CameraPreview from './Components/CameraPreview/CameraPreview';
import ButtonList from './Components/ButtonList/ButtonList';
import WallChange from './Components/WallChange/WallChange';

function App() {
  return (
    <FormProvider>
      <div>
        <div className="flex gap-6">
          <FunctionPage />
          <div className="flex flex-col gap-6">
            <CameraPreview />
            <ButtonList />
          </div>
        </div>
        <WallChange />
      </div>
    </FormProvider>
  );
}

export default App

type FormType = {
  name: string;
  adm: string;
  ph: string;
  guardian: string;
  address: string;
  dob: string;
  blood: string;
  bp: string;
  bus: string;
  club: string;
};

type FormContextType = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider = ({children}:{children:React.ReactElement}) => {
  const [form, setForm] = React.useState({
    name: "",
    adm: "",
    ph: "",
    guardian: "",
    address: ``,
    dob: "",
    blood: "",
    bp: "--",
    bus: "--",
    club: "--"
  })
  return (
    <FormContext.Provider value={{form, setForm}} >
        {children}
    </FormContext.Provider>
  )
}


export const useForm = () => {
  const context = useContext(FormContext);
  if(!context){
    throw new Error("useForm must be used within the FormProvider Parent component.")
  }
  return context
}