import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(error => {
      console.log(
        `[i18n.LangSwitcher]: error while changing language ${error}`,
      );
    });
  };

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
