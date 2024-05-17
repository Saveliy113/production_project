import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PageLoader } from '@/widgets/PageLoader/PageLoader';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page__wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
