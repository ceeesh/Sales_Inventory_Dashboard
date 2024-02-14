import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import BasicProjects from '../Projects/Basic';


const Projects = ({match}) => {
  return (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route  component={BasicProjects}/>
                    {/* path={`${match.url}/basic`} */}
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
  )
}

export default Projects