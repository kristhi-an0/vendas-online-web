import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (<div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2} type="secondary" >LOGIN</TitleLogin>
            <Input title="USUÁRIO"/>
            <Input title="SENHA"/>
            <Button type="primary" margin="34px 0px 16px 0px">ENTRAR</Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png"/>
      </ContainerLoginScreen>
    </div>)
};
export default LoginScreen;