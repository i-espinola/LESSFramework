import React, {
  ReactNode,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  RefObject,
} from 'react';
import { ScreenClassProvider } from 'react-grid-system';
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
  const [paddingBottom, setPaddingBottom] = useState(0);
  const headerDom: RefObject<HTMLElement> = useRef(null);
  const footerDom: RefObject<HTMLElement> = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const { loading } = useContext(state);

  const renderHeader = <Header autoHidden={headerAutoHidden} ref={headerDom} />;
  const renderHero = <HeroDefault />;
  const renderFooter = <Footer ref={footerDom} />;

  const calcMainMargins = () => {
    setPaddingTop(headerDom?.current?.clientHeight || 0);
    setPaddingBottom(footerDom?.current?.clientHeight || 0);
  };

  useEffect(() => {
    window.addEventListener('resize', calcMainMargins);
    return () => window.removeEventListener('resize', calcMainMargins);
  }, []);

  if (loading) return <Status loading={true} />;

  return (
    <ScreenClassProvider>
      <LayoutStyle theme={{ paddingTop, paddingBottom }}>
        {header ? renderHeader : false}
        {hero ? renderHero : false}
        <main>{children}</main>
        {footer ? renderFooter : false}
      </LayoutStyle>
    </ScreenClassProvider>
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
