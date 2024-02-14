import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
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

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

// const data = [
//     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
//     { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
//     { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
//     { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
//     { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
//     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

// const data2 = [
//     { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
//     { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
//     { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
//     { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
//     { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
//     { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
//     { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
//     { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
//     { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
// ];


export default class BasicProjects extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '22',
            activeTab11: '11',
            allActiveUsers: [],
            allProjects: [],
            progressProjectsPercent: 0,
            completedProjectsPercent: 0,
        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    async activeUsers() {
        AuthApi.getAllActiveUsers()
            .then((res) => {
                console.log(res)
                this.setState({
                    allActiveUsers: res.data,
                })

            })
    }

    async completedProjects(){
        AuthApi.getAllCompletedProjects()
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    completedProjectsPercent: res.data
                })
            })
    }

    async inProgressProjects(){
        AuthApi.getAllInProgressProjects()
        .then((res) => {
            this.setState({
                progressProjectsPercent:res.data
            })
        })
    }

    async projects() {
        AuthApi.getAllProjects()
            .then((res) => {
                this.setState({
                    allProjects: res.data,
                })

            })
    }

    componentDidMount() {
        this.activeUsers();
        this.projects();
        this.inProgressProjects();
        this.completedProjects();
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
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

                            <div className="row m-auto">
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-danger">{this.state.progressProjectsPercent}%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={this.state.progressProjectsPercent} aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.state.progressProjectsPercent}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">In Progress Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-success">{this.state.completedProjectsPercent}%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={this.state.completedProjectsPercent} aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.state.completedProjectsPercent}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Completed Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Spendings Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Totals Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BANDWITH REPORTS */}
                            <Col md="12" lg="6">

                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Project Reports
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            {/* <Button outline
                                                className={"border-0 btn-pill btn-wide btn-transition " + classnames({ active: this.state.activeTab1 === '11' })}
                                                color="primary" onClick={() => {
                                                    this.toggle1('11');
                                                }}>Tab 1</Button> */}
                                            {/* <Button outline
                                                className={"ms-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab1 === '22' })}
                                                color="primary" onClick={() => {
                                                    this.toggle1('22');
                                                }}>Tab 2</Button> */}
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="22">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={179}>
                                                    <ComposedChart data={this.state.allProjects}>
                                                        <CartesianGrid stroke="#ffffff" />
                                                        <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200" />
                                                        <Bar dataKey="pv" barSize={16} fill="#545cd8" />
                                                        <Line type="monotone" dataKey="uv" strokeWidth="3" stroke="#d92550" />
                                                    </ComposedChart>
                                                </ResponsiveContainer>
                                                <div className="widget-chart-content mt-3 mb-2">
                                                    <div className="widget-description mt-0 text-success">
                                                        <FontAwesomeIcon icon={faArrowUp} />
                                                        <span className="ps-2 pe-2">37.2%</span>
                                                        <span className="text-muted opacity-8">performance increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardBody className="pt-2">
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            23%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Deploys
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="warning"
                                                                        value="23" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            76%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Traffic
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="info"
                                                                        value="76" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="divider mt-4" />
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            83%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Servers Load
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="danger"
                                                                        value="83" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            48%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Reported Bugs
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="alternate"
                                                                        value="48" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </CardBody>
                                        </TabPane>
                                    </TabContent>


                                </Card>


                            </Col>

                            <Col md="12" lg="6">

                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Bandwidth Reports
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            {/* <Button outline
                className={"border-0 btn-pill btn-wide btn-transition " + classnames({ active: this.state.activeTab1 === '11' })}
                color="primary" onClick={() => {
                    this.toggle1('11');
                }}>Tab 1</Button> */}
                                            {/* <Button outline
                className={"ms-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab1 === '22' })}
                color="primary" onClick={() => {
                    this.toggle1('22');
                }}>Tab 2</Button> */}
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab11}>
                                        <TabPane tabId="11">
                                            <CardBody className="pt-2">
                                                <Row className="mt-3">
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            63%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Generated Leads
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="danger"
                                                                        value="63" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            32%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Submitted Tickers
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="success"
                                                                        value="32" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="divider mt-4" />
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            71%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Server Allocation
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="primary"
                                                                        value="71" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            41%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Generated Leads
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="warning"
                                                                        value="41" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            <div className="widget-chart p-0">
                                                <div className="widget-chart-content">
                                                    <div className="widget-description mt-0 text-warning">
                                                        <FontAwesomeIcon icon={faArrowLeft} />
                                                        <span className="ps-1">175.5%</span>
                                                        <span className="text-muted opacity-8 ps-1">increased server resources</span>
                                                    </div>
                                                </div>
                                                <ResponsiveContainer height={187}>
                                                    <AreaChart data={this.state.allProjects} margin={{ top: -45, right: 0, left: 0, bottom: 0 }}>
                                                        <defs>
                                                            <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="10%" stopColor="#f7b924" stopOpacity={0.7} />
                                                                <stop offset="90%" stopColor="#f7b924" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <Tooltip />
                                                        <Area type='monotoneX' dataKey='uv' stroke='#f7b924' strokeWidth={2} fillOpacity={1}
                                                            fill="url(#colorPv2)" />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </TabPane>
                                    </TabContent>


                                </Card>


                            </Col>


                            {/* ACTIVE USERS */}
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">
                                        {/* onClick={this.activeUsers.bind(this)} */}
                                        Active Users
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                                <button className="active btn btn-info">Last Week</button>
                                                <button className="btn btn-info">All Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
                                                    <th className="text-center">City</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.allActiveUsers.slice(0, 5).map((user, idx) => (
                                                    <tr key={idx}>

                                

                                                        <td className="text-center text-muted">{user.id}</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">{`${user.name[0].toUpperCase()}${user.name.slice(1)}`}</div>
                                                                        <div className="widget-subheading opacity-7">{user.occupation}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">{user.city}</td>
                                                        <td className="text-center">
                                                            <div className={`badge ${user.status === 'Completed' ? 'bg-success' : user.status === 'On Hold' ? 'bg-info' : 'bg-danger'}`}>{user.status}</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button type="button" className="btn btn-primary btn-sm">{user.email}</button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-block text-center card-footer">
                                        <button className="me-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                                        <button className="btn-wide btn btn-success">Save</button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

// export default BasicProjects