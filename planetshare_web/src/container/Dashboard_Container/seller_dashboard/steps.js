import React from 'react';
import { Step,Container } from 'semantic-ui-react';

const StepExampleOrdered = () => {
  return(
 <Container style={{marginTop:'100px'}}> <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Description>Shipping</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Step.Content>
        <Step.Description>Billing</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Description>Confirm Order</Step.Description>
      </Step.Content>
    </Step>
    <Step >
      <Step.Content>
        <Step.Description>Billing</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group></Container>
)
}
export default StepExampleOrdered;
