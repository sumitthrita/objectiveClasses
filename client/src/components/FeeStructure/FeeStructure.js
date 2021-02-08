import React from 'react';
import Header from '../Header/Header';
import dropper from '../assets/dropper.jpg';
import foundationClass from '../assets/foundationClass.jpg';
import foundationOnline from '../assets/foundationOnline.jpg';
import mission from '../assets/mission.jpg';
import preFoundation from '../assets/preFoundation.jpg';
import './FeeStructure.css';


const FeeStructure = () => {
    return (
        <div>
            <Header />
            <div className="feeStructureMain" >
                <div className="feeImageSection" >
                    <img src={dropper} className="feeImage" alt="Dropper fee structure" />
                </div>
                <div className="feeImageSection" >
                    <img src={foundationClass} className="feeImage" alt="Foundation Classroom fee structure" />
                </div>
                <div className="feeImageSection" >
                    <img src={mission} className="feeImage" alt="Mission fee structure" />
                </div>
                <div className="feeImageSection" >
                    <img src={foundationOnline} className="feeImage" alt="Foundation Online fee structure" />
                </div>
                <div className="feeImageSection" >
                    <img src={preFoundation} className="feeImage" alt="Pre-Foundation fee structure" />
                </div>
                <div className="feeSpace" ></div>
            </div>
        </div>
    );
};

export default FeeStructure;