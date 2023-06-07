import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, FullContainer, InputContainer, MainContainer } from './styled';
import { baseURL } from '../../constants/baseURL';
import axios from 'axios';
import { goToLogin } from '../../route/coordinator';
import useForms from '../../hooks/useForms';
import Header from '../../components/Header/Header';
import FooterPage from '../../components/Footer/FooterPage';

function SignUpPage() {
  const navigate = useNavigate();
  const { form, onChange, limparCampos } = useForms({
    name: '',
    email: '',
    password: ''
  });

  function fazerCadastro(e) {
    e.preventDefault();
    axios.post(`${baseURL}/user/signup`, form)
      .then((res) => {
        limparCampos();
        console.log(res);
        localStorage.setItem('token', res.data.token);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }

  return (
    <>
      <Header />
      <FullContainer>
        <MainContainer>
          <h1>Cadastro</h1>
          <FormContainer onSubmit={fazerCadastro}>
            <InputContainer>
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Senha:</label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={onChange}
                type={'password'}
                required
              />
            </InputContainer>

            <button>Cadastrar</button>
            <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
          </FormContainer>
        </MainContainer>
      </FullContainer>
      <FooterPage />
    </>
  );
}

export default SignUpPage;
