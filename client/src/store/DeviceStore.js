import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфони' },
            { id: 3, name: 'Ноутбуки' },
            { id: 4, name: 'Телевізори' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Lenovo' },
            { id: 4, name: 'Asus' },
        ]
        this._devices = [            
            { id: 1, name: 'Samsung 12', price: 25000, rating: 5, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' },
            { id: 2, name: 'Samsung 10', price: 25000, rating: 6, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' },
            { id: 3, name: 'Samsung 11', price: 25000, rating: 7, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' },
            { id: 4, name: 'Samsung 13', price: 25000, rating: 8, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' },
            { id: 5, name: 'Samsung 14', price: 25000, rating: 9, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
    
    get selectedType() {
        return this._selectedType
    }

        get selectedBrand() {
        return this._selectedBrand
    }
}