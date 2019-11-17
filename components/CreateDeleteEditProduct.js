import React from 'react';
import { productListData } from './ProductData';


export class CreateDeleteEditProduct extends React.Component {
    constructor(props) {
        super(props);

        
        this.state = { title: "", loading: true, productList: new productListData() };

       
        var productId = this.props.match.params["productId"];

        
        if (productId > 0) {
            fetch('api/Product/Details/' + productId)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edit Product Details", loading: false, productList: data });
                });
        }
        else {
            this.state = { title: "Create A New Product", loading: false, productList: new productListData() };
        }

        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = this.FuncCancel.bind(this);
    }


    render() {
        let contents = this.state.loading
            ? <p><center>LOADING...</center></p>
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
     
        if (this.state.productList.productId) {
            fetch('api/Product/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/product/index");
                })
        }
        else {
            fetch('api/Product/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/product/index");
                })
        }
    }


    FuncCancel(cancel) {
        cancel.preventDefault();
        this.props.history.push("/product/index");
    }

   
    renderCreateForm() {
        return (

            <form onSubmit={this.FuncSave} >
                <div className="form-group row" >
                    <input type="hidden" name="ProductId" value={this.state.productList.productId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="productName" placeholder="Product Name" defaultValue={this.state.productList.productName} required />
                    </div>
                </div >

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="price" >Price</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="productPrice" placeholder="Product Price" defaultValue={this.state.productList.productPrice} required />
                    </div>
                </div>


                <div className="form-group">
                    <button type="submit" className="ui green button"><i className="save icon"></i>Save</button>
                    {' '}
                    <button className="ui black button" onClick={this.FuncCancel}><i className="cancel icon"></i>Cancel</button>
                </div >
            </form >
        )
    }
}