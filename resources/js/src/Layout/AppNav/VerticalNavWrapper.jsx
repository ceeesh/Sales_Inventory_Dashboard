import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import { MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav, ProjectsNav, InvetoryNav, SalesNav } from './NavItems';

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                {/* <h5 className="app-sidebar__heading">Projects</h5> */}
                <div className="metismenu vertical-nav-menu">
                    {/* <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <a className="metismenu-link" href="#" target="_blank">
                            href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro"
                                <i className="metismenu-icon pe-7s-diamond"></i>
                                Project
                            </a>
                        </li>
                    </ul> */}
                    {/* <MetisMenu content={ProjectsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" /> */}
                </div>
                {/* <h5 className="app-sidebar__heading">Staff Management</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" /> */}
                <h5 className="app-sidebar__heading">Inventory</h5>
                <MetisMenu content={InvetoryNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                <h5 className="app-sidebar__heading">Sales </h5>
                <MetisMenu content={SalesNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />

                {/* <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Forms</h5>
                <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);