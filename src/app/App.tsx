import './styles/index.scss';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import React, { Suspense } from 'react';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content__page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
