import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './cars.css';

const Cars = () => {


    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState('electric');
    const [price, setPrice] = useState('');
    const [mileage, setMileage] = useState('');
    const [color, setColor] = useState('black');
    const [otherColor, setOtherColor] = useState('');
    const [carData, setCarData] = useState(null);
    const [carImage, setCarImage] = useState(null);
    const [discountInput, setDiscountInput] = useState('');
    const [formErrors, setFormErrors] = useState({
        brand: '',
        model: '',
        price: '',
        mileage: '',
        otherColor: '',
    });
    const engineType = ['electric', 'diesel', 'petrol', 'hybrid'];
    const colorOptions = [
        { value: 'black', label: 'Black' },
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'silver', label: 'Silver' },
        { value: 'white', label: 'White' },
        { value: 'special blue', label: 'Special Blue' },
        { value: 'other', label: 'Other' },];

    const handleBrandChange = (event) => {setBrand(event.target.value);};

    const handleModelChange = (event) => {setModel(event.target.value);};

    const handleEngineChange = (event) => {setEngine(event.target.value);};

    const handlePriceChange = (event) => {setPrice(event.target.value);};

    const handleMileageChange = (event) => {setMileage(event.target.value);};

    const handleColorChange = (event) => {setColor(event.target.value);};

    const handleOtherColorChange = (event) => {setOtherColor(event.target.value);};

    const handleCarImageChange = (event) => {setCarImage(event.target.files[0]);};

    const handleDiscountChange = (event) => {
        setDiscountInput(event.target.value);
    };

    const getAdditionalServicesPrice = (engine, color) => {
        let additionalPrice = 0;

        if (engine === 'electric') {
            additionalPrice += 10000;
        } else if (engine === 'hybrid') {
            additionalPrice += 7500;
        } else if (engine === 'diesel') {
            additionalPrice += 5000;
        }

        if (color === 'special blue') {
            additionalPrice += 2000;
        }

        return additionalPrice;
    };

    const calculateMileagePriceReduction = (basePrice, mileage) => {
        const parsedMileage = parseInt(mileage, 10);

        if (parsedMileage > 0 && parsedMileage <= 20000) {
            return basePrice * 0.1;
        } else if (parsedMileage > 20000 && parsedMileage <= 50000) {
            return basePrice * 0.15;
        } else if (parsedMileage > 50000 && parsedMileage <= 100000) {
            return basePrice * 0.2;
        } else if (parsedMileage > 100000 && parsedMileage <= 400000) {
            return basePrice * 0.3;
        } else if (parsedMileage > 400000) {
            return basePrice * 0.5;
        } else {
            return 0;
        }
    };
    const calculateDiscountPriceReduction = (basePrice, discount) => {
        const parsedDiscount = parseInt(discount, 10);
        const discountAmount = parsedDiscount || 0;
        return Math.min(basePrice, discountAmount);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const basePrice = parseInt(price, 10);
        const additionalServicesPrice = getAdditionalServicesPrice(engine, color);
        const parsedMileage = parseInt(mileage, 10);
        const mileagePriceReduction = calculateMileagePriceReduction(parsedMileage, basePrice);
        const discount = parseInt(discountInput, 10) || 0;
        const discountPriceReduction = calculateDiscountPriceReduction(discount, basePrice);
        const totalPriceReduction = mileagePriceReduction + discountPriceReduction;
        const finalPrice = basePrice + additionalServicesPrice - totalPriceReduction;
        const VAT_PERCENTAGE = 21;
        const VAT_FACTOR = VAT_PERCENTAGE / 100;
        const vat = (finalPrice * VAT_FACTOR).toFixed(2);
        const finalPriceWithVat = parseFloat(finalPrice) + parseFloat(vat);

        const car = {
            brand,
            model,
            engine,
            price,
            finalPrice,
            mileage,
            color: color === 'other' ? otherColor : color,
            discount,
            additionalServicesPrice,
            mileagePriceReduction,
            discountPriceReduction,
            totalPriceReduction,
            vat,
            finalPriceWithVat,
        };



        setCarData(car);
        setBrand('');
        setModel('');
        setEngine('electric');
        setPrice('');
        setMileage('');
        setColor('black');
        setOtherColor('');
        setCarImage(null);
        setDiscountInput('');
        setFormErrors({});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand:</label>
                <input
                    type="text"
                    id="brand"
                    value={brand}
                    onChange={handleBrandChange}
                    className={formErrors.brand ? 'error' : ''}
                />
                {formErrors.brand && <div className="error-message">{formErrors.brand}</div>}


                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    value={model}
                    onChange={handleModelChange}
                    className={formErrors.model ? 'error' : ''}
                />
                {formErrors.model && <div className="error-message">{formErrors.model}</div>}
                <label htmlFor="engine">Engine type:</label>
                <select id="engine" value={engine} onChange
                    ={handleEngineChange}>
                    {engineType.map(type => <option value={type} key={type}>{type}</option>)}
                </select>
                <label htmlFor="price">Base price:</label>
                <input
                    step={100}
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    className={formErrors.price ? 'error' : ''}
                />
                {formErrors.price && <div className="error-message">{formErrors.price}</div>}
                <label htmlFor="mileage">Mileage:</label>
                <input
                    step={100}
                    type="number"
                    id="mileage"
                    value={mileage}
                    onChange={handleMileageChange}
                    className={formErrors.mileage ? 'error' : ''}
                />
                {formErrors.mileage && <div className="error-message">{formErrors.mileage}</div>}
                <label htmlFor="color">Color:</label>
                <select id="color" value={color} onChange={handleColorChange}>
                    {colorOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {color === 'other' && (
                    <div>
                        <label htmlFor="otherColor">Other color:</label>
                        <input
                            type="text"
                            id="otherColor"
                            value={otherColor}
                            onChange={handleOtherColorChange}
                            className={formErrors.otherColor ? 'error' : ''}
                        />
                        {formErrors.otherColor && <div className="error-message">{formErrors.otherColor}</div>}
                    </div>
                )}

                <label htmlFor="carImage">Car Image:</label>
                <input
                    type="url"
                    id="carImage"
                    placeholder='Enter an image url'
                    value={carImage || ''}
                    onChange={handleCarImageChange}
                    className={formErrors.carImage ? 'error' : ''}
                />
                {formErrors.carImage && <div className="error-message">{formErrors.carImage}</div>}

                <label htmlFor="discount">Discount:</label>
                <input
                    type="number"
                    id="discount"
                    value={discountInput}
                    onChange={handleDiscountChange}
                    className={formErrors.discount ? 'error' : ''}
                />
                {formErrors.discount && <div className="error-message">{formErrors.discount}</div>}

                <button className="form-button" type="submit">Submit</button>
                <Link to="/">Main</Link>


            </form>
            {carData && (
                <div className="car-data">
                    <h2>Submitted Car Data:</h2>
                    <p>1. Base price: {carData.price}</p>
                    <h3>2. Additional Services:</h3>
                    <ul>
                        <li>Engine Type: {carData.engine}</li>
                        <li>Color: {carData.color}</li>
                        <li>Total Price for Additional Services: {carData.additionalServicesPrice}</li>
                    </ul>
                    <h3>3. Price Reduction:</h3>
                    <ul>
                        <li>Price Reduction due to Mileage: {carData.mileagePriceReduction}</li>
                        <li>Price Reduction due to Discount: {carData.discountPriceReduction}</li>
                        <li>Total Price Reduction: {carData.totalPriceReduction}</li>
                    </ul>
                    <p>4. Final Price: {carData.finalPrice}</p>
                    <p>5. VAT: {carData.vat}</p>
                    <p>6. Final Price with VAT: {carData.finalPriceWithVat}</p>
                </div>
            )}

        </div>
    );
};


export default Cars;



// const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!brand || !model || !price || !mileage) {
//         setFormErrors({
//             brand: !brand ? 'Please enter brand' : '',
//             model: !model ? 'Please enter model' : '',
//             price: !price ? 'Please enter price' : '',
//             mileage: !mileage ? 'Please enter mileage' : '',
//             otherColor: !otherColor && color === 'other' ? 'Please enter color' : '',
//             carImage: !carImage ? 'Please enter image url' : '',
//         });
//         return;
//     }