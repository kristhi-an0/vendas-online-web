import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (<div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png"/>
      </ContainerLoginScreen>
    </div>)
};
export default LoginScreen;