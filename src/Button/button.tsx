import React, { FC, PropsWithChildren } from 'react';
import './button.css';

export type ButtonProps = {
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
};

export const button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={'button'}>
      {children}
    </button>
  );
};
