export function ImageListWithCounter({ id, setCountObj, countObj }) {
    function handleClick() {
      const updatedCountObj = countObj.map((user) => {
        if (user.id === id) {
          return { ...user, count: user.count + 1 }; 
        }
        return user; 
      });
  
      setCountObj(updatedCountObj);
    }

    const user = countObj.find((user) => user.id === id);
  
    return (
      <div className="col-3 text-center">
        <h1>{id}</h1>
        <h1>{user?.count || 0}</h1> 
        <button className="btn btn-primary" onClick={handleClick}>Click</button>
      </div>
    );
  }
  