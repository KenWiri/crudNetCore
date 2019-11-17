import React from 'react';



export class SalesDisplayAndEdit extends React.Component {

 
    constructor() {

       
        super();

       
        this.state = { salesDisplayEdit: [], loading: true };

        fetch('api/Sales/Index')
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({ salesDisplayEdit: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }


   
    render() {
        let contents = this.state.loading
            ? <p><center>Loading...</center></p>
            : this.renderSalesTable(this.state.salesDisplayEdit);//this renderSalesTable method will return the HTML table. This table will display all the record.
        return <div>
            <h1><center>All Sales Records</center></h1>
            <p>
                <a href="CreateSales"><button className="ui blue button"><i className="plus icon"></i>New Sale</button></a>
            </p>
            {contents}
        </div>;
    }
    
    FuncDelete(id) {
        if (window.confirm("This action cannot be reversed. Are you sure you want to delete this sale record?") === false)
            return;
        else {
           
            fetch('api/Sales/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        salesDisplayEdit: this.state.salesDisplayEdit.filter((rec) => {
                            return (rec.salesId !== id);
                        })
                    });
            });
        }
    }

  
    FuncEdit(id) {
        this.props.history.push("/sales/edit/" + id);
    }

  
    renderSalesTable(salesDisplayEdit) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Store</th>
                    <th>Date Sold</th>
                    <th>Actions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {salesDisplayEdit.map(item =>
                    <tr key={item.salesId}>
                        <td>{item.customerName}</td>
                        <td>{item.productName}</td>
                        <td>{item.storeName}</td>
                        <td>{item.dateSold}</td>
                        <td><button className="action, ui yellow button" onClick={(id) => this.FuncEdit(item.salesId)}><i className="edit icon"></i>Edit</button></td>
                        <td><button className="action, ui red button" onClick={(id) => this.FuncDelete(item.salesId)}><i className="trash icon"></i>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}


export class salesDisplayEdit {
    salesId = 0;
    customerName = "";
    productName = "";
    storeName = "";
    dateSold = "";

}