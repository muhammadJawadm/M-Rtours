import Image from 'next/image';
import React from 'react';

const TourCard = () => {
    return (
        <div className="tour-wrapper tour-field-area " style={{marginRight: '30px'}}>
            {/* Departure City */}
            <div className="tour-item style-5 " >
                <div className="icon">
                    <Image src="/assets/img/icon/40.svg" alt="departure" width={44} height={30} />
                </div>
                <div className="content">
                    <h5>Departure Airport</h5>
                    <div className="form">
                        <select className="single-select ">
                            <option>London</option>
                            <option>Manchester</option>
                            <option>Birmingham</option>
                            <option>Glasgow</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Arrival City */}
            <div className="tour-item">
                <div className="icon">
                    <Image src="/assets/img/icon/41.svg" alt="arrival" width={39} height={30} />
                </div>
                <div className="content">
                    <h5>Package Type</h5>
                    <div className="form">
                        <select className="single-select w-100">
                            <option>Umrah </option>
                            <option>Ramadan Umrah 2025 </option>
                            <option>December Umrah </option>
                            <option>Family Umrah packages UK </option>    
                            <option>Hajj packages 2025 UK</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Dates */}
            <div className="tour-item">
                <div className="icon">
                    <Image src="/assets/img/icon/42.svg" alt="dates" width={30} height={30} />
                </div>
                <div className="content">
                    <h5>Travel Month</h5>
                    <div className="form-clt">
                        <input type="date" id="date1" name="date1" />
                    </div>
                </div>
            </div>

            {/* Passengers */}
            <div className="tour-item">
                <div className="icon">
                    <Image src="/assets/img/icon/43.svg" alt="passenger" width={37} height={30} />
                </div>
                <div className="content">
                    <h5>Pilgrims</h5>
                    <div className="form">
                        <select className="single-select w-100">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="theme-btn">
                    Search Packages <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    );
};

export default TourCard;
