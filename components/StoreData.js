import React from 'react';



export class StoreDisplayAndEdit extends React.Component {

    //Declaring the constructor 
    constructor() {

      
        super();

      
        this.state = { storeListData: [], loading: true };

      
        fetch('api/Store/Index')
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({ storeListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }


 
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStoreTable(this.state.storeListData);//this renderStoreTable method will return the HTML table. This table will display all the record.
        return <div>
            <h1><center>All Store Details</center></h1>
            <p>
                <a href="CreateStore"><button className="ui blue button"><i className="plus icon"></i>New Store</button></a>
            </p>
            {contents}
        </div>;
    }
  
    FuncDelete(id) {
        if (window.confirm("This action cannot be reversed. Are you sure you want to delete this store?") === false)
            return;
        else {
           
            fetch('api/Store/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        storeListData: this.state.storeListData.filter((rec) => {
                            return (rec.storeId !== id);
                        })
                    });
            });
        }
    }


    FuncEdit(id) {
        this.props.history.push("/store/edit/" + id);
    }


    renderStoreTable(storeListData) {
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
                {storeListData.map(item =>
                    <tr key={item.storeId}>
                        <td >{item.storeName}</td>
                        <td >{item.storeAddress}</td>
                        <td ><button className="action, ui yellow button" onClick={(id) => this.FuncEdit(item.storeId)}><i className="edit icon"></i>Edit</button></td>
                        <td ><button className="action, ui red button" onClick={(id) => this.FuncDelete(item.storeId)}><i className="trash icon"></i>Delete</button></td>

                    </tr>
                )}
            </tbody>
        </table>;
    }
}


export class storeListData {
    storeId = 0;
    storeName = "";
    storeAddress = "";
}