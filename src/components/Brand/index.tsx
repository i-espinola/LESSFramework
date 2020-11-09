import React from 'react';
import Link from 'next/link';
import { BrandStyle } from './Styled';

export interface BrandProps {
  size?: number | string;
  variant?: 'default' | 'white' | 'black';
}

const Logotype = ({ size, variant }: BrandProps) => {
  const isDefault = variant === 'default';
  const setting = {
    size,
    variant: isDefault ? undefined : variant,
  };

  return (
    <Link href="/">
      <BrandStyle theme={setting}>
        <span>
          <b>LESS</b>FRAMEWORK
        </span>
      </BrandStyle>
    </Link>
  );
};

Logotype.defaultProps = {
  size: 12,
  variant: 'default',
};

const Brand = React.memo(Logotype);

export default Brand;
export { Brand };
