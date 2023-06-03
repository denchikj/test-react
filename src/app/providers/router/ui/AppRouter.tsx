import { routeConfig } from 'app/shared/config/routeConfig/routeConfig';
import { PageLoader } from 'app/shared/ui/PageLoader/PageLoader';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
