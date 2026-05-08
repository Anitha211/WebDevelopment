import React from "react";
import { useState } from "react";
import "./Tabs.css"

function Tabs() {

    let tabsData = [
        {
            id:1,
            title: "Home",
            content: "Welcome to Home Page"
        },

        {
            id:2,
            title: "About",
            content: "This is about Page"

        },

        {
            id:3,
            title: "Contact",
            content: "Contact us at support@gmail.com"
        }
    ];

    let [activeTab, setActiveTab] = useState(0);

    let handleTabClick = (i) => {
        setActiveTab(i);
    }

    return(
        <div className="tabs-container">
            <h2>Dynamic Tab Components</h2>

            <div className="tabs">
                {tabsData.map((tab, i) => (
                    <button key={tab.id}
                    className= {activeTab === i ? "tab active" : "tab"}
                    onClick={() => handleTabClick(i)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>


            <div className="tab-content">
                <h3>{tabsData[activeTab].title}</h3>
                <p>{tabsData[activeTab].content}</p>
            </div>

        </div>
    )
}

export default Tabs;