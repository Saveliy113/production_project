import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ classname }) => {
  return (
    <div className={classNames(cls.navbar, {}, [classname])}>
      <div className="links">
        <Link to={'/'} className={cls.mainLink}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>
    </div>
  );
};
