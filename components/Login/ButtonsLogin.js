import { PROVIDER_VALUES } from 'utils/providerValues';
import ButtonLogin from './ButtonLogin';
import GithubSvg from './GithubSvg';

const ButtonsLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <ButtonLogin
        backgroundOpacity="bg-opacity-50"
        background="bg-black"
        text="text-green-code"
        title="Ingresar con Github"
        provider={PROVIDER_VALUES.github}
        Icon={<GithubSvg />}
      />
    </div>
  );
};

export default ButtonsLogin;
