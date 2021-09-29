import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan.js';
import MenuMinuman from './components/MenuMinuman/MenuMinuman.js';

class App extends Component {

  // state
  constructor() {
    super()
    this.state = {
      namaResto: 'ZET RESTO',
      namaPembeli: 'zalpha',
      keterangan: '',
      pembayaran: '',
      menuMakanan: [
        { id: 1, nama: 'Ayam bakar', harga: 25000, stock: 10 },
        { id: 2, nama: 'Sate', harga: 25000, stock: 0 },
      ],
      menuMinuman: [
        { id: 1, nama: 'Jus teh', harga: 10000, stock: 10 },
        { id: 2, nama: 'Jus Melon', harga: 10000, stock: 10 },
        { id: 3, nama: 'Jus mangga', harga: 10000, stock: 10 },
        { id: 4, nama: 'Jus alpukat', harga: 10000, stock: 0 },
      ]
    };
  }

  // 
  gantiNamaHandler = (nama_resto) => {
    this.setState({ namaResto: nama_resto });
  }

  //
  gantiNamapembeli = (event) => {
    this.setState({ namaPembeli: event.target.value });
  }

  //
  keteranganHandler = (event) => {
    this.setState({ keterangan: event.target.value });
  }

  //
  pembayaranHandler = (event) => {
    this.setState({ pembayaran: event.target.value });
  }

  // render
  render() {
    return (
      <div className="App">
        <h1>CAFFE { this.state.namaResto }</h1>
        <button className="btn btn-primary" onClick={ () => this.gantiNamaHandler("ZET Resto") }>Ganti nama</button>
        <div className="row mt-5" style={{ marginTop: '10px' }} >
          <div className="col-md-4 offset-md-4" >
            <form>
              <div className="form-group">
                <label>Nama pembeli: </label>
                <input className="form-control" name="namaPembeli" onChange={ this.gantiNamapembeli } value={ this.state.namaPembeli }/>
              </div>
              <div className="form-group">
                <label>Keterangan: </label>
                <textarea className="form-control" name="keterangan" onChange={ this.keteranganHandler } value={ this.state.keterangan }></textarea>
                <small className="mt-1">{ this.state.keterangan }</small>
              </div>
              <div className="form-group">
                <label>Jenis pembayaran</label>
                <select className="form-control" value={ this.state.pembayaran } onChange={ this.pembayaranHandler }>
                  <option value="cash">Cash</option>
                  <option value="ngutang">Ngutang</option>
                  <option value="voucher" >Voucher</option>
                </select>
                <small className="mt-1">{ this.state.pembayaran }</small>
              </div>
            </form>
          </div>
        </div>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={ this.state.menuMakanan[0].nama } harga={ this.state.menuMakanan[0].harga } stock={ this.state.menuMakanan[0].stock }></MenuMakanan>
        <MenuMakanan namaMenu={ this.state.menuMakanan[1].nama } harga={ this.state.menuMakanan[1].harga } stock={ this.state.menuMakanan[1].stock }></MenuMakanan>
        <h2>Menu Minuman</h2>
        { this.state.menuMinuman.map(menu => 
          <MenuMinuman key={ menu.id } namaMenu={ menu.nama } harga={ menu.harga } stock={ menu.stock }></MenuMinuman>
          )}
      </div>
    );
  }
}

export default App;
