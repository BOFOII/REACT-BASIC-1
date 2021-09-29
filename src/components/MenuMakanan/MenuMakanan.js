import React from "react"

var menuMakanan = (props) => {
    if(props.stock !== 0) {
        return (
            <div style={{ border: "1px solid", width: 300, margin: "auto" }}>
                <p>Nama Menu : { props.namaMenu }</p>
                <p>Harga : Rp { props.harga }</p>
            </div>
        );
    } else {
        return null;
    }
}

export default menuMakanan;