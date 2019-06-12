import React from 'react'
import { Alert } from 'reactstrap';

export default (props) => 
<Alert color="danger" >
  Page <code>{props.location.pathname}</code> not found!!!!
</Alert>