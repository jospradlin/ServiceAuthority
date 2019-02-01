const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Axios = require('axios');
// const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { APP_SECRET, getUserId } = require('../utils/utils');


const createTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  console.log(args);

  const tenant = await context.db.mutation.createTenant(
    {
      data: {
        ...args
        }
    },
    info,
  );

  return tenant;
};

const addUserToTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  const tenant = await context.db.mutation.updateTenant(
    {
      data: {
        users: {
          connect: {
            id: args.userId
          }
        }
      },
      where: {
        id: args.tenantId
      }
    },
    info,
  );

  return tenant;
};

const removeUserFromTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  const tenant = await context.db.mutation.updateTenant(
    {
      data: {
        users: {
          disconnect: {
            id: args.userId
          }
        }
      },
      where: {
        id: args.tenantId
      }
    },
    info,
  );

  return tenant;
};


// Service
const createService = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const service = await context.db.mutation.createService (
    {
      data: {
        ...args.serviceObject
      }
    },
    info,
  );

  return service;
};

const createService_BATCH = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const service = await context.db.mutation.createService(
    {
      data: {
        ...args
      }
    },
    info,
  );

  return service;
};

const updateServiceById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const service = await context.db.mutation.updateService(
    {
      data: {
        ...args.serviceObject
      },
      where: {
        id: args.id
      }
    },
    info,
  );

  return service;
};

const updateServiceByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const service = await context.db.mutation.updateService(
    {
      data: {
        ...args.serviceObject
      },
      where: {
        code: args.code
      }
    },
    info,
  );

  return service;
};

/// REMOVED FOR NOW -- BASED ON API DESIGN
// const removeService = async (parent, args, context, info) => {
//   //const userId = getUserId(context)
//   if (args.service && !args.service.id && !args.service.code) {
//     throw new Error(`A Service ID or Code must be provided to remove a Service.`);
//   }

//   let service;
//   if (args.service && args.service.code) {
//     service = await context.db.mutation.deleteService(
//       {
//         where: {
//           code: args.service.code
//         }
//       },
//       info,
//     );
//   } else {
//     service = await context.db.mutation.deleteService(
//       {
//         where: {
//           id: args.service.id
//         }
//       },
//       info,
//     );
//   }

//   return service;
// };

const removeServiceById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const service = await context.db.mutation.deleteService(
      {
        where: {
          id: args.serviceId
        }
      },
      info,
    );
  

  return service;
};

const removeServiceByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const service = await context.db.mutation.deleteService(
    {
      where: {
        code: args.serviceCode
      }
    },
    info,
  );


  return service;
};

// Environment
const createEnvironment = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  let serviceIdentifier = args.service.id;
  if (args.service && !args.service.id && !args.service.code) {
    throw new Error(`A Service ID or Code must be provided to create an Environment.`);
  }

  if (args.service && args.service.code) {
    const serviceId = await context.db.query.service({
      where: {
        code: args.service.code
      }
    }, info);

    if (!serviceId) {
      throw new Error(`No Node for the model Service with value ${args.service.code} for code found.`);
    }
    serviceIdentifier = serviceId.id;
  }

  console.log(`Service ID: ${serviceIdentifier}`);
  const environment = await context.db.mutation.createEnvironment(
    {
      data: {
        name: args.environmentObject.name,
        code: args.environmentObject.code,
        description: args.environmentObject.description,
        classification: args.environmentObject.classification,
        region: args.environmentObject.region,
        service: {
          connect: {
            id: serviceIdentifier
          }
        }

      }
    },
    info,
  );

  return environment;
};

const createEnvironment_BATCH = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const serviceId = await context.db.query.service({
      where: {
        code: args.serviceCode
      }
    }, info);

  if (!serviceId) {
      throw new Error(`No Node for the model Service with value ${args.serviceCode} for code found.`);
  }
  
  const environment = await context.db.mutation.createEnvironment(
    {
      data: {
        name: args.name,
        code: args.code,
        description: args.description,
        classification: args.classification,
        region: args.region,
        service: {
          connect: {
            id: serviceId.id
          }
        }

      }
    },
    info,
  );

  return environment;
};

const updateEnvironmentParametersById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);
  const environment = await context.db.mutation.updateEnvironment(
    {
      data: {
        ...args.environmentObject
      },
      where: {
        id: args.id
      }
    },
    info,
  );

  return environment;
};

const updateEnvironmentParametersByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);
  const environment = await context.db.mutation.updateEnvironment(
    {
      data: {
        ...args.environmentObject
      },
      where: {
        code: args.code
      }
    },
    info,
  );

  return environment;
};

const removeEnvironmentById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const environment = await context.db.mutation.deleteEnvironment(
    {
      where: {
        id: args.environmentId
      }
    },
    info,
  );

  return environment;
};

const removeEnvironmentByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const environment = await context.db.mutation.deleteEnvironment(
    {
      where: {
        code: args.environmentCode
      }
    },
    info,
  );

  return environment;
};


// Environment Tenant
const createEnvironmentTenant = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customerId = await context.db.query.customer({
    where: {
      code: args.customerCode
    }
  }, info);

  const environmentId = await context.db.query.environment({
    where: {
      code: args.environmentCode
    }
  }, info);


  const tenant = await context.db.mutation.createEnvironmentTenant(
    {
      data: {
        ...args.environmentTenantObject,
        customer: {
          connect: {
            id: customerId.id
          }
        },
        environment: {
          connect: {
            id: environmentId.id
          }
        }

      }
    },
    info,
  );

  return tenant;
};

const createEnvironmentTenant_BATCH = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customerId = await context.db.query.customer({
    where: {
      code: args.customerCode
    }
  }, info);

  const environmentId = await context.db.query.environment({
    where: {
      code: args.environmentCode
    }
  }, info);


  const tenant = await context.db.mutation.createEnvironmentTenant(
    {
      data: {
        name: args.name,
        code: args.code,
        class: args.class,
        primaryContactEmail: args.primaryContactEmail,
        tenantCreationDate: args.tenantCreationDate,
        customer: {
          connect: {
            id: customerId.id
          }
        },
        environment: {
          connect: {
            id: environmentId.id
          }
        }

      }
    },
    info,
  );

  return tenant;
};

const updateEnvironmentTenantParametersById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const tenant = await context.db.mutation.updateEnvironmentTenant(
    {
      data: {
        ...args.environmentTenantObject
      },
      where: {
        id: args.id
      }
    },
    info,
  );

  return tenant;
};

const updateEnvironmentTenantParametersByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const tenant = await context.db.mutation.updateEnvironmentTenant(
    {
      data: {
        ...args.environmentTenantObject
      },
      where: {
        code: args.code
      }
    },
    info,
  );

  return tenant;
};



const removeEnvironmentTenantById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const tenant = await context.db.mutation.deleteEnvironmentTenant(
    {
      where: {
        id: args.tenantId
      }
    },
    info,
  );

  return tenant;
};

const removeEnvironmentTenantByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const tenant = await context.db.mutation.deleteEnvironmentTenant(
    {
      where: {
        code: args.tenantCode
      }
    },
    info,
  );

  return tenant;
};

const createCustomer = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customer = await context.db.mutation.createCustomer(
    {
      data: {
        ...args.customer
      }
    },
    info,
  );

  return customer;
};

const createCustomer_BATCH = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customer = await context.db.mutation.createCustomer(
    {
      data: {
        ...args
      }
    },
    info,
  );

  return customer;
};

const updateCustomer = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customer = await context.db.mutation.createCustomer(
    {
      data: {
        ...args.customer
      },
      where: {
        id: args.customerId
      }
    },
    info,
  );

  return customer;
};

const removeCustomerById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const customer = await context.db.mutation.deleteCustomer(
    {
      where: {
        id: args.customerId
      }
    },
    info,
  );

  return customer;
};

const removeCustomerByCode = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const customer = await context.db.mutation.deleteCustomer(
    {
      where: {
        code: args.customerCode
      }
    },
    info,
  );

  return customer;
};


const createCustomerContact = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customerId = await context.db.query.customer({
    where: {
      code: args.customerCode
    }
  }, info);

  console.log(`Customer ID: ${customerId.id}`);

  const customerContact = await context.db.mutation.createCustomerContact(
    {
      data: {
        ...args.customerContact,
        customer: {
          connect: {
            id: customerId.id
          }
        }

      }
    },
    info,
  );

  return customerContact;
};

const createCustomerContact_BATCH = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const customerId = await context.db.query.customer({
    where: {
      code: args.customerCode
    }
  }, info);

  console.log(`Service ID: ${customerId.id}`);

  const customerContact = await context.db.mutation.createCustomerContact(
    {
      data: {
        name: args.name,
        email: args.email,
        phone: args.phone,
        sms: args.sms,
        customer: {
          connect: {
            id: customerId.id
          }
        }

      }
    },
    info,
  );

  return customerContact;
};

const updateCustomerContact = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const customerContact = await context.db.mutation.updateCustomerContact(
    {
      data: {
        ...args.customerContact
      },
      where: {
        id: args.contactId
      }
    },
    info,
  );

  return customerContact;
};

const removeCustomerContact = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const customerContact = await context.db.mutation.deleteCustomerContact(
    {
      where: {
        id: args.contactId
      }
    },
    info,
  );

  return customerContact;
};

const createArchitectureTier = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const architectureTier = await context.db.mutation.createArchitectureTier(
    {
      data: {
        ...args
      }
    },
    info,
  );

  return architectureTier;
};

const updateArchitectureTier = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const architectureTier = await context.db.mutation.updateArchitectureTier(
    {
      data: {
        name: args.name,
        priority: args.priority
      },
      where: {
        id: args.tierId
      }
    },
    info,
  );

  return architectureTier;
};

const removeArchitectureTier = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const architectureTier = await context.db.mutation.deleteArchitectureTier(
    {
      where: {
        id: args.id
      }
    },
    info,
  );

  return architectureTier;
};

const createComponentTemplate = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const tierId = await context.db.query.architectureTier({
    where: {
      name: args.tier
    }
  }, info);

  const componentTemplate = await context.db.mutation.createComponentTemplate(
      {
        data: {
          name: args.name,
          code: args.code,
          tier: {
            connect: {
              id: tierId.id
            }
          }

        }
      },
      info,
    );

  return componentTemplate;
};

const removeComponentTemplate = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const componentTemplate = await context.db.mutation.deleteComponentTemplate(
    {
      where: {
        id: args.componentTemplateId
      }
    },
    info,
  );

  return componentTemplate;
};

const createComponentInstance = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const environmentId = await context.db.query.environment({
      where: {
        code: args.environmentCode
      }
    }, info);

  const componenteTemplateId = await context.db.query.componentTemplate({
    where: {
      code: args.compontentTemplateCode
    }
  }, info);

  const componentInstance = await context.db.mutation.createComponentInstance(
    {
      data: {
        name: args.name,
        environment: {
          connect: {
            id: environmentId.id
          }
        },
        component: {
          connect: {
            id: componenteTemplateId.id
          }
        }
      }
    },
    info,
  );

  return componentInstance;
};

const removeComponentInstance = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const componentInstance = await context.db.mutation.deleteComponentInstance(
    {
      where: {
        id: args.componentInstanceId
      }
    },
    info,
  );

  return componentInstance;
};

const createComponentAttribute = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const attribute = await context.db.mutation.createComponentAttribute(
    {
      data: {
        parameter: args.parameter,
        value: args.value,
        component: {
          connect: {
            name: args.componentInstanceName
          }
        }
      }
    },
    info,
  );

  return attribute;
};

const removeComponentAttributeById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const attribute = await context.db.mutation.deleteComponentAttribute(
    {
      where: {
        id: args.attributeId
      }
    },
    info,
  );

  return attribute;
};

const removeComponentAttributeByParameter = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const attribute = await context.db.mutation.deleteComponentAttribute(
    {
      where: {
        parameter: args.parameter
      }
    },
    info,
  );

  return attribute;
};

const createTenantAttribute = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const attribute = await context.db.mutation.createTenantAttribute(
    {
      data: {
        parameter: args.parameter,
        value: args.value,
        tenant: {
          connect: {
            code: args.tenantCode
          }
        }
      }
    },
    info,
  );

  return attribute;
};

const removeTenantAttributeById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const attribute = await context.db.mutation.deleteTenantAttribute(
    {
      where: {
        id: args.attributeId
      }
    },
    info,
  );

  return attribute;
};

const removeTenantAttributeByParameter = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const attribute = await context.db.mutation.deleteTenantAttribute(
    {
      where: {
        parameter: args.parameter
      }
    },
    info,
  );

  return attribute;
};

const createArchitectureType = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const architectureType = await context.db.mutation.createArchitectureType(
    {
      data: {
        ...args
      }
    },
    info,
  );

  return architectureType;
};

const updateArchitectureType = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const architectureType = await context.db.mutation.updateArchitectureType(
    {
      data: {
        name: args.name
      },
      where: {
        id: args.typeId
      }
    },
    info,
  );

  return architectureType;
};

const removeArchitectureType = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const architectureType = await context.db.mutation.deleteArchitectureType(
    {
      where: {
        id: args.id
      }
    },
    info,
  );

  return architectureType;
};

const createArchitectureDefinition = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const typeId = await context.db.query.architectureType({
    where: {
      name: args.type
    }
  }, info);

  const architectureDefinition = await context.db.mutation.createArchitectureDefinition(
    {
      data: {
        name: args.name,
        code: args.code,
        description: args.description,
        type: {
          connect: {
            id: typeId.id
          }
        }

      }
    },
    info,
  );

  return architectureDefinition;
};

const updateArchitectureDefinitionParameters = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  console.log(args);

  const architectureDefinition = await context.db.mutation.updateArchitectureDefinition(
    {
      data: {
        name: args.name,
        code: args.code,
        description: args.description
      },
      where: {
        id: args.definitionId
      }
    },
    info,
  );

  return architectureDefinition;
};

const removeArchitectureDefinition = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  const architectureDefinition = await context.db.mutation.deleteArchitectureDefinition(
    {
      where: {
        id: args.id
      }
    },
    info,
  );

  return architectureDefinition;
};




async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  // 3
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

  // 3
  return {
    token,
    user,
  }
}

// async function vote(parent, args, context, info) {
//   // 1
//   const userId = getUserId(context)

//   // 2
//   const linkExists = await context.db.exists.Vote({
//     user: { id: userId },
//     link: { id: args.linkId },
//   })
//   if (linkExists) {
//     throw new Error(`Already voted for link: ${args.linkId}`)
//   }

//   // 3
//   return context.db.mutation.createVote(
//     {
//       data: {
//         user: { connect: { id: userId } },
//         link: { connect: { id: args.linkId } },
//       },
//     },
//     info,
//   )
// }

module.exports = {
    signup,
    login,
    createTenant,
    addUserToTenant,
    removeUserFromTenant,
    createService,
    createService_BATCH,
    updateServiceById,
    updateServiceByCode,
    removeServiceById,
    removeServiceByCode,
    createEnvironment,
    createEnvironment_BATCH,
    updateEnvironmentParametersById,
    updateEnvironmentParametersByCode,
    removeEnvironmentById,
    removeEnvironmentByCode,
    createEnvironmentTenant,
    createEnvironmentTenant_BATCH,
    updateEnvironmentTenantParametersById,
    updateEnvironmentTenantParametersByCode,
    removeEnvironmentTenantById,
    removeEnvironmentTenantByCode,
    createCustomer,
    createCustomer_BATCH,
    updateCustomer,
    removeCustomerById,
    removeCustomerByCode,
    createCustomerContact,
    createCustomerContact_BATCH,
    updateCustomerContact,
    removeCustomerContact,
    createArchitectureTier,
    updateArchitectureTier,
    removeArchitectureTier,
    createComponentTemplate,
    removeComponentTemplate,
    createComponentInstance,
    removeComponentInstance,
    createComponentAttribute,
    removeComponentAttributeById,
    removeComponentAttributeByParameter,
    createTenantAttribute,
    removeTenantAttributeById,
    removeTenantAttributeByParameter,
    createArchitectureType,
    updateArchitectureType,
    removeArchitectureType,
    createArchitectureDefinition,
    updateArchitectureDefinitionParameters,
    removeArchitectureDefinition
  }
