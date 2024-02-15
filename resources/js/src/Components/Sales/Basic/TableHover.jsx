import React from 'react';
import AuthApi from '../../../../utils/api'
import {
  Row, Col, Button, Card, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import Swal from 'sweetalert2';
import errorHandler from '../../../../utils/errorHandler';
import successHandler from '../../../../utils/successHandler';

export default class TableHover extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      allSales: [],
      modal: false,
      modalEdit: false,
      product_name: 'White Polo Shirt',
      product_quantity: '',
      price: '',
      product_id: '',
      product_name_edit: '',
      product_quantity_edit: '',
      price_edit: '',
      sale_id: '',
    };

    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async sales() {
    AuthApi.getAllSales()
      .then((res) => {
        this.setState({
          allSales: res.data.reverse()
        })
      })
  }

  async products() {
    AuthApi.getAllProducts()
      .then((res) => {
        this.setState({
          allProducts: res.data,
        })

      })
  }

  PHPESO = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
    }))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const postData = {
      product_name: this.state.product_name,
      product_quantity: this.state.product_quantity,
      product_id: 1,
      price: this.state.price
    }

    AuthApi.createNewSale(postData)
      .then((res) => {
        successHandler(res.data)
        this.setState({
          product_name: '',
          product_quantity: '',
          price: ''
        })
        this.toggle()
      }).catch((err) => {
        errorHandler(err.response.data.errors.product_quantity)
        errorHandler(err.response.data.errors.product_name)
        errorHandler(err.response.data.errors.price)
      })
    this.sales()
  }

  handleSubmitEdit(e, product_id) {
    e.preventDefault();

    const postData = {
      product_name: this.state.product_name_edit,
      product_quantity: this.state.product_quantity_edit,
      product_id: this.state.product_name_edit === "White Polo Shirt" ? 1 : this.state.product_name_edit === "Straight Cut Slacks" ? 2 : 3,
      price: this.state.price_edit
    }

    AuthApi.updateSale(postData, this.state.sale_id)
      .then((res) => {
        successHandler(res.data)
        this.toggleEdit()
      }).catch((err) => {
        errorHandler(err.response.data.errors.product_quantity)
        errorHandler(err.response.data.errors.product_name)
        errorHandler(err.response.data.errors.price)
      })
    this.sales()
  }

  componentDidMount() {
    this.products();
    this.sales()

  }

  // componentDidUpdate(){
  //   this.sales()
  // }

  render() {
    return (

      <Col md="12">
        <Card className="main-card mb-3">
          <div className="card-header">
            {/* onClick={this.activeUsers.bind(this)} */}
            Sales
            <div className="btn-actions-pane-right">
              <div role="group" className="btn-group-sm btn-group">
                <button className="btn btn-info" onClick={this.toggle}>Add New Sale</button>
                {/* <button className="btn btn-info">All Month</button> */}
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th className=' fw-bolder'>Product Name</th>
                  <th className="text-center fw-bolder">Date</th>
                  <th className="text-center fw-bolder">Quantity Sold</th>
                  <th className="text-center fw-bolder">Total Amount</th>
                  <th className="text-center fw-bolder">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allSales.slice(0, 10).map((sale, indx) => (
                  <tr key={indx}>
                    <td className=''>
                      <div className=" p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left me-3">
                            {/* <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                              </div> */}
                          </div>
                          <div className="widget-content-left flex2">
                            <div className="widget-heading">{sale.product_name}</div>
                            {/* <div className="widget-subheading opacity-7">{}</div> */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{new Date(sale.created_at).toString().slice(3, 15)}</td>
                    <td className="text-center">{sale.product_quantity}</td>
                    <td className="text-center">
                      <div className="">{this.PHPESO.format(sale.price)}</div>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-primary btn-sm me-2" onClick={(e) => (
                        // console.log(sale.id),
                        this.setState(prevState => ({
                          modalEdit: !prevState.modalEdit,
                          product_name_edit: sale.product_name,
                          product_quantity_edit: sale.product_quantity,
                          price_edit: sale.price,
                          sale_id: sale.id,
                        }))
                      )}>Edit</button>
                      <button type="button" className="btn btn-danger btn-sm" onClick={(e) => (
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                            AuthApi.deleteSale(sale.id)
                              .then((res) => {
                                // console.log(res)
                              })
                            this.sales()
                          }
                        })
                      )}>Delete</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <div className="d-block text-center card-footer">
            {/* <button className="me-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
            <button className="btn-wide btn btn-success">Save</button> */}
            <div className='my-4'></div>
          </div>

          {/* Same as */}
          <ToastContainer />
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} centered={false} className='h-0'>
          {/* {...args} */}
          <Form>
            <ModalHeader toggle={this.toggle}>Add New Sale</ModalHeader>
            <ModalBody>

              {/* <FormGroup>
                <Input
                  name="product_id"
                  type="hidden"
                  value='1'
                >
                </Input>
              </FormGroup> */}
              <FormGroup>

                <Label for="exampleSelect">
                  Product Name
                </Label>
                <Input
                  id="exampleSelect"
                  name="product_name"
                  type="select"
                  // value={this.state.product_name}
                  onChange={this.handleChange}
                >
                  {this.state.allProducts.map((prod, idx) => (
                    <option key={idx} value={prod.product_name}>{prod.product_name}</option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="price">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  // value={this.state.price}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="number">
                  Quantity Sold
                </Label>
                <Input
                  id="number"
                  name="product_quantity"
                  type="number"
                  onChange={this.handleChange}
                // value={this.state.product_quantity}
                />

              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <div className='mt-3'>
                <p className='fs-5'>Total Amount: {`0.00`}</p>
              </div>
              <Button color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>

        </Modal>

        <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} >

          <Form>
            <ModalHeader toggle={this.toggleEdit}>Modal title</ModalHeader>
            <ModalBody>

              <FormGroup>

                <Label for="exampleSelect">
                  Product Name
                </Label>
                <Input
                  id="exampleSelect"
                  name="product_name_edit"
                  type="select"
                  // value={this.state.product_name}
                  onChange={this.handleChange}
                >
                  {this.state.allProducts.map((prod, idx) => (
                    <option key={idx} defaultValue={this.state.product_name_edit}>{prod.product_name}</option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="price">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price_edit"
                  type="number"
                  defaultValue={this.state.price_edit}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="number">
                  Quantity Sold
                </Label>
                <Input
                  id="number"
                  name="product_quantity_edit"
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.product_quantity_edit}
                />

              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmitEdit}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={this.toggleEdit}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

      </Col >


    );
  }
}
