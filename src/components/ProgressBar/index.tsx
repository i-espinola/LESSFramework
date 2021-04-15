import React from 'react';
import { ProgressBarStyle } from './Styled';

export interface ProgressBarProps {
  height?: string;
  progress?: number;
}

const ProgressBar = ({ progress, height }: ProgressBarProps) => {
  return (
    <ProgressBarStyle theme={{ progress, height }}>
      <div>
        <div />
      </div>
    </ProgressBarStyle>
  );
};

ProgressBar.defaultProps = {
  height: '8px',
  progress: 0,
};

export default ProgressBar;
export { ProgressBar };
