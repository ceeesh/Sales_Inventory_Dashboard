import React from 'react';
import { Table } from 'reactstrap';

export default class SalesActivity extends React.Component {
    render() {
        return (
            <div className="row m-auto">
                <h2>SALES ACTIVITY</h2>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1 m-auto mb-2">
                                        <div className="  mt-0 fsize-3 text-danger">25</div>
                                        <div>Qty</div>
                                    </div>
                                  
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">TO BE PACKED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-success mb-3 widget-chart widget-chart2   card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1 m-auto mb-2">
                                        <div className="  mt-0 fsize-3 text-success">42</div>
                                        <div>Pkgs</div>
                                    </div>
                                   
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">TO BE SHIPPED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2   card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1 m-auto mb-2">
                                        <div className="  mt-0 fsize-3 text-warning">32</div>
                                        <div>Pkgs</div>
                                    </div>
                                    
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">TO BE DELIVERED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1 m-auto mb-2">
                                        <div className=" mt-0 fsize-3 text-info">89</div>
                                        <div>Qty</div>
                                    </div>
                                
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">TO BE INVOICED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}