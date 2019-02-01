"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ArchitectureDefinition",
    embedded: false
  },
  {
    name: "ArchitectureTier",
    embedded: false
  },
  {
    name: "ArchitectureType",
    embedded: false
  },
  {
    name: "ComponentAttribute",
    embedded: false
  },
  {
    name: "ComponentInstance",
    embedded: false
  },
  {
    name: "ComponentTemplate",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "CustomerContact",
    embedded: false
  },
  {
    name: "Environment",
    embedded: false
  },
  {
    name: "EnvironmentTenant",
    embedded: false
  },
  {
    name: "ObjectAttributeType",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Service",
    embedded: false
  },
  {
    name: "Tenant",
    embedded: false
  },
  {
    name: "TenantAttribute",
    embedded: false
  },
  {
    name: "TenantRole",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4467/cm`,
  secret: `S3rv1c3Auth0r1ty!123!`
});
exports.prisma = new exports.Prisma();
