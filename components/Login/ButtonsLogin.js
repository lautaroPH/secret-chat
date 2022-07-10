import { PROVIDER_VALUES } from 'utils/providerValues';
import ButtonLogin from './ButtonLogin';
import GithubDark from './GithubDark';
import GithubLight from './GithubLight';

const ButtonsLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <ButtonLogin
        backgroundOpacity="bg-opacity-50"
        background="bg-black"
        text="text-green-code"
        backgroundHover="hover:bg-white"
        textHover="hover:text-primary-dark"
        title="Ingresar con Github"
        provider={PROVIDER_VALUES.github}
        firstIcon={<GithubLight />}
        secondIcon={<GithubDark />}
      />
    </div>
  );
};

export default ButtonsLogin;
