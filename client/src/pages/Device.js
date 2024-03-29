import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const Device = () => {
    const device = { id: 1, name: 'Samsung 12', price: 25000, rating: 5, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black_8_1.jpg' }

    const description = [
        { id: 1, title: 'Оперативна пам\'ять', description: '5 гб' }, 
        { id: 2, title: 'Камера', description: '12 мп' },
        { id: 3, title: 'Процессор', description: 'Intel i7' },
        { id: 4, title: 'Кількість ядер', description: '2' },
        { id: 5, title: 'Аккумулятор', description: '4500' },
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}              
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Від: {device.price} грн.</h3>
                        <Button variant={"outline-dark"}>Додати до кошику</Button>
                    </Card>
                
                </Col>
            </Row>
            <Row className={"d-flex flex-column mt-4"}>
                <h2 className={"mb-4"}>Характеристики</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
     )
}

export default Device;