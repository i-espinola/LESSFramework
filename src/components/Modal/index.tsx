import React, { memo } from 'react';
import { Box } from './../Box';
import { ModalStyle, Overlay, Container, Footer } from './Styled';

export interface Actionsprops {
  onClick: () => any;
  label: string | React.ReactNode;
  primary?: boolean;
}

export interface Modalprops {
  visible: boolean;
  children: React.ReactNode;
  toggle: () => any;
  actions?: Actionsprops[];
}

const ModalDialog = (props: Modalprops) => {
  const { visible, children, toggle, actions } = props;

  const prototypeButton = actions?.map((button, index) => (
    <button
      key={index}
      type="button"
      className={button.primary ? 'primary' : ''}
      onClick={button.onClick()}
    >
      {button.label}
    </button>
  ));

  const defaultButton = (
    <>
      <button type="button" onClick={toggle}>
        Fechar
      </button>
    </>
  );

  return (
    <ModalStyle className={visible ? 'show' : ''}>
      <Overlay onClick={toggle} />
      <Container>
        <Box>
          <>
            {children}
            <Footer>{actions ? prototypeButton : defaultButton}</Footer>
          </>
        </Box>
      </Container>
    </ModalStyle>
  );
};

ModalDialog.initialProps = {
  visible: false,
};

const Modal = memo(ModalDialog);

export default Modal;
export { Modal };
