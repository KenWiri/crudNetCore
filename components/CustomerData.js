import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'




export class CustomerData extends React.Component {

   
    constructor() {

        
        super();

       
        this.state = { customerListData: [], loading: true };

     
        fetch('api/Customer/Index')
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({ customerListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }


    render() {
        let contents = this.state.loading
            ? <p><center>Loading...</center></p>
            : this.renderCustomerTable(this.state.customerListData);
        return <div>
            <center><h1>All Customer Records</h1></center>
            <p>
                <a href="CreateCustomer"><button className="ui blue button"><i className="plus icon"></i>New Customer</button></a>
            </p>
            {contents}
        </div>;
    }

    FuncDelete(id) {
       
        if (window.confirm("This action cannot be reversed. Are you sure you want to delete this customer?") === false)
            return;
        else {
           
            fetch('api/Customer/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        customerListData: this.state.customerListData.filter((rec) => {
                            return (rec.customerId !== id);
                        })
                    });
            });
        }
    }


    FuncEdit(id) {
        this.props.history.push("/customer/edit/" + id);
    }


    renderCustomerTable(customerListData) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerListData.map(item =>
                    <tr key={item.customerId}>
                        <td >{item.customerName}</td>
                        <td >{item.customerAddress}</td>
                        <td ><button className="action, ui yellow button" onClick={(id) => this.FuncEdit(item.customerId)}><i className="edit icon"></i>Edit</button></td>
                        <td ><button className="action, ui red button" onClick={(id) => this.FuncDelete(item.customerId)}><i className="trash icon"></i>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}


export class customerListData {
    customerId = 0;
    customerName = "";
    customerAddress = "";
}