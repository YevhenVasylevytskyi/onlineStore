import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../index'
import {Card, Row} from 'react-bootstrap'

const BrandBar = observer(() => { 
    const { device } = useContext(Context)

    return (
        <div className="d-flex col">
            {device.brands.map(brand =>
                
                    <Card
                    key={brand.id}
                    className='p-3 m-1 w-content'
                    
                >
                    {brand.name}
                </Card>
                
            )}
        </div>
    )
})

export default BrandBar;