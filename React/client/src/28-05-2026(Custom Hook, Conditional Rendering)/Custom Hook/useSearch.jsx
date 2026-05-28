import React, { useState } from "react";

function useSearch() {

    let [search, setSearch] = useState("");

    let filterItems = (data) => {
        return data.filter((item) => 
            item.toLowerCase().includes(search.toLowerCase())   
        );
    };

    return  {search, setSearch, filterItems}
}

export default useSearch;




