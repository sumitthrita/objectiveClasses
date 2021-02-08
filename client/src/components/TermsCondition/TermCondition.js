import React from 'react';
import Header from '../Header/Header';
import "./TermCondition.css";

const TermCondition = () => {
    return (
        <div>
        <Header />
        <div className="termConditionMain" >
            <h2 className="termConditionTitle" >Fee Refund Policy</h2>
            <ol>
                <li>
                    <p>  No fees will be refunded if terminated from the institute.</p>
                </li>
                <li>
                    <p>  Fees will be refunded (excluding Admission fee) that is paid to the institute.</p>
                </li>
                <li>
                    <p>  If refund is claimed within 3 days of date of admission: 70% of tuition fee will be refunded.</p>
                </li>
                <li>
                    <p>  If refund is claimed within 7 days of date of admission: 50% of tuition fee will be refunded.</p>
                </li>
                <li>
                    <p>  After 7 days from the date of Admission: No refund can be claimed.</p>
                </li>
            </ol>
        </div>
        </div>
    );
};

export default TermCondition;