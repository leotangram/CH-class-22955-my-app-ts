// Inicio del código
import { useState } from "react";
import Form from "./components/Form";

type FormData = {
  name: string;
  surname: string;
  age: string;
};

export default function App() {
  const [user, setUser] = useState<FormData>({
    name: "",
    surname: "",
    age: "",
  });

  const { age, surname, name } = user;

  const handleChange = (event: any) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Your name is ${name} ${surname} and you have ${age} years`);
  };

  return <Form {...user} handleChange={handleChange} onSubmit={onSubmit} />;
}
