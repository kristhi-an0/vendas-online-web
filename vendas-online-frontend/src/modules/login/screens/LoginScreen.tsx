import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (<div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <Input title="USUÁRIO"/>
            <Input title="SENHA"/>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png"/>
      </ContainerLoginScreen>
    </div>)
};
export default LoginScreen;