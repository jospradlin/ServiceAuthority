const { getUserId } = require('../utils/utils');
// const Axios = require('axios');
// const https = require('https');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const service = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.service({ id: args.id })
};

const services = async (root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.services()
};

const user = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.user({ id: args.id })
};

const users = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.users()
};


// const users = async ( parent, args, context, info) => {
//   const userId = getUserId(context)
//   return context.db.query.users({}, info)
// };

// const user = async ( parent, args, context, info ) => {
//   const userId = getUserId(context)
//   return context.db.query.user({ where: {
//     id: args.id
//   }}, info)
// };

// const services = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.services({}, info)
// };

// const service = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.service({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const environments = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.environments({}, info)
// };

// const environment = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.environment({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const environmentTenants = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.environmentTenants({}, info)
// };

// const environmentTenant = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.environmentTenant({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const customers = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.customers({}, info)
// };

// const customer = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.customer({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const customerContacts = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.customerContacts({}, info)
// };

// const customerContact = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.customerContact({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const architectureTiers = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureTiers({}, info)
// };

// const architectureTier = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureTier({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const componentTemplates = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentTemplates({}, info)
// };

// const componentTemplate = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentTemplate({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const componentInstances = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentInstances({}, info)
// };

// const componentInstance = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentInstance({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const componentAttributes = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentAttributes({}, info)
// };

// const componentAttributeById = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentAttribute({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const componentAttributeByParameter = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.componentAttribute({
//     where: {
//       parameter: args.parameter
//     }
//   }, info)
// };

// const tenantAttributes = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.tenantAttributes({}, info)
// };

// const tenantAttributeById = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.tenantAttribute({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const tenantAttributeByParameter = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.tenantAttribute({
//     where: {
//       parameter: args.parameter
//     }
//   }, info)
// };

// const architectureTypes = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureTypes({}, info)
// };

// const architectureType = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureType({
//     where: {
//       id: args.id
//     }
//   }, info)
// };

// const architectureDefinitions = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureDefinitions({}, info)
// };

// const architectureDefinition = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   return context.db.query.architectureDefinition({
//     where: {
//       id: args.id
//     }
//   }, info)
// };




module.exports = {
  users,
  user,
  // tenants,
  // tenant,
  services,
  service,
  // environments,
  // environment,
  // environmentTenants,
  // environmentTenant,
  // customers,
  // customer,
  // customerContacts,
  // customerContact,
  // architectureTiers,
  // architectureTier,
  // componentTemplates,
  // componentTemplate,
  // componentInstances,
  // componentInstance,
  // componentAttributes,
  // componentAttributeById,
  // componentAttributeByParameter,
  // tenantAttributes,
  // tenantAttributeById,
  // tenantAttributeByParameter,
  // architectureTypes,
  // architectureType,
  // architectureDefinitions,
  // architectureDefinition
};

