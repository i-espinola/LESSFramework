import React, {
  ReactNode,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  RefObject,
} from 'react';
import { Header, Footer, HeroDefault, Status } from '@components';
import { LayoutStyle } from './Styled';
import { state } from '@contexts';

export interface LayoutProps {
  children: ReactNode;
  header?: boolean;
  headerAutoHidden?: boolean;
  hero?: ReactNode | boolean;
  footer?: boolean;
}

const LayoutDefault = (props: LayoutProps) => {
  const { header, hero, children, footer, headerAutoHidden } = props;
  const { loading } = useContext(state);

  const renderHeader = <Header autoHidden={headerAutoHidden} />;
  const renderFooter = <Footer />;

  if (loading) return <Status loading={true} />;

  return (
    <>
      <LayoutStyle>
        {header ? renderHeader : false}
        {hero ? <HeroDefault /> : false}
        <main>{children}</main>
        {footer ? renderFooter : false}
      </LayoutStyle>
    </>
  );
};

LayoutDefault.defaultProps = {
  headerAutoHidden: true,
  header: true,
  hero: true,
  footer: true,
};

export default LayoutDefault;
export { LayoutDefault };
