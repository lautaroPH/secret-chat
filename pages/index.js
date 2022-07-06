import Form from 'components/FormRoom/Form';
import ButtonsLogin from 'components/Login/ButtonsLogin';
import UserHead from 'components/UserHead/UserHead';
import MatrixCard from 'matrix-card';
import useUser from 'hooks/useUser';

export default function Home() {
  const user = useUser();

  return (
    <div className="relative flex flex-col items-center">
      <MatrixCard
        id={'my-id-1'}
        matrixText={`abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`}
        delay={40}
        backgroundColor={'rgba(42, 40, 45, 0.2)'}
        textFontSize={'16'}
        textMainColor={'#0c0'}
        textAlternateColorRatio={0.1}
        textAlternateColorList={['#080', '#090', '#0a0', '#0b0']}
        styleOverrideForContainerDiv={{
          backgroundColor: 'rgba(42, 40, 45)',
        }}
        styleOverrideForChildrenDiv={{
          backgroundColor: 'transparent',
          top: '0%',
          left: '0%',
          width: '100%',
          height: '100%',
        }}
      >
        <h1 className="mt-5 text-center text-8xl">Secret Chat</h1>
        {user == null && <ButtonsLogin />}
        {user && (
          <div>
            <UserHead />

            <Form />
          </div>
        )}{' '}
      </MatrixCard>
    </div>
  );
}
