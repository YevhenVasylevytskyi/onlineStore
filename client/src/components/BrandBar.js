import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../index'
import {Card, Row} from 'react-bootstrap'

const BrandBar = observer(() => { 
    const { device } = useContext(Context)

    return (
        <Row>
            <div className="d-flex col flex-wrap">
                {device.brands.map(brand =>
                    
                    <Card
                        style={{cursor: 'pointer'}}
                        key={brand.id}
                        className='p-3 m-1 w-content'
                        onClick={() => {device.setSelectedBrand(brand)}}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                    
                )}
            </div>
        </Row>
        
    )
})

export default BrandBar;