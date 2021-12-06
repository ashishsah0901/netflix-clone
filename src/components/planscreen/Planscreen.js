import React from "react";
import "./planscreen.css";

const Planscreen = () => {
    return (
        <div className="planscreen">
            <div className="planscreen_plan">
                <div className="planscreen_info">
                    <h5>Basic</h5>
                    <h6>Video quality - Good ₹ 199 (Phone and Tablet)</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="planscreen_plan">
                <div className="planscreen_info">
                    <h5>Basic</h5>
                    <h6>
                        Video quality - Good ₹ 499 (Phone, Tablet, Computer and
                        TV)
                    </h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="planscreen_plan">
                <div className="planscreen_info">
                    <h5>Standard</h5>
                    <h6>
                        Video quality - Better ₹ 649 (Phone, Tablet, Computer
                        and TV)
                    </h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="planscreen_plan">
                <div className="planscreen_info">
                    <h5>Premium</h5>
                    <h6>
                        Video quality - Best ₹ 799 (Phone, Tablet, Computer and
                        TV)
                    </h6>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Planscreen;
