import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan.js';
import MenuMinuman from './components/MenuMinuman/MenuMinuman.js'

class App extends Component {

  // state
  constructor() {
    super()
    this.state = {
      namaResto: 'ZET RESTO',
      pelanggan: {
        nama: 'riski',
      },
      menuMakanan: [
        {
          nama: 'Ayam bakar',
          harga: 25000,
          stock: 10,
        },
        {
          nama: 'Sate',
          harga: 25000,
          stock: 0,
        },
      ]
    };
  }

  // 
  gantiNamaHandler = (nama_resto) => {
    this.setState({ namaResto: nama_resto });
  }

  // render
  render() {
    return (
      <div className="App">
        <h1>CAFFE { this.state.namaResto }</h1>
        <button className="btn btn-primary" onClick={ () => this.gantiNamaHandler("ZET Resto") }>Ganti nama</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={ this.state.menuMakanan[0].nama } harga={ this.state.menuMakanan[0].harga } stock={ this.state.menuMakanan[0].stock }></MenuMakanan>
        <MenuMakanan namaMenu={ this.state.menuMakanan[1].nama } harga={ this.state.menuMakanan[1].harga } stock={ this.state.menuMakanan[1].stock }></MenuMakanan>
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu="Jus Teh" harga={ 5000 }></MenuMinuman>
      </div>
    );
  }
}

export default App;
