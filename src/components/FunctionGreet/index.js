
import React from "react";
import { Badge } from "reactstrap"

function Greet(props) {
  return (
    <div>
      <p>
        Hola {props.firstname} {props.lastname}{" "}
        <Badge color="secondary">functional</Badge>
      </p>
    </div>
  );
}

export default Greet;
