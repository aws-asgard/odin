import { Construct } from "@aws-cdk/core";
import { NestedStack, NestedStackProps } from "@aws-cdk/aws-cloudformation";

export interface AsgardianProps extends NestedStackProps {
  name: string;
}

export class Asgardian extends NestedStack {
  constructor(scope: Construct, id: string, props: AsgardianProps) {
    super(scope, id, props);
  }
}
