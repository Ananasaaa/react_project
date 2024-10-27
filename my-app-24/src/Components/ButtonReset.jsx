export function ButtonReset({ setCountObj }) {
    const handleReset = () => {
        const resetCounts = [
            { id: "user1", count: 0 },
            { id: "user2", count: 0 },
            { id: "user3", count: 0 },
            { id: "user4", count: 0 }
        ];
        setCountObj(resetCounts);
    };

    return (
        <button className="btn btn-danger mt-3" onClick={handleReset}>
           Reset
        </button>
    );
}