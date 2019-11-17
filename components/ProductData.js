import React from 'react';



export class ProductData extends React.Component {

    //Declaring the constructor 
    constructor() {

      
        super();

       
        this.state = { productListData: [], loading: true };

        
        fetch('api/Product/Index')
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({ productListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }


   
    render() {
        let contents = this.state.loading
            ? <p><center>LOADING...</center></p>
            : this.renderProductTable(this.state.productListData);//this renderProductTable method will return the HTML table. This table will display all the record.
        return <div>
            <center><h1>All Product Details</h1></center>
            <p>
                <a href="CreateProduct"><button className="ui blue button"><i className="plus icon"></i>New Product</button></a>
            </p>
            {contents}
        </div>;
    }


   
    FuncDelete(id) {
        
        if (window.confirm("This action cannot be reversed. Are you sure you want to delete this product?") === false)
            return;
        else {
           
            fetch('api/Product/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        productListData: this.state.productListData.filter((rec) => {
                            return (rec.productId !== id);
                        })
                    });
            });
        }
    }

   
    FuncEdit(id) {
        this.props.history.push("/product/edit/" + id);
    }

   
    renderProductTable(productListData) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {productListData.map(item =>
                    <tr key={item.productId}>
                        <td >{item.productName}</td>
                        <td >{item.productPrice}</td>
                        <td ><button className="action, ui yellow button" onClick={(id) => this.FuncEdit(item.productId)}><i className="edit icon"></i>Edit</button></td>
                        <td ><button className="action, ui red button" onClick={(id) => this.FuncDelete(item.productId)}><i className="trash icon"></i>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}


export class productListData {
    productId = 0;
    productName = "";
    productPrice = "";
}


