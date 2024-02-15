import React from 'react';
import AuthApi from '../../../../utils/api'
import {
  Row, Col, Button, Card, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import TablePagination from './TablePagination'
import errorHandler from '../../../../utils/errorHandler'
import successHandler from '../../../../utils/successHandler';

import Swal from 'sweetalert2';

export default class TableHover extends React.Component {
  constructor() {
    super();



    this.state = {
      allProducts: [],
      modal: false,
      modalEdit: false,
      activeButton: false,
      active: 'false',
      product_name: '',
      price: '',
      stock: '',
      product_name_edit: '',
      stock_edit: '',
      price_edit: '',
      product_id: '',
      currentIndex: 1,
    };

    this.records = [];

    this.hello = this.state.currentIndex;

    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleActivateButton = this.toggleActivateButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.toggleSomething = this.toggleSomething.bind(this);
  }

  goToPage(e, indx) {
    e.preventDefault();

    this.setState({ currentIndex: indx + 1 })
    console.log('goto', indx + 1)
  }

  prevPage(e, indx) {
    e.preventDefault()
    const isFirstPage = this.state.currentIndex === 1;
    const newIndex = isFirstPage ? this.state.currentIndex = 1 : this.state.currentIndex - 1;
    // this.state.allProducts.length - 1 
    this.setState({ currentIndex: newIndex })
    console.log('prev')
  }

  nextPage(e, indx) {
    e.preventDefault()
    const isLastPage = this.state.currentIndex === Math.ceil(this.records.length / 2)
    // this.state.allProducts.length - 1;
    const newIndex = isLastPage ? this.state.currentIndex = Math.ceil((this.records.length / 2)) : this.state.currentIndex + 1;
    // 0
    this.setState({ currentIndex: newIndex })
    console.log('next', newIndex, Math.ceil(this.records.length / 2))
  }

  async products() {
    AuthApi.getAllProducts()
      .then((res) => {

        this.setState({
          allProducts: res.data.reverse(),
        })
        this.records = res.data;
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

  toggleSomething(e){
    console.log('hey', e.target)
  }

  toggleActivateButton(product_id) {
    const postData = {
      active: this.state.activeButton === true ? 'true' : 'false'
    }
    // console.log(this.state.activeButton)
    AuthApi.activateButton(postData, product_id)
      .then((res) => {
        this.products()
        this.setState(prevState => ({
          activeButton: !prevState.activeButton,
        }))
        
      }).catch((err) => {
        console.log(err)
      })
    
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const postData = {
      product_name: this.state.product_name ? this.state.product_name.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ') : '',
      price: this.state.price,
      stock: this.state.stock
    }

    AuthApi.createNewProduct(postData)
      .then((res) => {
        successHandler(res.data)
        this.setState({
          product_name: '',
          price: '',
          stock: ''
        })
        this.toggle()
        this.products()
      }).catch((err) => {
        errorHandler(err.response.data.errors.stock)
        errorHandler(err.response.data.errors.product_name)
        errorHandler(err.response.data.errors.price)
      })
    
  }

  handleSubmitEdit(e) {
    e.preventDefault();

    const postData = {
      product_name: this.state.product_name ? this.state.product_name.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ') : '',
      price: this.state.price_edit,
      stock: this.state.stock_edit
    }

    AuthApi.updateProduct(postData, this.state.product_id)
      .then((res) => {
        successHandler(res.data)
        this.toggleEdit()
        this.products()
      }).catch((err) => {
        errorHandler(err.response.data.errors.product_name)
        errorHandler(err.response.data.errors.stock)
        errorHandler(err.response.data.errors.price)
      })
    
  }

  componentDidMount() {
    this.products();

  }

  // componentDidUpdate(pP, pS, sS) {
  //   // console.log(this.hello = 2, 'DIDUPDATE')
  //   // console.log(this.state.activeButton)
  //   // if (pS.allProducts.length !== this.state.allProducts.length) {
  //   //   this.products()
  //   //   console.log('hey') 
  //   // }

  // }


  render() {
    return (

      <Col md="12">
        <Card className="main-card mb-3">
          <div className="card-header">
            {/* onClick={this.activeUsers.bind(this)} */}
            Products
            <div className="btn-actions-pane-right">
              <div role="group" className="btn-group-sm btn-group">
                <button className="btn btn-info" onClick={this.toggle}>Add New Product</button>
                {/* <button className="btn btn-info">All Month</button> */}
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th className="fw-bolder">Product Name</th>
                  <th className="text-center fw-bolder">Price</th>
                  <th className="text-center fw-bolder">Stock</th>
                  <th className="text-center fw-bolder">Active</th>
                  <th className="text-center fw-bolder">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allProducts.slice(0, 10).map((prod, indx) => (

                  <tr key={indx}>
                    <td className="">
                      <div className="p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left me-3">
                            {/* <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                              </div> */}
                          </div>
                          <div className="widget-content-left flex2">
                            <div className="widget-heading">{prod.product_name}</div>
                            {/* <div className="widget-subheading opacity-7">{}</div> */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{this.PHPESO.format(prod.price)}</td>
                    <td className="text-center">{prod.stock}</td>
                    <td className="text-center">
                      <FormGroup switch className='text-center d-flex justify-content-center'>
                        <Input
                          type="switch"
                          // defaultChecked={prod.active === 'true' ? true : false}
                          checked={prod.active === 'true' ? true : false}
                          // onChange={(e) => this.toggleSomething(e)}
                          onClick={(e) => this.toggleActivateButton(prod.id)}
                        />
                      </FormGroup>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-primary btn-sm me-2" onClick={(e) => (
                        this.setState(prevState => ({
                          modalEdit: !prevState.modalEdit,
                          product_name_edit: prod.product_name,
                          price_edit: prod.price,
                          stock_edit: prod.stock,
                          product_id: prod.id
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
                              text: "Product has been deleted.",
                              icon: "success"
                            });
                            AuthApi.deleteProduct(prod.id)
                              .then((res) => {
                                // console.log(res)
                              })
                            this.products()
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
            <TablePagination goToPage={this.goToPage} nextPage={this.nextPage} prevPage={this.prevPage} allProducts={this.state.allProducts} currentIndex={this.state.currentIndex} newRecords={this.records} />
          </div>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} centered={false}>
          {/* {...args} */}
          <Form>
            <ModalHeader toggle={this.toggle}>Add New Product</ModalHeader>
            <ModalBody>

              <FormGroup>

                <Label for="exampleSelect">
                  Product Name
                </Label>
                <Input
                  id="exampleSelect"
                  name="product_name"
                  type="text"
                  // value={this.state.product_name}
                  onChange={this.handleChange}
                />
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
                  Stock
                </Label>
                <Input
                  id="number"
                  name="stock"
                  type="number"
                  onChange={this.handleChange}
                // value={this.state.product_quantity}
                />

              </FormGroup>

            </ModalBody>
            <ModalFooter>
              {/* <div className='mt-3'>
                <p className='fs-5'>Total Amount: {`0.00`}</p>
              </div> */}
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
                  type="text"
                  defaultValue={this.state.product_name_edit}
                  onChange={this.handleChange}
                />
                {/* {this.state.allProducts.map((prod, idx) => (
                    <option key={idx} defaultValue={this.state.product_name_edit}>{prod.product_name}</option>
                  ))}
                </Input> */}
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
                  Stock
                </Label>
                <Input
                  id="number"
                  name="stock_edit"
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.stock_edit}
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
