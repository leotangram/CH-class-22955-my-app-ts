import { FC } from "react";

interface IFormProps {
  name: string;
  surname: string;
  age: string;
  handleChange: (event: any) => void;
  onSubmit: (event: any) => void;
}

const Form: FC<IFormProps> = ({
  name,
  surname,
  age,
  handleChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ marginRight: 4 }}>Nombre</label>
        <input name="name" type="text" onChange={handleChange} />
      </div>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ marginRight: 4 }}>Apellido</label>
        <input name="surname" type="text" onChange={handleChange} />
      </div>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ marginRight: 4 }}>Edad</label>
        <input name="age" type="text" onChange={handleChange} />
      </div>
      <button
        disabled={!(name !== "" && surname !== "" && age !== "")}
        onClick={onSubmit}
      >
        Crear orden
      </button>
    </form>
  );
};

export default Form;
