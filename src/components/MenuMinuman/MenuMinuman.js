import React, { Component } from 'react';

class MenuMinuman extends Component {
    render() {
        if(this.props.stock !== 0) {
            return(
                <div style={{ border: "1px solid", width: 300, margin: "auto" }}>
                    <p>Nama Menu : { this.props.namaMenu }</p>
                    <p>Harga : Rp { this.props.harga }</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MenuMinuman;