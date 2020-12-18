import React from 'react'
import './HighlightPanel.css'
import {FaComments,FaPaintBrush,FaCubes,FaChartLine,FaBullhorn,FaTasks} from 'react-icons/fa'

const HighlightPanel = () => {
    return (
        <>
            <div className="panel__container">
                <div className="panel__header">
                    <div className="panel__text">
                        <h1>How Can I Help You?</h1>
                        <p>Our work then targeted, best practices outcomes social innovation synergy.</p>
                        <p>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
                    </div>
                </div>

                <div className="panel__content">
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Consult</h1> <FaComments className="icons" size={30}/>
                        </div>   
                        <p>Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.</p>
                    </div>
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Design</h1> <FaPaintBrush className="icons" size={30}/>
                        </div>
                        <p>Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.</p>
                    </div>
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Develop</h1> <FaCubes className="icons" size={30}/>
                        </div>
                        <p>Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.</p>
                    </div>
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Marketing</h1> <FaBullhorn className="icons" size={30}/>
                        </div>
                        <p>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.</p>
                    </div>
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Manage</h1> <FaTasks className="icons" size={28}/>
                        </div>
                        <p>Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.</p>
                    </div>
                    <div className="panel__content-wrap">
                        <div className="wrap-icon">
                            <h1>Evolve</h1> <FaChartLine className="icons" size={28}/>
                        </div>
                        <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightPanel
