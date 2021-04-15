import React from 'react';
import SkeletonStyle from './Styled';

export interface ContainerProps {
  round?: boolean;
  rows?: number;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Skeleton = (props: ContainerProps) => {
  let { borderRadius, width, height, round } = props;
  const rows = Array(props.rows);

  if (round) {
    borderRadius = '50%';
    width = height;
  }

  if (rows.length) {
    return rows.map((row, index) => (
      <SkeletonStyle key={index} theme={{ borderRadius, width, height }} />
    ));
  } else return <SkeletonStyle theme={{ borderRadius, width, height }} />;
};

Skeleton.defaultProps = {
  borderRadius: '7px',
  round: false,
  height: '100%',
  width: '100%',
  rows: 1,
};

export default Skeleton;
export { Skeleton };
