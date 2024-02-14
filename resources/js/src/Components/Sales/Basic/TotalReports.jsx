import React from 'react';
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

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
    { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
    { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
    { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
    { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
    { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
    { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
    { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
    { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
    { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
    { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
    { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
    { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
];

export default class TotalReports extends React.Component {
    render() {
        return (
            <>
                <Col md="6" className='w-25'>
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                {/* <i className="lnr-cog" /> */}
                            </div>
                            <div className="widget-numbers">
                                45.8k
                            </div>
                            <div className="widget-subheading">
                                Gross Sales
                            </div>
                            <div className="widget-description">
                                <FontAwesomeIcon className="text-white opacity-5" icon={faAngleUp} />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                <LineChart data={data}
                                    margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                    <Line type='monotone' dataKey='pv' stroke='#ffffff' strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </Col>
                <Col md="6" className='w-25'>
                    <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                        <div className="icon-wrapper rounded">
                            <div className="icon-wrapper-bg bg-dark opacity-9" />
                            <i className="lnr-graduation-hat text-white" />
                        </div>
                        <div className="widget-numbers">
                            63.2k
                        </div>
                        <div className="widget-subheading">
                            Net Sales
                        </div>
                        <div className="widget-description text-white">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">72.1%</span>
                        </div>
                    </div>
                </Col>
                <Col md="6" className='w-25'>
                    <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                        <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg bg-white opacity-10" />
                            <i className="lnr-cog icon-gradient bg-arielle-smile" />
                        </div>
                        <div className="widget-numbers">
                            87,4
                        </div>
                        <div className="widget-subheading">
                            Reports Generated
                        </div>
                        <div className="widget-description text-white">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">54.9%</span>
                        </div>
                    </div>
                </Col>
                <Col md="6" className='w-25'>
                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                        <div className="icon-wrapper rounded">
                            <div className="icon-wrapper-bg bg-white opacity-10" />
                            <i className="lnr-screen icon-gradient bg-warm-flame" />
                        </div>
                        <div className="widget-numbers">
                            17.2k
                        </div>
                        <div className="widget-subheading">
                            Profiles
                        </div>
                        <div className="widget-description text-white">
                            <span className="pe-1">62,7%</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                    </div>
                </Col>

            </>
        )
    }
}