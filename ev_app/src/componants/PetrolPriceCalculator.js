import React, { useState, useEffect } from 'react';
import './PetrolPriceCalculator.css';

const PetrolPriceCalculator = () => {
    const [usage, setUsage] = useState(100);

    const petrolPricePerKM = 10;
    const evCostPerKM = 6;

    const calculateSavings = (years) => {
        const petrolCost = usage * petrolPricePerKM * 12 * years;
        const evCost = usage * evCostPerKM * 12 * years;
        return petrolCost - evCost;
    };

    useEffect(() => {
        const slider = document.getElementById('usageSlider');
        if (!slider) return;
        const min = slider.min;
        const max = slider.max;
        const val = slider.value;
        const percent = ((val - min) / (max - min)) * 100;
        slider.style.setProperty('--range-progress', `${percent}%`);
    }, [usage]);

    return (
        <div className="calculator-container">
            <div className="cal-cont">
                <div className="slider-savings-row">
                    <div className="text-slider-wrap">
                        <div className="calculator-header">
                            <h2>Petrol Prices? Nah, EV’s Got This.</h2>
                            <p>Your average monthly usage</p>
                        </div>

                        <div className="slider-container">
                            <label id="sliderValue" htmlFor="usageSlider">{usage}</label>
                            <input
                                type="range"
                                id="usageSlider"
                                min="15"
                                max="3000"
                                value={usage}
                                onChange={(e) => setUsage(Number(e.target.value))}
                            />
                            <span className="max-value">3000 KM</span>
                        </div>
                    </div>

                    <div className="inline-savings-box">
                        <h3>Total Savings</h3>
                        <div className="savings-details">
                            <p className="years">
                                3 Years <span id="threeYearSavings">₹{calculateSavings(3).toLocaleString()}</span>
                            </p>
                            <p>
                                5 Years <span id="fiveYearSavings">₹{calculateSavings(5).toLocaleString()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetrolPriceCalculator;
