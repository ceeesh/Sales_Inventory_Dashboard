import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Table } from 'reactstrap';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    CardTitle
} from 'reactstrap';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthApi from '../../../../utils/api'
import TableHover from './TableHover';
import InventorySummary from './InventorySummary'
import HorizontalBarExample from './horizontalBar'
import SalesActivity from './SalesActivity'
import TotalReports from './TotalReports';




export default class BasicSales extends Component {
    constructor() {
        super();

        this.state = {
        };

    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition
                        component="div"
                        className="TabsAnimation"
                        appear={true}
                        timeout={0}
                        enter={false}
                        exit={false}>

                        <Row>
                            {/* PERCENTAGE TARGETS */}

                            {/* <SalesActivity /> */}


                            {/* <TotalReports /> */}
                            <div>

                                <Col lg="6" className='w-100 m-auto'>
                                    <TableHover />
                                </Col>
                            </div>

                            <Row className='m-auto'>

                                {/* <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody >
                                            <CardTitle>INVENTORY SUMMARY</CardTitle>
                                            <InventorySummary />
                                        </CardBody>
                                    </Card>
                                </Col> */}
                                {/* <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Annual Sales Perfomance Report</CardTitle>
                                            <HorizontalBarExample />
                                        </CardBody>
                                    </Card>

                                </Col> */}

                                
                            </Row>
                        </Row>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}