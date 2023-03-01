import { useState } from 'react';
import './cars.css'

const Cars = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState('electric');
    const [price, setPrice] = useState('');
    const [mileage, setMileage] = useState('');
    const [color, setColor] = useState('black');
    const [otherColor, setOtherColor] = useState('');
    const [carData, setCarData] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const engineType = ['electric', 'diesel', 'petrol', 'hybrid'];
    const colorOptions = [
        { value: 'black', label: 'Black' },
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'silver', label: 'Silver' },
        { value: 'white', label: 'White' },
        { value: 'special blue', label: 'Special Blue' },
        { value: 'other', label: 'Other' },
    ];




    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };
    const handleModelChange = (event) => {
        setModel(event.target.value);
    };
    const handleEngineChange = (event) => {
        setEngine(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleMileageChange = (event) => {
        setMileage(event.target.value);
    };
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handleOtherColorChange = (event) => {
        setOtherColor(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};
        if (!brand) {
            errors.brand = 'Brand is required';
        }
        if (!model) {
            errors.model = 'Model is required';
        }
        if (!price) {
            errors.price = 'Price is required';
        }
        if (!mileage) {
            errors.mileage = 'Mileage is required';
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        const car = {
            brand,
            model,
            engine,
            price,
            mileage,
            color: color === 'other' ? otherColor : color,
        };
        setCarData(car);
        setBrand('');
        setModel('');
        setEngine('electric');
        setPrice('');
        setMileage('');
        setColor('black');
        setOtherColor('');
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
                    className={formErrors.brand ? 'error' : brand ? '' : 'input-error'}
                />
                {formErrors.brand && <div className="error-message">{formErrors.brand}</div>}

                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    value={model}
                    onChange={handleModelChange}
                    className={formErrors.model ? 'error' : model ? '' : 'input-error'}
                />
                {formErrors.model && <div className="error-message">{formErrors.model}</div>}
                <label htmlFor="engine">Engine type:</label>
                <select id="engine" value={engine} onChange={handleEngineChange}>
                    {engineType.map(type => <option value={type} key={type}>{type}</option>)}
                </select>
                <label htmlFor="price">Base price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    className={formErrors.price ? 'error' : price ? '' : 'input-error'}
                />
                {formErrors.price && <div className="error-message">{formErrors.price}</div>}
                <label htmlFor="mileage">Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    value={mileage}
                    onChange={handleMileageChange}
                    className={formErrors.mileage ? 'error' : mileage ? '' : 'input-error'}
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
                        <input type="text" id="otherColor" value={otherColor} onChange={handleOtherColorChange} />
                        {otherColor === '' && (
                            <div className="error-message">Please enter a color</div>
                        )}
                    </div>
                )}

                <button className="form-button" type="submit">Submit</button>
            </form>
            {carData && (
                <div className="car-data">
                    <h2>Submitted Car Data:</h2>
                    <p>Brand: {carData.brand}</p>
                    <p>Model: {carData.model}</p>
                    <p>Engine Type: {carData.engine}</p>
                    <p>Base Price: {carData.price}</p>
                    <p>Mileage: {carData.mileage}</p>
                    <p>Color: {carData.color}</p>
                </div>
            )}
        </div>
    );
};

export default Cars;


