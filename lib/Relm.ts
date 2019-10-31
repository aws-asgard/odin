import { Construct } from "@aws-cdk/core";
import { NestedStack, NestedStackProps } from "@aws-cdk/aws-cloudformation";

export interface RelmProps extends NestedStackProps {
  name: string;
}

export class Relm extends NestedStack {
  constructor(scope: Construct, id: string, props: RelmProps) {
    super(scope, id, props);
  }
}
