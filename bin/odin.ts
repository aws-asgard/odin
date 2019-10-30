#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { OdinStack } from '../lib/odin-stack';

const app = new cdk.App();
new OdinStack(app, 'OdinStack');
