const { getUserId } = require('../utils/utils');
// const Axios = require('axios');
// const https = require('https');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const service = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.service({ id: args.id })
};

const services = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.services()
};

const tenant = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.tenant({ id: args.id })
};

const tenants = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.tenants()
};

const user = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.user({ id: args.id })
};

const users = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.users()
};

const environment = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.environment({ id: args.id })
};

const environments = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.environments()
};

const environmentTenant = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.environmentTenant({ id: args.id })
};

const environmentTenants = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.environmentTenants()
};

const customer = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.customer({ id: args.id })
};

const customers = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.customers()
};

const customerContact = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.customerContact({ id: args.id })
};

const customerContacts = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.customerContacts()
};

const architectureTiers = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureTiers()
};

const architectureTier = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureTier( {id: args.id} )
};

const componentTemplates = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentTemplates()
};

const componentTemplate = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentTemplate( {id: args.id} )
};

const componentInstances = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentInstances()
};

const componentInstance = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentInstance( {id: args.id} )
};

const componentAttributes = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentAttributes()
};

const componentAttributeById = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentAttribute( {id: args.id} )
};

const componentAttributeByParameter = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.componentAttribute( {parameter: args.parameter} )
};

const tenantAttributes = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.tenantAttributes({}, info)
};

const tenantAttributeById = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.tenantAttribute({ id: args.id })
};

const tenantAttributeByParameter = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.tenantAttribute({ parameter: args.parameter })
};

const architectureTypes = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureTypes()
};

const architectureType = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureType( {id: args.id} )
};

const architectureDefinitions = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureDefinitions()
};

const architectureDefinition = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.architectureDefinition({ id: args.id })
};




module.exports = {
  users,
  user,
  tenants,
  tenant,
  services,
  service,
  environments,
  environment,
  environmentTenants,
  environmentTenant,
  customers,
  customer,
  customerContacts,
  customerContact,
  architectureTiers,
  architectureTier,
  componentTemplates,
  componentTemplate,
  componentInstances,
  componentInstance,
  componentAttributes,
  componentAttributeById,
  componentAttributeByParameter,
  tenantAttributes,
  tenantAttributeById,
  tenantAttributeByParameter,
  architectureTypes,
  architectureType,
  architectureDefinitions,
  architectureDefinition
};

