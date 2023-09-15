import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import axios from "axios";
import SVGLogo from "../../../shared/icons/SVGLogo";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:3000/auth',
      data: {
        email: email,
        password: password,
      },
    }).then((result) => {
      alert(`Fez login ${result.data.accessToken}`);
      return result.data;
    }).catch(() => {
      alert('Usuário ou senha inválido.');
    });
    alert(`email: ${email}, password: ${password}`);
  };

  return (<div>
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary" >LOGIN</TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input type="password" title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
          <Button type="primary" margin="34px 0px 16px 0px" onClick={handleLogin}>ENTRAR</Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png"/>
    </ContainerLoginScreen>
  </div>)
};

export default LoginScreen;