import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import BasicSales from './Basic';

const Sales = ({ match }) => {
    return (
        <Fragment>
            <AppHeader />
            <div className="app-main">
                <AppSidebar />
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <Route component={BasicSales} />
                        {/* path={`${match.url}/basic`} */}
                    </div>
                    <AppFooter />
                </div>
            </div>
        </Fragment>
    )
}

export default Sales;

