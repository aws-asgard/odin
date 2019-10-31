import { Stack, StackProps, Construct } from "@aws-cdk/core";

export interface OdinProps extends StackProps {}

export class Odin extends Stack {
  constructor(scope: Construct, id: string, props?: OdinProps) {
    super(scope, id, props);
  }

  AddRelms(relms) {}
  AddAsgardians(relms) {}
}
