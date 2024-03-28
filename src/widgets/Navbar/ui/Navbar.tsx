import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
