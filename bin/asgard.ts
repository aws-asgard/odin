#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { Odin, Relm, Asgardian, Heimdall } from "../lib";

const app = new cdk.App();

const odin = new Odin(app, "OdinStack");

const heimdall = new Heimdall(app, "HeimdallStack");

const relms = [
  new Relm(app, "relm-dev", {
    name: "dev"
  }),
  new Relm(app, "relm-tst", {
    name: "tst"
  }),
  new Relm(app, "relm-stg", {
    name: "stg"
  }),
  new Relm(app, "relm-prd", {
    name: "prd"
  })
];

const asgardians = [
  new Asgardian(app, "asgardian-caravan", {
    name: "caravan"
  }),
  new Asgardian(app, "asgardian-boat", {
    name: "boat"
  }),
  new Asgardian(app, "asgardian-ctp", {
    name: "ctp"
  })
];

odin.AddRelms(relms);
odin.AddAsgardians(asgardians);
