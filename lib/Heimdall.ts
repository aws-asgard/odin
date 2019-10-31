import { Stack, StackProps, Construct } from "@aws-cdk/core";

export interface HeimdallProps extends StackProps {}

export class Heimdall extends Stack {
  constructor(scope: Construct, id: string, props?: HeimdallProps) {
    super(scope, id, props);
  }
}
