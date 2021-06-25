import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { FormEnderecos } from "../../styles/forms";
import { FormEnderecos } from '../../styles/forms';




const initialValue = {
  email: "",
  cep: "",
  cliente: "",
  numero: 0,
  complemento: "",
};
const EnderecoForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    //endereço de onde vou inserir o endereço
    axios
      .post("https://localhost:3000/endereco", values)
      //verificar com o pessoal a URL correta
      .then((response) => {
        history.push("/endereco");
      });
  }
  return (
    <FormEnderecos > 
      <h1>teste jessica</h1>
      <form className="newform" onSubmit={onSubmit}>
        <div className="cep">
          <label htmlFor="cep">CEP</label>
          <input id="cep" name="cep" type="text" placeholder="informe um CEP válido"   onChange={onChange} />
        </div>

        <div className="cliente">
          <label htmlFor="cliente">Cliente</label>
          <input id="cliente"
            name="cliente"
            placeholder="digite seu nome"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="numero">
          <label htmlFor="numero">Numero</label>
          <input
            id="numero"
            name="numero"
            placeholder="número"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="complemento">
          <label htmlFor="complemento">complemento</label>
          <input
            id="complemento"
            name="complemento"
            placeholder="complemento"
            type="text"
            onChange={onChange}
          />
          <div className="bairro">
            <label htmlFor="bairro">Bairro</label>
            <input id="bairro" name="bairro" type="text" placeholder="bairro" onChange={onChange} />
          </div>
          <div className="cidade">
            <label htmlFor="cidade">Município</label>
            <input id="cidade" name="cidade" type="text" placeholder="Município" onChange={onChange} />
          </div>
          <div className="estado">
            <label htmlFor="estado">UF</label>
            <input id="estado" name="estado" type="text" placeholder="UF" onChange={onChange} />
          </div>
          <div className="email">
            <label htmlFor="email">e-mail</label>
            <input id="email" name="email" type="email" placeholder="email@email.com" onChange={onChange} />
          </div>
        </div>
        <div>
          <button type="submit" a href="/endereco">Salvar</button>
        </div>
      </form>
      </FormEnderecos>
  );
};
export default EnderecoForm;