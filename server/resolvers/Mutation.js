const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Axios = require('axios');
// const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { APP_SECRET, getUserId } = require('../utils/utils');


// const createTenant = async (parent, args, context, info) => {
//   const userId = getUserId(context)
//   console.log(args);

//   const tenant = await context.db.mutation.createTenant(
//     {
//       data: {
//         ...args
//         }
//     },
//     info,
//   );

//   return tenant;
// };

// const addUserToTenant = async (parent, args, context, info) => {
//   const userId = getUserId(context)
//   const tenant = await context.db.mutation.updateTenant(
//     {
//       data: {
//         users: {
//           connect: {
//             id: args.userId
//           }
//         }
//       },
//       where: {
//         id: args.tenantId
//       }
//     },
//     info,
//   );

//   return tenant;
// };

// const removeUserFromTenant = async (parent, args, context, info) => {
//   const userId = getUserId(context)
//   const tenant = await context.db.mutation.updateTenant(
//     {
//       data: {
//         users: {
//           disconnect: {
//             id: args.userId
//           }
//         }
//       },
//       where: {
//         id: args.tenantId
//       }
//     },
//     info,
//   );

//   return tenant;
// };


// Service
const createService = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.createService(
    {
      ...args
    }
  )
};

const createServiceByObj = async (root, args, context) => {
  const userId = getUserId(context)
    return await context.prisma.createService({...args.serviceObject})
};

const removeServiceById = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.deleteService({ id: args.id })
};

const removeServiceByCode = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.deleteService({ code: args.code })
};

const updateServiceById = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.updateService(
    {
      where: { id: args.id },
      data: { ...args.serviceObject },
    },
  )
};

const updateServiceByCode = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.updateService(
    {
      where: { code: args.code },
      data: { ...args.serviceObject },
    },
  )
};

// Environment
const createEnvironment = async (root, args, context) => {
  const userId = getUserId(context)
  console.log(args);

  const serviceId = await context.prisma.service( {code: args.serviceCode} );

  if (!serviceId) {
    throw new Error(`No Node for the model Service with value ${args.serviceCode} for code found.`);
  }

  return await context.prisma.createEnvironment({
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
  );
};

const createEnvironmentByObj = async (root, args, context) => {
  const userId = getUserId(context)
  console.log(args);

  let serviceIdentifier = args.service.id;
  if (args.service && !args.service.id && !args.service.code) {
    throw new Error(`A Service ID or Code must be provided to create an Environment.`);
  }

  if (args.service && args.service.code) {
    const serviceId = await context.prisma.service({ code: args.service.code });

    if (!serviceId) {
      throw new Error(`No Node for the model Service with value ${args.service.code} for code found.`);
    }
    serviceIdentifier = serviceId.id;
  }

  console.log(`Service ID: ${serviceIdentifier}`);
  return await context.prisma.createEnvironment(
    {
      ...args.environmentObject,
      service: {
        connect: {
          id: serviceIdentifier
        }
      }

    }
  );
};

const removeEnvironmentById = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.deleteEnvironment({ id: args.id })
};

const removeEnvironmentByCode = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.deleteEnvironment({ code: args.code })
};

const updateEnvironmentById = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.updateEnvironment(
    {
      where: { id: args.id },
      data: { ...args.environmentObject },
    },
  )
};

const updateEnvironmentByCode = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.updateEnvironment(
    {
      where: { code: args.code },
      data: { ...args.environmentObject },
    },
  )
};


// Environment Tenant
const createEnvironmentTenantByObj = async (root, args, context) => {
  //const userId = getUserId(context)
  console.log(args);

  let customerIdentifier = args.customer.id;
  if (args.customer && !args.customer.id && !args.customer.code) {
    throw new Error(`A Customer ID or Code must be provided to create an Environment Tenant.`);
  }

  if (args.customer && args.customer.code) {
    const customerId = await context.prisma.customer({ code: args.customer.code });

    if (!customerId) {
      throw new Error(`No Node for the model Customer with value ${args.customer.code} for code found.`);
    }
    customerIdentifier = customerId.id;
  }

  console.log(`Customer ID: ${customerIdentifier}`);

  let environmentIdentifier = args.environment.id;
  if (args.environment && !args.environment.id && !args.environment.code) {
    throw new Error(`A Environment ID or Code must be provided to create an Environment Tenant.`);
  }

  if (args.environment && args.environment.code) {
    const environmentId = await context.prisma.environment({ code: args.environment.code });

    if (!environmentId) {
      throw new Error(`No Node for the model Environment with value ${args.environment.code} for code found.`);
    }
    environmentIdentifier = environmentId.id;
  }

  console.log(`EnvironmentId ID: ${environmentIdentifier}`);

  return await context.prisma.createEnvironmentTenant({
        ...args.environmentTenantObject,
        customer: {
          connect: {
            id: customerIdentifier
          }
        },
        environment: {
          connect: {
            id: environmentIdentifier
          }
        }
  });
};

const createEnvironmentTenant = async (root, args, context) => {
  //const userId = getUserId(context)
  console.log(args);

  const customerId = await context.prisma.customer( {code: args.customerCode} );
  const environmentId = await context.prisma.environment( {code: args.environmentCode} );
  return await context.prisma.createEnvironmentTenant({
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
  });
};

const removeEnvironmentTenantById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteEnvironmentTenant({ id: args.id })
};

const removeEnvironmentTenantByCode = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteEnvironmentTenant({ code: args.code })
};

const updateEnvironmentTenantById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateEnvironmentTenant(
    {
      where: { id: args.id },
      data: { ...args.environmentTenantObject },
    },
  )
};

const updateEnvironmentTenantByCode = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateEnvironmentTenant(
    {
      where: { code: args.code },
      data: { ...args.environmentTenantObject },
    },
  )
};

// Customer
const createCustomer = async (root, args, context) => {
  // const userId = getUserId(context)
  return await context.prisma.createCustomer(
    {
      ...args
    }
  )
};

const createCustomerByObj = async (root, args, context) => {
  // const userId = getUserId(context)
  return await context.prisma.createCustomer({ ...args.customerObject })
};

const removeCustomerById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteCustomer({ id: args.id })
};

const removeCustomerByCode = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteCustomer({ code: args.code })
};

const updateCustomerById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateCustomer(
    {
      where: { id: args.id },
      data: { ...args.customerObject },
    },
  )
};

const updateCustomerByCode = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateCustomer(
    {
      where: { code: args.code },
      data: { ...args.customerObject },
    },
  )
};


// Customer Contact
const createCustomerContact = async (root, args, context) => {
  // const userId = getUserId(context)
  console.log(args);

  const customerId = await context.prisma.customer({ code: args.customerCode });

  if (!customerId) {
    throw new Error(`No Node for the model Customer with value ${args.customerCode} for code found.`);
  }

  return await context.prisma.createCustomerContact({
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
  );
};

const createCustomerContactByObj = async (root, args, context) => {
  // const userId = getUserId(context)
  console.log(args);

  let customerIdentifier = args.customer.id;
  if (args.customer && !args.customer.id && !args.customer.code) {
    throw new Error(`A Customer ID or Code must be provided to create a Customer Contact.`);
  }

  if (args.customer && args.customer.code) {
    const customerId = await context.prisma.customer({ code: args.customer.code });

    if (!customerId) {
      throw new Error(`No Node for the model Customer with value ${args.customer.code} for code found.`);
    }
    customerIdentifier = customerId.id;
  }

  console.log(`Customer ID: ${customerIdentifier}`);
  return await context.prisma.createCustomerContact(
    {
      ...args.contactObject,
      customer: {
        connect: {
          id: customerIdentifier
        }
      }

    }
  );
};

const removeCustomerContactById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteCustomerContact({ id: args.id })
};

const removeCustomerContactByEmail = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.deleteCustomerContact({ email: args.email })
};

const updateCustomerContactById = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateCustomerContact(
    {
      where: { id: args.id },
      data: { ...args.contactObject },
    },
  )
};

const updateCustomerContactByEmail = async (root, args, context) => {
  //const userId = getUserId(context)
  return await context.prisma.updateCustomerContact(
    {
      where: { email: args.email },
      data: { ...args.contactObject },
    },
  )
};


//////  UN-TESTED



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





const signup = async (root, args, context) => {

  // 1
  const password = await bcrypt.hash(args.password, 10)

  // 2
  const user = await context.prisma.createUser(
    {
      ...args, 
      password,
    }, 
    `{ id }`
  )

  // 3
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

  // 4
  return {
    token,
    user,
  }

};

const login = async (root, args, context) => {
  // 1
  const user = await context.prisma.user({ email: args.email }, `{ id password }`)
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
};

const removeUserById = async (root, args, context) => {
  const userId = getUserId(context)
  return await context.prisma.deleteUser({ id: args.id })
};



// async function signup(parent, args, context, info) {
//   // 1
//   const password = await bcrypt.hash(args.password, 10)
//   // 2
//   const user = await context.db.mutation.createUser({
//     data: { ...args, password },
//   }, `{ id }`)

//   // 3
//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

//   // 4
//   return {
//     token,
//     user,
//   }
// }

// async function login(parent, args, context, info) {
//   // 1
//   const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
//   if (!user) {
//     throw new Error('No such user found')
//   }

//   // 2
//   const valid = await bcrypt.compare(args.password, user.password)
//   if (!valid) {
//     throw new Error('Invalid password')
//   }

//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

//   // 3
//   return {
//     token,
//     user,
//   }
// }

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
    removeUserById,
    // createTenant,
    // addUserToTenant,
    // removeUserFromTenant,

    // Service CI
    createService,
    createServiceByObj,
    updateServiceById,
    updateServiceByCode,
    removeServiceById,
    removeServiceByCode,

    // Environment CI
    createEnvironment,
    createEnvironmentByObj,
    updateEnvironmentById,
    updateEnvironmentByCode,
    removeEnvironmentById,
    removeEnvironmentByCode,

    // Environment Tenant CI
    createEnvironmentTenant,
    createEnvironmentTenantByObj,
    updateEnvironmentTenantById,
    updateEnvironmentTenantByCode,
    removeEnvironmentTenantById,
    removeEnvironmentTenantByCode,

    // Customer CI
    createCustomer,
    createCustomerByObj,
    updateCustomerById,
    updateCustomerByCode,
    removeCustomerById,
    removeCustomerByCode,

    // Customer Contact CI
    createCustomerContact,
    createCustomerContactByObj,
    updateCustomerContactById,
    updateCustomerContactByEmail,
    removeCustomerContactById,
    removeCustomerContactByEmail,


    // createArchitectureTier,
    // updateArchitectureTier,
    // removeArchitectureTier,
    // createComponentTemplate,
    // removeComponentTemplate,
    // createComponentInstance,
    // removeComponentInstance,
    // createComponentAttribute,
    // removeComponentAttributeById,
    // removeComponentAttributeByParameter,
    // createTenantAttribute,
    // removeTenantAttributeById,
    // removeTenantAttributeByParameter,
    // createArchitectureType,
    // updateArchitectureType,
    // removeArchitectureType,
    // createArchitectureDefinition,
    // updateArchitectureDefinitionParameters,
    // removeArchitectureDefinition,
  }
