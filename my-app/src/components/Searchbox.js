import React from "react";

const Searchbox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue br4"
            type="search" 
            placeholder="Search here..."
            onChange={searchChange} 
        />
        </div>
    );
}

export default Searchbox;