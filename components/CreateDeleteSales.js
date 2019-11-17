import React from 'react';
import { salesDisplayEdit } from './SalesData';


export class CreateDeleteSales extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = ({ title: "", loading: true, customerListData: [], productListData: [], storeListData: [], salesList: new salesDisplayEdit() });

      
        fetch('api/Customer/Index')
            .then(response => response.json())
            .then(data => {

                this.setState({ customerListData: data, loading: false });
            });

      
        fetch('api/Product/Index')
            .then(response => response.json())
            .then(data => {

                this.setState({ productListData: data, loading: false });
            });
       
        fetch('api/Store/Index')
            .then(response => response.json())
            .then(data => {

                this.setState({ storeListData: data, loading: false });
            });


       
        var salesId = this.props.match.params["salesId"];
      
        if (salesId > 0) {
            fetch('api/Sales/Details/' + salesId)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edit Sales Details", loading: false, salesList: data });
                });

        }
        else {
            this.state = ({ title: "Create A New Sale Record", loading: false, customerListData: [], productListData: [], storeListData: [], salesList: new salesDisplayEdit() });
        }
      
        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = this.FuncCancel.bind(this);

    }

   
    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.customerListData, this.state.productListData, this.state.storeListData, this.state.salesListData);
        return <div>
            <h1>{this.state.title}</h1>
            
            <hr />
            {contents}
        </div>;
    }

   
    FuncSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
   
        if (this.state.salesList.salesId) {
            fetch('api/Sales/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/sales/index");
                });
        }
        else {
            fetch('api/Sales/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/sales/index");
                });
        }
    }
    FuncCancel(e) {
        e.preventDefault();
        this.props.history.push("/sales/index");
    }
    
    renderCreateForm(customerListData, productListData, storeListData) {
        return (

            <form onSubmit={this.FuncSave} >
                

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="customer" >Customer</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="customerName" placeholder="Customer Name" defaultValue={this.state.salesList.customerName} required>
                            <option value="">--Select Customer Name --</option>
                            {customerListData.map(item =>
                                <option key={item.customerId} value={item.customerName}>{item.customerName}</option>
                            )}
                        </select>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="product" >Product</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="productName" placeholder="Product Name" defaultValue={this.state.salesList.productName} required>
                            <option value="">--Select Product Name --</option>
                            {productListData.map(item =>
                                <option key={item.productId} value={item.productName}>{item.productName}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="store" >Store</label>
                    <div className="col-md-4">

                        <select className="form-control" data-val="true" name="storeName" placeholder="Store Name" defaultValue={this.state.salesList.storeName} required>
                            <option value="">--Select Store Name --</option>
                            {storeListData.map(item =>
                                <option key={item.storeId} value={item.storeName}>{item.storeName}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="form-group row" >
                    <input type="hidden" name="SalesId" value={this.state.salesList.salesId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="date">Date Sold</label>
                    <div className="col-md-4">
                        <input className="form-control" type="date" name="dateSold" placeholder="YYYY-MM-DD" defaultValue={this.state.salesList.dateSold} required />
                    </div>
                </div >

                <div className="form-group">
                    <button type="submit" className="ui green button"><i className="save icon"></i>Save</button>
                    {' '}
                    <button className="ui black button" onClick={this.FuncCancel}><i className="cancel icon"></i>Cancel</button>
                </div >
            </form >

        )
    }


}