import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = props => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme ?? 'light']])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
