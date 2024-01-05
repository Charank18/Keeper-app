import React from "react";


function footer(){
    const currentyear=new Date().getFullYear();

    return(<footer> <p>
        Copyright ⓒ {currentyear}
    </p>
    </footer>);
}

export default footer;