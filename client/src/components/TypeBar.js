import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import {ListGroup} from "react-bootstrap"

const TypeBar = observer(() => {
  const {device} = useContext(Context)
    console.log(device)
    return (
        <ListGroup>
            {device._types.map(type => 
                <ListGroup.Item key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar;
