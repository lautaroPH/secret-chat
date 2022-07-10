import { ActiveConversation } from 'context/ConversationContext';
import '../styles/globals.css';
import { useState } from 'react';
import MatrixCard from 'matrix-card';

function MyApp({ Component, pageProps }) {
  const [activeConversation, setActiveConversation] = useState('');

  return (
    <ActiveConversation.Provider
      value={{ activeConversation, setActiveConversation }}
    >
      <MatrixCard
        id={'my-id-1'}
        matrixText={`abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`}
        delay={40}
        backgroundColor={'rgba(10, 10, 10, 0.2)'}
        textFontSize={'16'}
        textMainColor={'#0c0'}
        textAlternateColorRatio={0.1}
        textAlternateColorList={['#080', '#090', '#0a0', '#0b0']}
        styleOverrideForContainerDiv={{
          backgroundColor: 'rgb(10, 10, 10)',
        }}
        styleOverrideForChildrenDiv={{
          backgroundColor: 'transparent',
          top: '0%',
          left: '0%',
          width: '100%',
          height: '100%',
        }}
      >
        <Component {...pageProps} />
      </MatrixCard>
    </ActiveConversation.Provider>
  );
}

export default MyApp;
