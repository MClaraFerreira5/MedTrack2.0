import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioCadastro = ({ campos, botaos, login, h1, p }) => {
  const [formData, setFormData] = useState(
    campos.reduce((acc, campo) => ({ ...acc, [campo.name]: "" }), {})
  );
  const navigate = useNavigate();

  // Atualiza o estado do input de forma dinâmica
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const irPraProxima = () => {
    navigate("/cadastro_user", { state: formData });
  };

  return (
    <div className="flex flex-col gap-3 sm:shadow-lg sm:shadow-cyan-500/50 sm:p-20 w-3/5">
        <h1 className="text-2xl font-semibold">{h1}</h1>
        <p className="mt-4">{p}</p>

      {campos.map((campo) => (
        <CampoTexto
          key={campo.name}
          type={campo.type}
          id={campo.id}
          label={campo.label}
          name={campo.name}
          value={formData[campo.name]}
          placeholder={campo.placeholder}
          onChange={handleChange}
        />
      ))}
      {login? (
          <a className="text-blue-500 hover:underline text-sm cursor-pointer" href="/login">
          Já possui uma conta? Faça o Login
        </a>
        ):(<div> </div>)}

      <div className="flex justify-between self-end">
        {botaos.map((prop) => (
          <Botao 
            label={prop.label}
            destino={prop.destino}
           />
        ))}

        

      </div>
    </div>
  );
};

export default FormularioCadastro;
