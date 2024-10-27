import React, { useState } from 'react';
export function ButtonResult({countObj}) {
    const [showResult, setShowResult] = useState(false);

    const getMostClickedUser = () => {
        return countObj.reduce((prev, current) => {
            return (prev.count > current.count) ? prev : current;
        });
    };

    const mostClickedUser = getMostClickedUser();
    const handleClick = () => {
        setShowResult(true);
    };

    return (
        <div>
            <button   className="btn btn-success btn-lg" onClick={handleClick}>Show result</button>
            {showResult && (
                <div>
                    <h2>Winner</h2>
                    {mostClickedUser && (
                        <div>
                            <h3>{mostClickedUser.id}</h3>
                            <h4>Clicks: {mostClickedUser.count}</h4>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}