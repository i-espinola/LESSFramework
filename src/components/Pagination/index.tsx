import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { PaginationStyle } from './Styled';

import ChevronRight from '@svg/chevron-right.svg';
import ChevronRightAll from '@svg/chevrons-right.svg';
import ChevronLeft from '@svg/chevron-left.svg';
import ChevronLeftAll from '@svg/chevrons-left.svg';

export interface PaginationProps {
  total: number;
  limitPage: number;
  pageCurrent?: number;
}

export interface PaginationButtonProps {
  className?: string;
  onClick?: () => any;
  disabled?: boolean;
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | JSX.Element
    | JSX.Element[]
    | string;
}

const Button = (props: PaginationButtonProps) => {
  const { className, onClick, disabled, children } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Pagination = (props: PaginationProps) => {
  const { total, limitPage } = props;
  const [limit, setLimit] = useState(limitPage);
  const router = useRouter();
  const countPages = Math.ceil(total ? total / limit : 0);

  const pageIndex = Array.from(Array(countPages).keys());
  const { pathname, query } = router;
  const pageCurrent = Number(query.page) || props.pageCurrent || 1;
  const showLastPage = pageCurrent === pageIndex.length;
  const showFirstPage = pageCurrent === 1;

  Router.events.on('routeChangeComplete', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  const handleClick = (index) => {
    router.push({
      pathname,
      query: { ...query, page: index },
    });
  };

  const pagesIndex = (number) => (
    <Button
      key={number}
      className={number == pageCurrent ? 'active' : 'number'}
      onClick={() => handleClick(number)}
    >
      {number}
    </Button>
  );

  const previous = (
    <Button
      disabled={showFirstPage}
      onClick={() => handleClick(pageCurrent - 1)}
    >
      <ChevronLeft />
    </Button>
  );

  const previousAll = (
    <Button disabled={showFirstPage} onClick={() => handleClick(1)}>
      <ChevronLeftAll />
    </Button>
  );

  const next = (
    <Button
      disabled={showLastPage}
      onClick={() => handleClick(pageCurrent + 1)}
    >
      <ChevronRight />
    </Button>
  );

  const nextAll = (
    <Button
      disabled={showLastPage}
      onClick={() => handleClick(pageIndex.length)}
    >
      <ChevronRightAll />
    </Button>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!pageCurrent) {
      router.push({
        pathname,
        query: { ...query, page: 1 },
      });
    }
  }, []);

  useEffect(() => {
    setLimit(limitPage);
    router.push({
      pathname,
      query: { ...query, page: 1 },
    });
  }, [limitPage]);

  if (total <= limit || !total) return <></>;

  return (
    <PaginationStyle>
      {previousAll}
      {previous}
      {pageIndex.map((page) => pagesIndex(page + 1))}
      {next}
      {nextAll}
    </PaginationStyle>
  );
};

Pagination.defaultProps = {
  total: 0,
  limitPage: 25,
  pageCurrent: 0,
};

export default Pagination;
export { Pagination };
