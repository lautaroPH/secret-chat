import ButtonLogin from './ButtonLogin';
import GithubDark from './GithubDark';
import GithubLight from './GithubLight';

const ButtonsLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <ButtonLogin
        background="bg-transparent"
        text="text-white"
        backgroundHover="hover:bg-white"
        textHover="hover:text-primary-dark"
        title="Ingresar con Github"
        provider="Github"
        firstIcon={<GithubLight />}
        secondIcon={<GithubDark />}
      />
    </div>
  );
};

export default ButtonsLogin;
