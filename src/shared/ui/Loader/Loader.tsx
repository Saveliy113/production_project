import React from 'react';
import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-ellipsis', {})}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
