import React from 'react';
import { storeListData } from './StoreData';


export class CreateAndDeleteStore extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = { title: "", loading: true, storeList: new storeListData() };
       
        var storeId = this.props.match.params["storeId"];
       
        if (storeId > 0) {
            fetch('api/Store/Details/' + storeId)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edit", loading: false, storeList: data });
                });
        }
        else {
            this.state = { title: "Create A New Store", loading: false, storeList: new storeListData() };
        }
        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = this.FuncCancel.bind(this);
    }
  
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            
            <hr />
            {contents}
        </div>;
    }
   
    FuncSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
       
        if (this.state.storeList.storeId) {
            fetch('api/Store/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/store/index");

                });
        }
        else {
            fetch('api/Store/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/store/index");
                });
        }
    }
    FuncCancel(e) {
        e.preventDefault();
        this.props.history.push("/store/index");
    }
   
    renderCreateForm() {
        return (
            <form onSubmit={this.FuncSave} >
                <div className="form-group row" >
                    <input type="hidden" name="StoreId" value={this.state.storeList.storeId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="storeName" placeholder="Store Name" defaultValue={this.state.storeList.storeName} required />
                    </div>
                </div >

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="address" >Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="storeAddress" placeholder="Store Address" defaultValue={this.state.storeList.storeAddress} required />
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