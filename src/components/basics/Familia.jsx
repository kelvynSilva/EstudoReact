import React from "react";

import FamiliaMenbro from "./FamiliaMenbro";
export default props => {
    return (
        <div>
            <FamiliaMenbro name="kelvyn" lastName={props.lastName} />
            <FamiliaMenbro name="monique" {...props} />
            <FamiliaMenbro name="Katia" lastName="regina" />
        </div>
    )
}