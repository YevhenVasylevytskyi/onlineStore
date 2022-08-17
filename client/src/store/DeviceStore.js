import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
        ]
        this._device = [
            { id: 2, name: 'Samsung 10', price: 25000, rating: 5, img: '../../server/static/1fa78165-6a41-4161-944a-fda45f848ae5.jpg' },
            { id: 3, name: 'Samsung 10', price: 25000, rating: 5, img: '../../server/static/1fa78165-6a41-4161-944a-fda45f848ae5.jpg' },
            { id: 1, name: 'Samsung 10', price: 25000, rating: 5, img: '../../server/static/1fa78165-6a41-4161-944a-fda45f848ae5.jpg' },
            { id: 4, name: 'Samsung 10', price: 25000, rating: 5, img: '../../server/static/1fa78165-6a41-4161-944a-fda45f848ae5.jpg' },
            { id: 5, name: 'Samsung 10', price: 25000, rating: 5, img: '../../server/static/1fa78165-6a41-4161-944a-fda45f848ae5.jpg' },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(device) {
        this._device = device
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get device() {
        return this._device
    }
}