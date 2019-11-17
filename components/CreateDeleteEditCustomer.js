import React from 'react';
import { customerListData } from './CustomerData';


export class CreateDeleteEditCustomer extends React.Component {
    constructor(props) {
        super(props);

       
        this.state = { title: "", loading: true, customerList: new customerListData() };
        var customerId = this.props.match.params["customerId"];

        if (customerId > 0) {
            fetch('api/Customer/Details/' + customerId)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edit Customer Details", loading: false, customerList: data });
                });
        }
        else {
            this.state = { title: "Create A New Customer", loading: false, customerList: new customerListData() };
        }

        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = this.FuncCancel.bind(this);
    }
    render() {
        let contents = this.state.loading
            ? <p><center>Loading...</center></p>
            : this.renderCreateForm();
        return <div>
            <h1><center>{this.state.title}</center></h1>
            <hr />
            {contents}
        </div>;
    }


    
    FuncSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log("print:", data);
       
        if (this.state.customerList.customerId) {
            fetch('api/Customer/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/customer/index");
                })
        }
        else {
            fetch('api/Customer/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/customer/index");
                })
        }
    }


    FuncCancel(e) {
        e.preventDefault();
        this.props.history.push("/customer/index");
    }

  renderCreateForm() {
        return (
           
           <form onSubmit={this.FuncSave} >
                <div className="form-group row" >
                    <input type="hidden" name="CustomerId" value={this.state.customerList.customerId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="customerName" placeholder="Customer Name" defaultValue={this.state.customerList.customerName} required />
                    </div>
                </div >

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="address" >Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="customerAddress" placeholder="Customer Address" defaultValue={this.state.customerList.customerAddress} required />
                    </div>
                </div>


                <div className="modal-footer">
                    <button type="submit" className="ui green button"><i className="save icon"></i>Save</button>
                    {' '}
                    <button className="ui black button" onClick={this.FuncCancel}><i className="cancel icon"></i>Cancel</button>
                </div >
                </form >
                           
            
                   
                   
               
        )
    }
       
}