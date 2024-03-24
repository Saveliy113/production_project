import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      
    </div>
  );
};

export default App;
