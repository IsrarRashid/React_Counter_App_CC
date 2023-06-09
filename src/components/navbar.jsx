import React from 'react';
// stateless functional component
const Navbar = ({totalCounters})=>{    
    console.log("Navbar - Rendered");
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<a className="navbar-brand" href="#">Navbar <span className="badge rounded-pill bg-secondary">
    {totalCounters}</span></a>
</div>
</nav>
    );
};
 
export default Navbar;