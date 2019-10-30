import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Odin = require('../lib/odin-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Odin.OdinStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});