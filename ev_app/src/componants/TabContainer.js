import React, { useState } from 'react';
import './TabContainer.css';
const TabContainer = ({ productDetails }) => {

    const [activeTab, setActiveTab] = useState(0);
    let longDescription = productDetails?.longDescription;
    let subscription = productDetails?.subscription;
    const tabs = ["Description", "Specification", "Question & Answer", "Subscription"];
    const specGroups = {
        General: Object.keys(productDetails?.specifications?.general || {}),
        Technical: Object.keys(productDetails?.specifications?.technical || {}),
        Performance: Object.keys(productDetails?.specifications?.performance || {}),
        Features: Object.keys(productDetails?.specifications?.features || {}),
        "Weight and Dimensions": Object.keys(productDetails?.specifications?.weightAndDimensions || {}),
        Electricals: Object.keys(productDetails?.specifications?.electricals || {}),
        Storage: Object.keys(productDetails?.specifications?.storage || {}),
        "Ingress Protection": Object.keys(productDetails?.specifications?.ingressProtection || {}),
        "Chassis and Suspension": Object.keys(productDetails?.specifications?.chassisAndSuspension || {}),
        Misc: Object.keys(productDetails?.specifications?.misc || {}),
        Warranty: Object.keys(productDetails?.specifications?.warranty || {})
    };

    return (
        <div className="tab-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="tab-panel">
                {activeTab === 0 && <p className="description-text">{longDescription}</p>}

                {activeTab === 1 && (
                    <div className="specification-cards">
                        {Object.entries(specGroups).map(([groupTitle, keys]) => {
                            // Get the corresponding section from `specifications`
                            const section = productDetails?.specifications[groupTitle.replace(/\s/g, '').charAt(0).toLowerCase() + groupTitle.replace(/\s/g, '').slice(1)]
                                || productDetails?.specifications[groupTitle.replace(/\s/g, '')]
                                || productDetails?.specifications[groupTitle.toLowerCase()]
                                || productDetails?.specifications[groupTitle];

                            const groupData = keys
                                .filter((key) => section?.[key] && section[key].trim() !== '')
                                .map((key) => ({ key, value: section[key] }));

                            if (groupData.length === 0) return null;

                            return (
                                <div className="spec-card" key={groupTitle}>
                                    <h4>{groupTitle}</h4>
                                    <table>
                                        <tbody>
                                            {groupData.map(({ key, value }) => (
                                                <tr key={key}>
                                                    <td className="spec-key">{key}</td>
                                                    <td className="spec-value">{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </div>

                )}

                {activeTab === 2 && (
                    <div className="qna-card">
                        <h4 className="qna-title">Questions about this product (0)</h4>
                        <input
                            type="search"
                            className="qna-search-input"
                            placeholder="Search Questions & Answers"
                        />
                        <div className="qna-login-box">
                            <span>Don't see the answer you're looking for?</span>
                            <button className="qna-login-btn">Login to post your Question</button>
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="spec-section">
                        {subscription?.plan1 && (
                            <div className="spec-card">
                                <h4>{subscription?.plan1.title}</h4>
                                <table className="table-spec">
                                    <thead>
                                        <tr>
                                            <th>Duration</th>
                                            <th>Monthly Subscription</th>
                                            <th>Refundable Security Deposit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscription?.plan1?.data.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row?.duration}</td>
                                                <td>{row?.subscription}</td>
                                                <td>{row?.deposit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {subscription?.plan2 && (
                            <div className="spec-card">
                                <h4>{subscription?.plan2?.title}</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Duration</th>
                                            <th>Up to 2 yrs</th>
                                            <th>3 to 4 yrs</th>
                                            <th>5 to 6 yrs</th>
                                            <th>Refundable Deposit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscription?.plan2?.data?.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row?.duration}</td>
                                                <td>{row?.upto2}</td>
                                                <td>{row?.y3to4}</td>
                                                <td>{row?.y5to6}</td>
                                                <td>{row?.deposit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabContainer;
