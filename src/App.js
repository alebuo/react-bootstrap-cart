import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from "./components/Product";
import Cart from "./components/Cart";
import {Container} from "react-bootstrap";
import img1 from "./images/memoram1.jpg";
import img2 from "./images/Cooler.jpg";
import img3 from "./images/Graphiccard.jpg";
import img4 from "./images/IntelCorei7-13700K.jpg";
import img5 from "./images/SoundBlasterXG.jpg";
import img6 from "./images/ssdgamer.jpg";
import img7 from "./images/cpu1.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [cart, addProduct] = useState([]);
    const [products, addProducts] = useState([
        {
            id: 1,
            name: 'Intel Core i7-13700K',
            description: 'processor or processing unit is an electrical component (digital circuit) that performs operations on an external data',
            img: img4,
            price: 110
        },
        {
            id: 2,
            name: 'Cooler Gamer',
            description: 'If you plan on overclocking your build, you\'ll need grab yourself a substantial CPU cooler',
            img: img2,
            price: 120
        },
        {
            id: 3,
            name: 'EAM XTREEM ARGB 16GB DDR4-3600 C14',
            description: '16 GB Memory for gamers and multimedia creators. How you use your computer influences how much RAM you need.',
            img: img1,
            price: 130
        },
        {
            id: 4,
            name: 'Sound BlasterX G6 Hi-Res.',
            description: 'The Sound BlasterX G6 is the first and only gaming DAC and USB sound card to feature a bi-amplified design',
            img: img5,
            price: 140
        },
        {
            id: 5,
            name: 'Graphic card',
            description: 'to increase the throughput of data and the number of concurrent...',
            img: img3,
            price: 150
        },
        {
            id: 6,
            name: 'SSD Western Digital 1 TB',
            description: 'faster load times for games, applications, and movies. Because of the technology they use, SSDs are lighter and better able to withstand movement and droppage. ',
            img: img6,
            price: 160
        },
        {
            id: 7,
            name: 'Gamer Cabinet',
            description: 'The gaming cabinet should be spacious for the components and should have enough space for future upgrades as well',
            img: img7,
            price: 80
        }
    ]);
    return (
        <Container>
            <Header/>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="text-center">Product List</h1>
                    {
                        products.map((product, index) => (
                            <Product
                                product={product}
                                products={products}
                                key={product.id}
                                cart={cart}
                                addToCart={addProduct}
                            />
                        ))
                    }
                </div>
                <div className="col-md-4">
                    <Cart cart={cart} addToCart={addProduct} key={cart.id}/>
                </div>
            </div>
            <Footer/>
        </Container>
    );
}

export default App;