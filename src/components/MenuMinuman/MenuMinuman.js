import React, { Component } from 'react';

class MenuMinuman extends Component {
    render() {
        return(
            <div style={{ border: "1px solid", width: 300, margin: "auto" }}>
                <p>Nama Menu : { this.props.namaMenu }</p>
                <p>Harga : Rp { this.props.harga }</p>
            </div>
        );
    }
}

export default MenuMinuman;