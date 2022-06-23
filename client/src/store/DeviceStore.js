import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            { id: 1, name: 'Iphone 9', price: 20000, rating: 5, img: '../img/img.jpg' },
            { id: 2, name: 'Iphone 10', price: 20000, rating: 5, img: '../img/img.jpg' },
            { id: 3, name: 'Iphone 11', price: 20000, rating: 5, img: '../img/img.jpg' },
            { id: 4, name: 'Iphone 12', price: 20000, rating: 5, img: '../img/img.jpg' }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }    

    setBrands(brands) {
        this._brands = brands
    }
    
    setDevises(devices) {
        this._devices = devices
    }

    get Types() {
        return this._types
    }

    get Brands() {
        return this._brands
    }

    get Devices() {
        return this._devices
    }
}

