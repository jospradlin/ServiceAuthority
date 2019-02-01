module.exports = {
        typeDefs: /* GraphQL */ `type AggregateArchitectureDefinition {
  count: Int!
}

type AggregateArchitectureTier {
  count: Int!
}

type AggregateArchitectureType {
  count: Int!
}

type AggregateComponentAttribute {
  count: Int!
}

type AggregateComponentInstance {
  count: Int!
}

type AggregateComponentTemplate {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregateCustomerContact {
  count: Int!
}

type AggregateEnvironment {
  count: Int!
}

type AggregateEnvironmentTenant {
  count: Int!
}

type AggregateService {
  count: Int!
}

type AggregateTenant {
  count: Int!
}

type AggregateTenantAttribute {
  count: Int!
}

type AggregateTenantRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type ArchitectureDefinition {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
  type: ArchitectureType!
  components(where: ComponentTemplateWhereInput, orderBy: ComponentTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentTemplate!]
}

type ArchitectureDefinitionConnection {
  pageInfo: PageInfo!
  edges: [ArchitectureDefinitionEdge]!
  aggregate: AggregateArchitectureDefinition!
}

input ArchitectureDefinitionCreateInput {
  name: String!
  code: String!
  description: String
  type: ArchitectureTypeCreateOneInput!
  components: ComponentTemplateCreateManyInput
}

type ArchitectureDefinitionEdge {
  node: ArchitectureDefinition!
  cursor: String!
}

enum ArchitectureDefinitionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  description_ASC
  description_DESC
}

type ArchitectureDefinitionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
}

type ArchitectureDefinitionSubscriptionPayload {
  mutation: MutationType!
  node: ArchitectureDefinition
  updatedFields: [String!]
  previousValues: ArchitectureDefinitionPreviousValues
}

input ArchitectureDefinitionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArchitectureDefinitionWhereInput
  AND: [ArchitectureDefinitionSubscriptionWhereInput!]
  OR: [ArchitectureDefinitionSubscriptionWhereInput!]
  NOT: [ArchitectureDefinitionSubscriptionWhereInput!]
}

input ArchitectureDefinitionUpdateInput {
  name: String
  code: String
  description: String
  type: ArchitectureTypeUpdateOneRequiredInput
  components: ComponentTemplateUpdateManyInput
}

input ArchitectureDefinitionUpdateManyMutationInput {
  name: String
  code: String
  description: String
}

input ArchitectureDefinitionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: ArchitectureTypeWhereInput
  components_every: ComponentTemplateWhereInput
  components_some: ComponentTemplateWhereInput
  components_none: ComponentTemplateWhereInput
  AND: [ArchitectureDefinitionWhereInput!]
  OR: [ArchitectureDefinitionWhereInput!]
  NOT: [ArchitectureDefinitionWhereInput!]
}

input ArchitectureDefinitionWhereUniqueInput {
  id: ID
  name: String
  code: String
}

type ArchitectureTier {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  priority: Int!
}

type ArchitectureTierConnection {
  pageInfo: PageInfo!
  edges: [ArchitectureTierEdge]!
  aggregate: AggregateArchitectureTier!
}

input ArchitectureTierCreateInput {
  name: String!
  priority: Int!
}

input ArchitectureTierCreateOneInput {
  create: ArchitectureTierCreateInput
  connect: ArchitectureTierWhereUniqueInput
}

type ArchitectureTierEdge {
  node: ArchitectureTier!
  cursor: String!
}

enum ArchitectureTierOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  priority_ASC
  priority_DESC
}

type ArchitectureTierPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  priority: Int!
}

type ArchitectureTierSubscriptionPayload {
  mutation: MutationType!
  node: ArchitectureTier
  updatedFields: [String!]
  previousValues: ArchitectureTierPreviousValues
}

input ArchitectureTierSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArchitectureTierWhereInput
  AND: [ArchitectureTierSubscriptionWhereInput!]
  OR: [ArchitectureTierSubscriptionWhereInput!]
  NOT: [ArchitectureTierSubscriptionWhereInput!]
}

input ArchitectureTierUpdateDataInput {
  name: String
  priority: Int
}

input ArchitectureTierUpdateInput {
  name: String
  priority: Int
}

input ArchitectureTierUpdateManyMutationInput {
  name: String
  priority: Int
}

input ArchitectureTierUpdateOneRequiredInput {
  create: ArchitectureTierCreateInput
  update: ArchitectureTierUpdateDataInput
  upsert: ArchitectureTierUpsertNestedInput
  connect: ArchitectureTierWhereUniqueInput
}

input ArchitectureTierUpsertNestedInput {
  update: ArchitectureTierUpdateDataInput!
  create: ArchitectureTierCreateInput!
}

input ArchitectureTierWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  priority: Int
  priority_not: Int
  priority_in: [Int!]
  priority_not_in: [Int!]
  priority_lt: Int
  priority_lte: Int
  priority_gt: Int
  priority_gte: Int
  AND: [ArchitectureTierWhereInput!]
  OR: [ArchitectureTierWhereInput!]
  NOT: [ArchitectureTierWhereInput!]
}

input ArchitectureTierWhereUniqueInput {
  id: ID
  name: String
}

type ArchitectureType {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type ArchitectureTypeConnection {
  pageInfo: PageInfo!
  edges: [ArchitectureTypeEdge]!
  aggregate: AggregateArchitectureType!
}

input ArchitectureTypeCreateInput {
  name: String!
}

input ArchitectureTypeCreateOneInput {
  create: ArchitectureTypeCreateInput
  connect: ArchitectureTypeWhereUniqueInput
}

type ArchitectureTypeEdge {
  node: ArchitectureType!
  cursor: String!
}

enum ArchitectureTypeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type ArchitectureTypePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type ArchitectureTypeSubscriptionPayload {
  mutation: MutationType!
  node: ArchitectureType
  updatedFields: [String!]
  previousValues: ArchitectureTypePreviousValues
}

input ArchitectureTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArchitectureTypeWhereInput
  AND: [ArchitectureTypeSubscriptionWhereInput!]
  OR: [ArchitectureTypeSubscriptionWhereInput!]
  NOT: [ArchitectureTypeSubscriptionWhereInput!]
}

input ArchitectureTypeUpdateDataInput {
  name: String
}

input ArchitectureTypeUpdateInput {
  name: String
}

input ArchitectureTypeUpdateManyMutationInput {
  name: String
}

input ArchitectureTypeUpdateOneRequiredInput {
  create: ArchitectureTypeCreateInput
  update: ArchitectureTypeUpdateDataInput
  upsert: ArchitectureTypeUpsertNestedInput
  connect: ArchitectureTypeWhereUniqueInput
}

input ArchitectureTypeUpsertNestedInput {
  update: ArchitectureTypeUpdateDataInput!
  create: ArchitectureTypeCreateInput!
}

input ArchitectureTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ArchitectureTypeWhereInput!]
  OR: [ArchitectureTypeWhereInput!]
  NOT: [ArchitectureTypeWhereInput!]
}

input ArchitectureTypeWhereUniqueInput {
  id: ID
  name: String
}

type BatchPayload {
  count: Long!
}

type ComponentAttribute {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parameter: String!
  value: String!
  component: ComponentInstance!
}

type ComponentAttributeConnection {
  pageInfo: PageInfo!
  edges: [ComponentAttributeEdge]!
  aggregate: AggregateComponentAttribute!
}

input ComponentAttributeCreateInput {
  parameter: String!
  value: String!
  component: ComponentInstanceCreateOneWithoutAttributesInput!
}

input ComponentAttributeCreateManyWithoutComponentInput {
  create: [ComponentAttributeCreateWithoutComponentInput!]
  connect: [ComponentAttributeWhereUniqueInput!]
}

input ComponentAttributeCreateWithoutComponentInput {
  parameter: String!
  value: String!
}

type ComponentAttributeEdge {
  node: ComponentAttribute!
  cursor: String!
}

enum ComponentAttributeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  parameter_ASC
  parameter_DESC
  value_ASC
  value_DESC
}

type ComponentAttributePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parameter: String!
  value: String!
}

input ComponentAttributeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  parameter: String
  parameter_not: String
  parameter_in: [String!]
  parameter_not_in: [String!]
  parameter_lt: String
  parameter_lte: String
  parameter_gt: String
  parameter_gte: String
  parameter_contains: String
  parameter_not_contains: String
  parameter_starts_with: String
  parameter_not_starts_with: String
  parameter_ends_with: String
  parameter_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [ComponentAttributeScalarWhereInput!]
  OR: [ComponentAttributeScalarWhereInput!]
  NOT: [ComponentAttributeScalarWhereInput!]
}

type ComponentAttributeSubscriptionPayload {
  mutation: MutationType!
  node: ComponentAttribute
  updatedFields: [String!]
  previousValues: ComponentAttributePreviousValues
}

input ComponentAttributeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ComponentAttributeWhereInput
  AND: [ComponentAttributeSubscriptionWhereInput!]
  OR: [ComponentAttributeSubscriptionWhereInput!]
  NOT: [ComponentAttributeSubscriptionWhereInput!]
}

input ComponentAttributeUpdateInput {
  parameter: String
  value: String
  component: ComponentInstanceUpdateOneRequiredWithoutAttributesInput
}

input ComponentAttributeUpdateManyDataInput {
  parameter: String
  value: String
}

input ComponentAttributeUpdateManyMutationInput {
  parameter: String
  value: String
}

input ComponentAttributeUpdateManyWithoutComponentInput {
  create: [ComponentAttributeCreateWithoutComponentInput!]
  delete: [ComponentAttributeWhereUniqueInput!]
  connect: [ComponentAttributeWhereUniqueInput!]
  disconnect: [ComponentAttributeWhereUniqueInput!]
  update: [ComponentAttributeUpdateWithWhereUniqueWithoutComponentInput!]
  upsert: [ComponentAttributeUpsertWithWhereUniqueWithoutComponentInput!]
  deleteMany: [ComponentAttributeScalarWhereInput!]
  updateMany: [ComponentAttributeUpdateManyWithWhereNestedInput!]
}

input ComponentAttributeUpdateManyWithWhereNestedInput {
  where: ComponentAttributeScalarWhereInput!
  data: ComponentAttributeUpdateManyDataInput!
}

input ComponentAttributeUpdateWithoutComponentDataInput {
  parameter: String
  value: String
}

input ComponentAttributeUpdateWithWhereUniqueWithoutComponentInput {
  where: ComponentAttributeWhereUniqueInput!
  data: ComponentAttributeUpdateWithoutComponentDataInput!
}

input ComponentAttributeUpsertWithWhereUniqueWithoutComponentInput {
  where: ComponentAttributeWhereUniqueInput!
  update: ComponentAttributeUpdateWithoutComponentDataInput!
  create: ComponentAttributeCreateWithoutComponentInput!
}

input ComponentAttributeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  parameter: String
  parameter_not: String
  parameter_in: [String!]
  parameter_not_in: [String!]
  parameter_lt: String
  parameter_lte: String
  parameter_gt: String
  parameter_gte: String
  parameter_contains: String
  parameter_not_contains: String
  parameter_starts_with: String
  parameter_not_starts_with: String
  parameter_ends_with: String
  parameter_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  component: ComponentInstanceWhereInput
  AND: [ComponentAttributeWhereInput!]
  OR: [ComponentAttributeWhereInput!]
  NOT: [ComponentAttributeWhereInput!]
}

input ComponentAttributeWhereUniqueInput {
  id: ID
  parameter: String
}

type ComponentInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  environment: Environment!
  component: ComponentTemplate!
  attributes(where: ComponentAttributeWhereInput, orderBy: ComponentAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentAttribute!]
}

type ComponentInstanceConnection {
  pageInfo: PageInfo!
  edges: [ComponentInstanceEdge]!
  aggregate: AggregateComponentInstance!
}

input ComponentInstanceCreateInput {
  name: String!
  environment: EnvironmentCreateOneWithoutComponentsInput!
  component: ComponentTemplateCreateOneInput!
  attributes: ComponentAttributeCreateManyWithoutComponentInput
}

input ComponentInstanceCreateManyWithoutEnvironmentInput {
  create: [ComponentInstanceCreateWithoutEnvironmentInput!]
  connect: [ComponentInstanceWhereUniqueInput!]
}

input ComponentInstanceCreateOneWithoutAttributesInput {
  create: ComponentInstanceCreateWithoutAttributesInput
  connect: ComponentInstanceWhereUniqueInput
}

input ComponentInstanceCreateWithoutAttributesInput {
  name: String!
  environment: EnvironmentCreateOneWithoutComponentsInput!
  component: ComponentTemplateCreateOneInput!
}

input ComponentInstanceCreateWithoutEnvironmentInput {
  name: String!
  component: ComponentTemplateCreateOneInput!
  attributes: ComponentAttributeCreateManyWithoutComponentInput
}

type ComponentInstanceEdge {
  node: ComponentInstance!
  cursor: String!
}

enum ComponentInstanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type ComponentInstancePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

input ComponentInstanceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ComponentInstanceScalarWhereInput!]
  OR: [ComponentInstanceScalarWhereInput!]
  NOT: [ComponentInstanceScalarWhereInput!]
}

type ComponentInstanceSubscriptionPayload {
  mutation: MutationType!
  node: ComponentInstance
  updatedFields: [String!]
  previousValues: ComponentInstancePreviousValues
}

input ComponentInstanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ComponentInstanceWhereInput
  AND: [ComponentInstanceSubscriptionWhereInput!]
  OR: [ComponentInstanceSubscriptionWhereInput!]
  NOT: [ComponentInstanceSubscriptionWhereInput!]
}

input ComponentInstanceUpdateInput {
  name: String
  environment: EnvironmentUpdateOneRequiredWithoutComponentsInput
  component: ComponentTemplateUpdateOneRequiredInput
  attributes: ComponentAttributeUpdateManyWithoutComponentInput
}

input ComponentInstanceUpdateManyDataInput {
  name: String
}

input ComponentInstanceUpdateManyMutationInput {
  name: String
}

input ComponentInstanceUpdateManyWithoutEnvironmentInput {
  create: [ComponentInstanceCreateWithoutEnvironmentInput!]
  delete: [ComponentInstanceWhereUniqueInput!]
  connect: [ComponentInstanceWhereUniqueInput!]
  disconnect: [ComponentInstanceWhereUniqueInput!]
  update: [ComponentInstanceUpdateWithWhereUniqueWithoutEnvironmentInput!]
  upsert: [ComponentInstanceUpsertWithWhereUniqueWithoutEnvironmentInput!]
  deleteMany: [ComponentInstanceScalarWhereInput!]
  updateMany: [ComponentInstanceUpdateManyWithWhereNestedInput!]
}

input ComponentInstanceUpdateManyWithWhereNestedInput {
  where: ComponentInstanceScalarWhereInput!
  data: ComponentInstanceUpdateManyDataInput!
}

input ComponentInstanceUpdateOneRequiredWithoutAttributesInput {
  create: ComponentInstanceCreateWithoutAttributesInput
  update: ComponentInstanceUpdateWithoutAttributesDataInput
  upsert: ComponentInstanceUpsertWithoutAttributesInput
  connect: ComponentInstanceWhereUniqueInput
}

input ComponentInstanceUpdateWithoutAttributesDataInput {
  name: String
  environment: EnvironmentUpdateOneRequiredWithoutComponentsInput
  component: ComponentTemplateUpdateOneRequiredInput
}

input ComponentInstanceUpdateWithoutEnvironmentDataInput {
  name: String
  component: ComponentTemplateUpdateOneRequiredInput
  attributes: ComponentAttributeUpdateManyWithoutComponentInput
}

input ComponentInstanceUpdateWithWhereUniqueWithoutEnvironmentInput {
  where: ComponentInstanceWhereUniqueInput!
  data: ComponentInstanceUpdateWithoutEnvironmentDataInput!
}

input ComponentInstanceUpsertWithoutAttributesInput {
  update: ComponentInstanceUpdateWithoutAttributesDataInput!
  create: ComponentInstanceCreateWithoutAttributesInput!
}

input ComponentInstanceUpsertWithWhereUniqueWithoutEnvironmentInput {
  where: ComponentInstanceWhereUniqueInput!
  update: ComponentInstanceUpdateWithoutEnvironmentDataInput!
  create: ComponentInstanceCreateWithoutEnvironmentInput!
}

input ComponentInstanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  environment: EnvironmentWhereInput
  component: ComponentTemplateWhereInput
  attributes_every: ComponentAttributeWhereInput
  attributes_some: ComponentAttributeWhereInput
  attributes_none: ComponentAttributeWhereInput
  AND: [ComponentInstanceWhereInput!]
  OR: [ComponentInstanceWhereInput!]
  NOT: [ComponentInstanceWhereInput!]
}

input ComponentInstanceWhereUniqueInput {
  id: ID
  name: String
}

type ComponentTemplate {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  tier: ArchitectureTier!
}

type ComponentTemplateConnection {
  pageInfo: PageInfo!
  edges: [ComponentTemplateEdge]!
  aggregate: AggregateComponentTemplate!
}

input ComponentTemplateCreateInput {
  name: String!
  code: String!
  tier: ArchitectureTierCreateOneInput!
}

input ComponentTemplateCreateManyInput {
  create: [ComponentTemplateCreateInput!]
  connect: [ComponentTemplateWhereUniqueInput!]
}

input ComponentTemplateCreateOneInput {
  create: ComponentTemplateCreateInput
  connect: ComponentTemplateWhereUniqueInput
}

type ComponentTemplateEdge {
  node: ComponentTemplate!
  cursor: String!
}

enum ComponentTemplateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
}

type ComponentTemplatePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
}

input ComponentTemplateScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  AND: [ComponentTemplateScalarWhereInput!]
  OR: [ComponentTemplateScalarWhereInput!]
  NOT: [ComponentTemplateScalarWhereInput!]
}

type ComponentTemplateSubscriptionPayload {
  mutation: MutationType!
  node: ComponentTemplate
  updatedFields: [String!]
  previousValues: ComponentTemplatePreviousValues
}

input ComponentTemplateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ComponentTemplateWhereInput
  AND: [ComponentTemplateSubscriptionWhereInput!]
  OR: [ComponentTemplateSubscriptionWhereInput!]
  NOT: [ComponentTemplateSubscriptionWhereInput!]
}

input ComponentTemplateUpdateDataInput {
  name: String
  code: String
  tier: ArchitectureTierUpdateOneRequiredInput
}

input ComponentTemplateUpdateInput {
  name: String
  code: String
  tier: ArchitectureTierUpdateOneRequiredInput
}

input ComponentTemplateUpdateManyDataInput {
  name: String
  code: String
}

input ComponentTemplateUpdateManyInput {
  create: [ComponentTemplateCreateInput!]
  update: [ComponentTemplateUpdateWithWhereUniqueNestedInput!]
  upsert: [ComponentTemplateUpsertWithWhereUniqueNestedInput!]
  delete: [ComponentTemplateWhereUniqueInput!]
  connect: [ComponentTemplateWhereUniqueInput!]
  disconnect: [ComponentTemplateWhereUniqueInput!]
  deleteMany: [ComponentTemplateScalarWhereInput!]
  updateMany: [ComponentTemplateUpdateManyWithWhereNestedInput!]
}

input ComponentTemplateUpdateManyMutationInput {
  name: String
  code: String
}

input ComponentTemplateUpdateManyWithWhereNestedInput {
  where: ComponentTemplateScalarWhereInput!
  data: ComponentTemplateUpdateManyDataInput!
}

input ComponentTemplateUpdateOneRequiredInput {
  create: ComponentTemplateCreateInput
  update: ComponentTemplateUpdateDataInput
  upsert: ComponentTemplateUpsertNestedInput
  connect: ComponentTemplateWhereUniqueInput
}

input ComponentTemplateUpdateWithWhereUniqueNestedInput {
  where: ComponentTemplateWhereUniqueInput!
  data: ComponentTemplateUpdateDataInput!
}

input ComponentTemplateUpsertNestedInput {
  update: ComponentTemplateUpdateDataInput!
  create: ComponentTemplateCreateInput!
}

input ComponentTemplateUpsertWithWhereUniqueNestedInput {
  where: ComponentTemplateWhereUniqueInput!
  update: ComponentTemplateUpdateDataInput!
  create: ComponentTemplateCreateInput!
}

input ComponentTemplateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  tier: ArchitectureTierWhereInput
  AND: [ComponentTemplateWhereInput!]
  OR: [ComponentTemplateWhereInput!]
  NOT: [ComponentTemplateWhereInput!]
}

input ComponentTemplateWhereUniqueInput {
  id: ID
  code: String
}

type Customer {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  status: String
  contacts(where: CustomerContactWhereInput, orderBy: CustomerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomerContact!]
  tenants(where: EnvironmentTenantWhereInput, orderBy: EnvironmentTenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnvironmentTenant!]
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

type CustomerContact {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  phone: String
  sms: String
  customer: Customer!
}

type CustomerContactConnection {
  pageInfo: PageInfo!
  edges: [CustomerContactEdge]!
  aggregate: AggregateCustomerContact!
}

input CustomerContactCreateInput {
  name: String!
  email: String!
  phone: String
  sms: String
  customer: CustomerCreateOneWithoutContactsInput!
}

input CustomerContactCreateManyWithoutCustomerInput {
  create: [CustomerContactCreateWithoutCustomerInput!]
  connect: [CustomerContactWhereUniqueInput!]
}

input CustomerContactCreateWithoutCustomerInput {
  name: String!
  email: String!
  phone: String
  sms: String
}

type CustomerContactEdge {
  node: CustomerContact!
  cursor: String!
}

enum CustomerContactOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  sms_ASC
  sms_DESC
}

type CustomerContactPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  phone: String
  sms: String
}

input CustomerContactScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  sms: String
  sms_not: String
  sms_in: [String!]
  sms_not_in: [String!]
  sms_lt: String
  sms_lte: String
  sms_gt: String
  sms_gte: String
  sms_contains: String
  sms_not_contains: String
  sms_starts_with: String
  sms_not_starts_with: String
  sms_ends_with: String
  sms_not_ends_with: String
  AND: [CustomerContactScalarWhereInput!]
  OR: [CustomerContactScalarWhereInput!]
  NOT: [CustomerContactScalarWhereInput!]
}

type CustomerContactSubscriptionPayload {
  mutation: MutationType!
  node: CustomerContact
  updatedFields: [String!]
  previousValues: CustomerContactPreviousValues
}

input CustomerContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerContactWhereInput
  AND: [CustomerContactSubscriptionWhereInput!]
  OR: [CustomerContactSubscriptionWhereInput!]
  NOT: [CustomerContactSubscriptionWhereInput!]
}

input CustomerContactUpdateInput {
  name: String
  email: String
  phone: String
  sms: String
  customer: CustomerUpdateOneRequiredWithoutContactsInput
}

input CustomerContactUpdateManyDataInput {
  name: String
  email: String
  phone: String
  sms: String
}

input CustomerContactUpdateManyMutationInput {
  name: String
  email: String
  phone: String
  sms: String
}

input CustomerContactUpdateManyWithoutCustomerInput {
  create: [CustomerContactCreateWithoutCustomerInput!]
  delete: [CustomerContactWhereUniqueInput!]
  connect: [CustomerContactWhereUniqueInput!]
  disconnect: [CustomerContactWhereUniqueInput!]
  update: [CustomerContactUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [CustomerContactUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [CustomerContactScalarWhereInput!]
  updateMany: [CustomerContactUpdateManyWithWhereNestedInput!]
}

input CustomerContactUpdateManyWithWhereNestedInput {
  where: CustomerContactScalarWhereInput!
  data: CustomerContactUpdateManyDataInput!
}

input CustomerContactUpdateWithoutCustomerDataInput {
  name: String
  email: String
  phone: String
  sms: String
}

input CustomerContactUpdateWithWhereUniqueWithoutCustomerInput {
  where: CustomerContactWhereUniqueInput!
  data: CustomerContactUpdateWithoutCustomerDataInput!
}

input CustomerContactUpsertWithWhereUniqueWithoutCustomerInput {
  where: CustomerContactWhereUniqueInput!
  update: CustomerContactUpdateWithoutCustomerDataInput!
  create: CustomerContactCreateWithoutCustomerInput!
}

input CustomerContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  sms: String
  sms_not: String
  sms_in: [String!]
  sms_not_in: [String!]
  sms_lt: String
  sms_lte: String
  sms_gt: String
  sms_gte: String
  sms_contains: String
  sms_not_contains: String
  sms_starts_with: String
  sms_not_starts_with: String
  sms_ends_with: String
  sms_not_ends_with: String
  customer: CustomerWhereInput
  AND: [CustomerContactWhereInput!]
  OR: [CustomerContactWhereInput!]
  NOT: [CustomerContactWhereInput!]
}

input CustomerContactWhereUniqueInput {
  id: ID
  email: String
}

input CustomerCreateInput {
  name: String!
  code: String!
  status: String
  contacts: CustomerContactCreateManyWithoutCustomerInput
  tenants: EnvironmentTenantCreateManyWithoutCustomerInput
}

input CustomerCreateOneWithoutContactsInput {
  create: CustomerCreateWithoutContactsInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateOneWithoutTenantsInput {
  create: CustomerCreateWithoutTenantsInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutContactsInput {
  name: String!
  code: String!
  status: String
  tenants: EnvironmentTenantCreateManyWithoutCustomerInput
}

input CustomerCreateWithoutTenantsInput {
  name: String!
  code: String!
  status: String
  contacts: CustomerContactCreateManyWithoutCustomerInput
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  status_ASC
  status_DESC
}

type CustomerPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  status: String
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateInput {
  name: String
  code: String
  status: String
  contacts: CustomerContactUpdateManyWithoutCustomerInput
  tenants: EnvironmentTenantUpdateManyWithoutCustomerInput
}

input CustomerUpdateManyMutationInput {
  name: String
  code: String
  status: String
}

input CustomerUpdateOneRequiredWithoutContactsInput {
  create: CustomerCreateWithoutContactsInput
  update: CustomerUpdateWithoutContactsDataInput
  upsert: CustomerUpsertWithoutContactsInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateOneRequiredWithoutTenantsInput {
  create: CustomerCreateWithoutTenantsInput
  update: CustomerUpdateWithoutTenantsDataInput
  upsert: CustomerUpsertWithoutTenantsInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateWithoutContactsDataInput {
  name: String
  code: String
  status: String
  tenants: EnvironmentTenantUpdateManyWithoutCustomerInput
}

input CustomerUpdateWithoutTenantsDataInput {
  name: String
  code: String
  status: String
  contacts: CustomerContactUpdateManyWithoutCustomerInput
}

input CustomerUpsertWithoutContactsInput {
  update: CustomerUpdateWithoutContactsDataInput!
  create: CustomerCreateWithoutContactsInput!
}

input CustomerUpsertWithoutTenantsInput {
  update: CustomerUpdateWithoutTenantsDataInput!
  create: CustomerCreateWithoutTenantsInput!
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  contacts_every: CustomerContactWhereInput
  contacts_some: CustomerContactWhereInput
  contacts_none: CustomerContactWhereInput
  tenants_every: EnvironmentTenantWhereInput
  tenants_some: EnvironmentTenantWhereInput
  tenants_none: EnvironmentTenantWhereInput
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
  code: String
}

scalar DateTime

type Environment {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
  service: Service!
  tenants(where: EnvironmentTenantWhereInput, orderBy: EnvironmentTenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnvironmentTenant!]
  components(where: ComponentInstanceWhereInput, orderBy: ComponentInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentInstance!]
}

type EnvironmentConnection {
  pageInfo: PageInfo!
  edges: [EnvironmentEdge]!
  aggregate: AggregateEnvironment!
}

input EnvironmentCreateInput {
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
  service: ServiceCreateOneWithoutEnvironmentsInput!
  tenants: EnvironmentTenantCreateManyWithoutEnvironmentInput
  components: ComponentInstanceCreateManyWithoutEnvironmentInput
}

input EnvironmentCreateManyWithoutServiceInput {
  create: [EnvironmentCreateWithoutServiceInput!]
  connect: [EnvironmentWhereUniqueInput!]
}

input EnvironmentCreateOneWithoutComponentsInput {
  create: EnvironmentCreateWithoutComponentsInput
  connect: EnvironmentWhereUniqueInput
}

input EnvironmentCreateOneWithoutTenantsInput {
  create: EnvironmentCreateWithoutTenantsInput
  connect: EnvironmentWhereUniqueInput
}

input EnvironmentCreateWithoutComponentsInput {
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
  service: ServiceCreateOneWithoutEnvironmentsInput!
  tenants: EnvironmentTenantCreateManyWithoutEnvironmentInput
}

input EnvironmentCreateWithoutServiceInput {
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
  tenants: EnvironmentTenantCreateManyWithoutEnvironmentInput
  components: ComponentInstanceCreateManyWithoutEnvironmentInput
}

input EnvironmentCreateWithoutTenantsInput {
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
  service: ServiceCreateOneWithoutEnvironmentsInput!
  components: ComponentInstanceCreateManyWithoutEnvironmentInput
}

type EnvironmentEdge {
  node: Environment!
  cursor: String!
}

enum EnvironmentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  description_ASC
  description_DESC
  region_ASC
  region_DESC
  classification_ASC
  classification_DESC
}

type EnvironmentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
  region: String
  classification: String!
}

input EnvironmentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  classification: String
  classification_not: String
  classification_in: [String!]
  classification_not_in: [String!]
  classification_lt: String
  classification_lte: String
  classification_gt: String
  classification_gte: String
  classification_contains: String
  classification_not_contains: String
  classification_starts_with: String
  classification_not_starts_with: String
  classification_ends_with: String
  classification_not_ends_with: String
  AND: [EnvironmentScalarWhereInput!]
  OR: [EnvironmentScalarWhereInput!]
  NOT: [EnvironmentScalarWhereInput!]
}

type EnvironmentSubscriptionPayload {
  mutation: MutationType!
  node: Environment
  updatedFields: [String!]
  previousValues: EnvironmentPreviousValues
}

input EnvironmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EnvironmentWhereInput
  AND: [EnvironmentSubscriptionWhereInput!]
  OR: [EnvironmentSubscriptionWhereInput!]
  NOT: [EnvironmentSubscriptionWhereInput!]
}

type EnvironmentTenant {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: Customer!
  environment: Environment!
  attributes(where: TenantAttributeWhereInput, orderBy: TenantAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TenantAttribute!]
}

type EnvironmentTenantConnection {
  pageInfo: PageInfo!
  edges: [EnvironmentTenantEdge]!
  aggregate: AggregateEnvironmentTenant!
}

input EnvironmentTenantCreateInput {
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerCreateOneWithoutTenantsInput!
  environment: EnvironmentCreateOneWithoutTenantsInput!
  attributes: TenantAttributeCreateManyWithoutTenantInput
}

input EnvironmentTenantCreateManyWithoutCustomerInput {
  create: [EnvironmentTenantCreateWithoutCustomerInput!]
  connect: [EnvironmentTenantWhereUniqueInput!]
}

input EnvironmentTenantCreateManyWithoutEnvironmentInput {
  create: [EnvironmentTenantCreateWithoutEnvironmentInput!]
  connect: [EnvironmentTenantWhereUniqueInput!]
}

input EnvironmentTenantCreateOneWithoutAttributesInput {
  create: EnvironmentTenantCreateWithoutAttributesInput
  connect: EnvironmentTenantWhereUniqueInput
}

input EnvironmentTenantCreateWithoutAttributesInput {
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerCreateOneWithoutTenantsInput!
  environment: EnvironmentCreateOneWithoutTenantsInput!
}

input EnvironmentTenantCreateWithoutCustomerInput {
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  environment: EnvironmentCreateOneWithoutTenantsInput!
  attributes: TenantAttributeCreateManyWithoutTenantInput
}

input EnvironmentTenantCreateWithoutEnvironmentInput {
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerCreateOneWithoutTenantsInput!
  attributes: TenantAttributeCreateManyWithoutTenantInput
}

type EnvironmentTenantEdge {
  node: EnvironmentTenant!
  cursor: String!
}

enum EnvironmentTenantOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  class_ASC
  class_DESC
  primaryContactEmail_ASC
  primaryContactEmail_DESC
  tenantCreationDate_ASC
  tenantCreationDate_DESC
}

type EnvironmentTenantPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
}

input EnvironmentTenantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  class: String
  class_not: String
  class_in: [String!]
  class_not_in: [String!]
  class_lt: String
  class_lte: String
  class_gt: String
  class_gte: String
  class_contains: String
  class_not_contains: String
  class_starts_with: String
  class_not_starts_with: String
  class_ends_with: String
  class_not_ends_with: String
  primaryContactEmail: String
  primaryContactEmail_not: String
  primaryContactEmail_in: [String!]
  primaryContactEmail_not_in: [String!]
  primaryContactEmail_lt: String
  primaryContactEmail_lte: String
  primaryContactEmail_gt: String
  primaryContactEmail_gte: String
  primaryContactEmail_contains: String
  primaryContactEmail_not_contains: String
  primaryContactEmail_starts_with: String
  primaryContactEmail_not_starts_with: String
  primaryContactEmail_ends_with: String
  primaryContactEmail_not_ends_with: String
  tenantCreationDate: DateTime
  tenantCreationDate_not: DateTime
  tenantCreationDate_in: [DateTime!]
  tenantCreationDate_not_in: [DateTime!]
  tenantCreationDate_lt: DateTime
  tenantCreationDate_lte: DateTime
  tenantCreationDate_gt: DateTime
  tenantCreationDate_gte: DateTime
  AND: [EnvironmentTenantScalarWhereInput!]
  OR: [EnvironmentTenantScalarWhereInput!]
  NOT: [EnvironmentTenantScalarWhereInput!]
}

type EnvironmentTenantSubscriptionPayload {
  mutation: MutationType!
  node: EnvironmentTenant
  updatedFields: [String!]
  previousValues: EnvironmentTenantPreviousValues
}

input EnvironmentTenantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EnvironmentTenantWhereInput
  AND: [EnvironmentTenantSubscriptionWhereInput!]
  OR: [EnvironmentTenantSubscriptionWhereInput!]
  NOT: [EnvironmentTenantSubscriptionWhereInput!]
}

input EnvironmentTenantUpdateInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerUpdateOneRequiredWithoutTenantsInput
  environment: EnvironmentUpdateOneRequiredWithoutTenantsInput
  attributes: TenantAttributeUpdateManyWithoutTenantInput
}

input EnvironmentTenantUpdateManyDataInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
}

input EnvironmentTenantUpdateManyMutationInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
}

input EnvironmentTenantUpdateManyWithoutCustomerInput {
  create: [EnvironmentTenantCreateWithoutCustomerInput!]
  delete: [EnvironmentTenantWhereUniqueInput!]
  connect: [EnvironmentTenantWhereUniqueInput!]
  disconnect: [EnvironmentTenantWhereUniqueInput!]
  update: [EnvironmentTenantUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [EnvironmentTenantUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [EnvironmentTenantScalarWhereInput!]
  updateMany: [EnvironmentTenantUpdateManyWithWhereNestedInput!]
}

input EnvironmentTenantUpdateManyWithoutEnvironmentInput {
  create: [EnvironmentTenantCreateWithoutEnvironmentInput!]
  delete: [EnvironmentTenantWhereUniqueInput!]
  connect: [EnvironmentTenantWhereUniqueInput!]
  disconnect: [EnvironmentTenantWhereUniqueInput!]
  update: [EnvironmentTenantUpdateWithWhereUniqueWithoutEnvironmentInput!]
  upsert: [EnvironmentTenantUpsertWithWhereUniqueWithoutEnvironmentInput!]
  deleteMany: [EnvironmentTenantScalarWhereInput!]
  updateMany: [EnvironmentTenantUpdateManyWithWhereNestedInput!]
}

input EnvironmentTenantUpdateManyWithWhereNestedInput {
  where: EnvironmentTenantScalarWhereInput!
  data: EnvironmentTenantUpdateManyDataInput!
}

input EnvironmentTenantUpdateOneRequiredWithoutAttributesInput {
  create: EnvironmentTenantCreateWithoutAttributesInput
  update: EnvironmentTenantUpdateWithoutAttributesDataInput
  upsert: EnvironmentTenantUpsertWithoutAttributesInput
  connect: EnvironmentTenantWhereUniqueInput
}

input EnvironmentTenantUpdateWithoutAttributesDataInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerUpdateOneRequiredWithoutTenantsInput
  environment: EnvironmentUpdateOneRequiredWithoutTenantsInput
}

input EnvironmentTenantUpdateWithoutCustomerDataInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  environment: EnvironmentUpdateOneRequiredWithoutTenantsInput
  attributes: TenantAttributeUpdateManyWithoutTenantInput
}

input EnvironmentTenantUpdateWithoutEnvironmentDataInput {
  name: String
  code: String
  class: String
  primaryContactEmail: String
  tenantCreationDate: DateTime
  customer: CustomerUpdateOneRequiredWithoutTenantsInput
  attributes: TenantAttributeUpdateManyWithoutTenantInput
}

input EnvironmentTenantUpdateWithWhereUniqueWithoutCustomerInput {
  where: EnvironmentTenantWhereUniqueInput!
  data: EnvironmentTenantUpdateWithoutCustomerDataInput!
}

input EnvironmentTenantUpdateWithWhereUniqueWithoutEnvironmentInput {
  where: EnvironmentTenantWhereUniqueInput!
  data: EnvironmentTenantUpdateWithoutEnvironmentDataInput!
}

input EnvironmentTenantUpsertWithoutAttributesInput {
  update: EnvironmentTenantUpdateWithoutAttributesDataInput!
  create: EnvironmentTenantCreateWithoutAttributesInput!
}

input EnvironmentTenantUpsertWithWhereUniqueWithoutCustomerInput {
  where: EnvironmentTenantWhereUniqueInput!
  update: EnvironmentTenantUpdateWithoutCustomerDataInput!
  create: EnvironmentTenantCreateWithoutCustomerInput!
}

input EnvironmentTenantUpsertWithWhereUniqueWithoutEnvironmentInput {
  where: EnvironmentTenantWhereUniqueInput!
  update: EnvironmentTenantUpdateWithoutEnvironmentDataInput!
  create: EnvironmentTenantCreateWithoutEnvironmentInput!
}

input EnvironmentTenantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  class: String
  class_not: String
  class_in: [String!]
  class_not_in: [String!]
  class_lt: String
  class_lte: String
  class_gt: String
  class_gte: String
  class_contains: String
  class_not_contains: String
  class_starts_with: String
  class_not_starts_with: String
  class_ends_with: String
  class_not_ends_with: String
  primaryContactEmail: String
  primaryContactEmail_not: String
  primaryContactEmail_in: [String!]
  primaryContactEmail_not_in: [String!]
  primaryContactEmail_lt: String
  primaryContactEmail_lte: String
  primaryContactEmail_gt: String
  primaryContactEmail_gte: String
  primaryContactEmail_contains: String
  primaryContactEmail_not_contains: String
  primaryContactEmail_starts_with: String
  primaryContactEmail_not_starts_with: String
  primaryContactEmail_ends_with: String
  primaryContactEmail_not_ends_with: String
  tenantCreationDate: DateTime
  tenantCreationDate_not: DateTime
  tenantCreationDate_in: [DateTime!]
  tenantCreationDate_not_in: [DateTime!]
  tenantCreationDate_lt: DateTime
  tenantCreationDate_lte: DateTime
  tenantCreationDate_gt: DateTime
  tenantCreationDate_gte: DateTime
  customer: CustomerWhereInput
  environment: EnvironmentWhereInput
  attributes_every: TenantAttributeWhereInput
  attributes_some: TenantAttributeWhereInput
  attributes_none: TenantAttributeWhereInput
  AND: [EnvironmentTenantWhereInput!]
  OR: [EnvironmentTenantWhereInput!]
  NOT: [EnvironmentTenantWhereInput!]
}

input EnvironmentTenantWhereUniqueInput {
  id: ID
  code: String
}

input EnvironmentUpdateInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
  service: ServiceUpdateOneRequiredWithoutEnvironmentsInput
  tenants: EnvironmentTenantUpdateManyWithoutEnvironmentInput
  components: ComponentInstanceUpdateManyWithoutEnvironmentInput
}

input EnvironmentUpdateManyDataInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
}

input EnvironmentUpdateManyMutationInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
}

input EnvironmentUpdateManyWithoutServiceInput {
  create: [EnvironmentCreateWithoutServiceInput!]
  delete: [EnvironmentWhereUniqueInput!]
  connect: [EnvironmentWhereUniqueInput!]
  disconnect: [EnvironmentWhereUniqueInput!]
  update: [EnvironmentUpdateWithWhereUniqueWithoutServiceInput!]
  upsert: [EnvironmentUpsertWithWhereUniqueWithoutServiceInput!]
  deleteMany: [EnvironmentScalarWhereInput!]
  updateMany: [EnvironmentUpdateManyWithWhereNestedInput!]
}

input EnvironmentUpdateManyWithWhereNestedInput {
  where: EnvironmentScalarWhereInput!
  data: EnvironmentUpdateManyDataInput!
}

input EnvironmentUpdateOneRequiredWithoutComponentsInput {
  create: EnvironmentCreateWithoutComponentsInput
  update: EnvironmentUpdateWithoutComponentsDataInput
  upsert: EnvironmentUpsertWithoutComponentsInput
  connect: EnvironmentWhereUniqueInput
}

input EnvironmentUpdateOneRequiredWithoutTenantsInput {
  create: EnvironmentCreateWithoutTenantsInput
  update: EnvironmentUpdateWithoutTenantsDataInput
  upsert: EnvironmentUpsertWithoutTenantsInput
  connect: EnvironmentWhereUniqueInput
}

input EnvironmentUpdateWithoutComponentsDataInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
  service: ServiceUpdateOneRequiredWithoutEnvironmentsInput
  tenants: EnvironmentTenantUpdateManyWithoutEnvironmentInput
}

input EnvironmentUpdateWithoutServiceDataInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
  tenants: EnvironmentTenantUpdateManyWithoutEnvironmentInput
  components: ComponentInstanceUpdateManyWithoutEnvironmentInput
}

input EnvironmentUpdateWithoutTenantsDataInput {
  name: String
  code: String
  description: String
  region: String
  classification: String
  service: ServiceUpdateOneRequiredWithoutEnvironmentsInput
  components: ComponentInstanceUpdateManyWithoutEnvironmentInput
}

input EnvironmentUpdateWithWhereUniqueWithoutServiceInput {
  where: EnvironmentWhereUniqueInput!
  data: EnvironmentUpdateWithoutServiceDataInput!
}

input EnvironmentUpsertWithoutComponentsInput {
  update: EnvironmentUpdateWithoutComponentsDataInput!
  create: EnvironmentCreateWithoutComponentsInput!
}

input EnvironmentUpsertWithoutTenantsInput {
  update: EnvironmentUpdateWithoutTenantsDataInput!
  create: EnvironmentCreateWithoutTenantsInput!
}

input EnvironmentUpsertWithWhereUniqueWithoutServiceInput {
  where: EnvironmentWhereUniqueInput!
  update: EnvironmentUpdateWithoutServiceDataInput!
  create: EnvironmentCreateWithoutServiceInput!
}

input EnvironmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  classification: String
  classification_not: String
  classification_in: [String!]
  classification_not_in: [String!]
  classification_lt: String
  classification_lte: String
  classification_gt: String
  classification_gte: String
  classification_contains: String
  classification_not_contains: String
  classification_starts_with: String
  classification_not_starts_with: String
  classification_ends_with: String
  classification_not_ends_with: String
  service: ServiceWhereInput
  tenants_every: EnvironmentTenantWhereInput
  tenants_some: EnvironmentTenantWhereInput
  tenants_none: EnvironmentTenantWhereInput
  components_every: ComponentInstanceWhereInput
  components_some: ComponentInstanceWhereInput
  components_none: ComponentInstanceWhereInput
  AND: [EnvironmentWhereInput!]
  OR: [EnvironmentWhereInput!]
  NOT: [EnvironmentWhereInput!]
}

input EnvironmentWhereUniqueInput {
  id: ID
  code: String
}

scalar Long

type Mutation {
  createArchitectureDefinition(data: ArchitectureDefinitionCreateInput!): ArchitectureDefinition!
  updateArchitectureDefinition(data: ArchitectureDefinitionUpdateInput!, where: ArchitectureDefinitionWhereUniqueInput!): ArchitectureDefinition
  updateManyArchitectureDefinitions(data: ArchitectureDefinitionUpdateManyMutationInput!, where: ArchitectureDefinitionWhereInput): BatchPayload!
  upsertArchitectureDefinition(where: ArchitectureDefinitionWhereUniqueInput!, create: ArchitectureDefinitionCreateInput!, update: ArchitectureDefinitionUpdateInput!): ArchitectureDefinition!
  deleteArchitectureDefinition(where: ArchitectureDefinitionWhereUniqueInput!): ArchitectureDefinition
  deleteManyArchitectureDefinitions(where: ArchitectureDefinitionWhereInput): BatchPayload!
  createArchitectureTier(data: ArchitectureTierCreateInput!): ArchitectureTier!
  updateArchitectureTier(data: ArchitectureTierUpdateInput!, where: ArchitectureTierWhereUniqueInput!): ArchitectureTier
  updateManyArchitectureTiers(data: ArchitectureTierUpdateManyMutationInput!, where: ArchitectureTierWhereInput): BatchPayload!
  upsertArchitectureTier(where: ArchitectureTierWhereUniqueInput!, create: ArchitectureTierCreateInput!, update: ArchitectureTierUpdateInput!): ArchitectureTier!
  deleteArchitectureTier(where: ArchitectureTierWhereUniqueInput!): ArchitectureTier
  deleteManyArchitectureTiers(where: ArchitectureTierWhereInput): BatchPayload!
  createArchitectureType(data: ArchitectureTypeCreateInput!): ArchitectureType!
  updateArchitectureType(data: ArchitectureTypeUpdateInput!, where: ArchitectureTypeWhereUniqueInput!): ArchitectureType
  updateManyArchitectureTypes(data: ArchitectureTypeUpdateManyMutationInput!, where: ArchitectureTypeWhereInput): BatchPayload!
  upsertArchitectureType(where: ArchitectureTypeWhereUniqueInput!, create: ArchitectureTypeCreateInput!, update: ArchitectureTypeUpdateInput!): ArchitectureType!
  deleteArchitectureType(where: ArchitectureTypeWhereUniqueInput!): ArchitectureType
  deleteManyArchitectureTypes(where: ArchitectureTypeWhereInput): BatchPayload!
  createComponentAttribute(data: ComponentAttributeCreateInput!): ComponentAttribute!
  updateComponentAttribute(data: ComponentAttributeUpdateInput!, where: ComponentAttributeWhereUniqueInput!): ComponentAttribute
  updateManyComponentAttributes(data: ComponentAttributeUpdateManyMutationInput!, where: ComponentAttributeWhereInput): BatchPayload!
  upsertComponentAttribute(where: ComponentAttributeWhereUniqueInput!, create: ComponentAttributeCreateInput!, update: ComponentAttributeUpdateInput!): ComponentAttribute!
  deleteComponentAttribute(where: ComponentAttributeWhereUniqueInput!): ComponentAttribute
  deleteManyComponentAttributes(where: ComponentAttributeWhereInput): BatchPayload!
  createComponentInstance(data: ComponentInstanceCreateInput!): ComponentInstance!
  updateComponentInstance(data: ComponentInstanceUpdateInput!, where: ComponentInstanceWhereUniqueInput!): ComponentInstance
  updateManyComponentInstances(data: ComponentInstanceUpdateManyMutationInput!, where: ComponentInstanceWhereInput): BatchPayload!
  upsertComponentInstance(where: ComponentInstanceWhereUniqueInput!, create: ComponentInstanceCreateInput!, update: ComponentInstanceUpdateInput!): ComponentInstance!
  deleteComponentInstance(where: ComponentInstanceWhereUniqueInput!): ComponentInstance
  deleteManyComponentInstances(where: ComponentInstanceWhereInput): BatchPayload!
  createComponentTemplate(data: ComponentTemplateCreateInput!): ComponentTemplate!
  updateComponentTemplate(data: ComponentTemplateUpdateInput!, where: ComponentTemplateWhereUniqueInput!): ComponentTemplate
  updateManyComponentTemplates(data: ComponentTemplateUpdateManyMutationInput!, where: ComponentTemplateWhereInput): BatchPayload!
  upsertComponentTemplate(where: ComponentTemplateWhereUniqueInput!, create: ComponentTemplateCreateInput!, update: ComponentTemplateUpdateInput!): ComponentTemplate!
  deleteComponentTemplate(where: ComponentTemplateWhereUniqueInput!): ComponentTemplate
  deleteManyComponentTemplates(where: ComponentTemplateWhereInput): BatchPayload!
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createCustomerContact(data: CustomerContactCreateInput!): CustomerContact!
  updateCustomerContact(data: CustomerContactUpdateInput!, where: CustomerContactWhereUniqueInput!): CustomerContact
  updateManyCustomerContacts(data: CustomerContactUpdateManyMutationInput!, where: CustomerContactWhereInput): BatchPayload!
  upsertCustomerContact(where: CustomerContactWhereUniqueInput!, create: CustomerContactCreateInput!, update: CustomerContactUpdateInput!): CustomerContact!
  deleteCustomerContact(where: CustomerContactWhereUniqueInput!): CustomerContact
  deleteManyCustomerContacts(where: CustomerContactWhereInput): BatchPayload!
  createEnvironment(data: EnvironmentCreateInput!): Environment!
  updateEnvironment(data: EnvironmentUpdateInput!, where: EnvironmentWhereUniqueInput!): Environment
  updateManyEnvironments(data: EnvironmentUpdateManyMutationInput!, where: EnvironmentWhereInput): BatchPayload!
  upsertEnvironment(where: EnvironmentWhereUniqueInput!, create: EnvironmentCreateInput!, update: EnvironmentUpdateInput!): Environment!
  deleteEnvironment(where: EnvironmentWhereUniqueInput!): Environment
  deleteManyEnvironments(where: EnvironmentWhereInput): BatchPayload!
  createEnvironmentTenant(data: EnvironmentTenantCreateInput!): EnvironmentTenant!
  updateEnvironmentTenant(data: EnvironmentTenantUpdateInput!, where: EnvironmentTenantWhereUniqueInput!): EnvironmentTenant
  updateManyEnvironmentTenants(data: EnvironmentTenantUpdateManyMutationInput!, where: EnvironmentTenantWhereInput): BatchPayload!
  upsertEnvironmentTenant(where: EnvironmentTenantWhereUniqueInput!, create: EnvironmentTenantCreateInput!, update: EnvironmentTenantUpdateInput!): EnvironmentTenant!
  deleteEnvironmentTenant(where: EnvironmentTenantWhereUniqueInput!): EnvironmentTenant
  deleteManyEnvironmentTenants(where: EnvironmentTenantWhereInput): BatchPayload!
  createService(data: ServiceCreateInput!): Service!
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateManyServices(data: ServiceUpdateManyMutationInput!, where: ServiceWhereInput): BatchPayload!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
  createTenant(data: TenantCreateInput!): Tenant!
  updateTenant(data: TenantUpdateInput!, where: TenantWhereUniqueInput!): Tenant
  updateManyTenants(data: TenantUpdateManyMutationInput!, where: TenantWhereInput): BatchPayload!
  upsertTenant(where: TenantWhereUniqueInput!, create: TenantCreateInput!, update: TenantUpdateInput!): Tenant!
  deleteTenant(where: TenantWhereUniqueInput!): Tenant
  deleteManyTenants(where: TenantWhereInput): BatchPayload!
  createTenantAttribute(data: TenantAttributeCreateInput!): TenantAttribute!
  updateTenantAttribute(data: TenantAttributeUpdateInput!, where: TenantAttributeWhereUniqueInput!): TenantAttribute
  updateManyTenantAttributes(data: TenantAttributeUpdateManyMutationInput!, where: TenantAttributeWhereInput): BatchPayload!
  upsertTenantAttribute(where: TenantAttributeWhereUniqueInput!, create: TenantAttributeCreateInput!, update: TenantAttributeUpdateInput!): TenantAttribute!
  deleteTenantAttribute(where: TenantAttributeWhereUniqueInput!): TenantAttribute
  deleteManyTenantAttributes(where: TenantAttributeWhereInput): BatchPayload!
  createTenantRole(data: TenantRoleCreateInput!): TenantRole!
  updateTenantRole(data: TenantRoleUpdateInput!, where: TenantRoleWhereUniqueInput!): TenantRole
  updateManyTenantRoles(data: TenantRoleUpdateManyMutationInput!, where: TenantRoleWhereInput): BatchPayload!
  upsertTenantRole(where: TenantRoleWhereUniqueInput!, create: TenantRoleCreateInput!, update: TenantRoleUpdateInput!): TenantRole!
  deleteTenantRole(where: TenantRoleWhereUniqueInput!): TenantRole
  deleteManyTenantRoles(where: TenantRoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  architectureDefinition(where: ArchitectureDefinitionWhereUniqueInput!): ArchitectureDefinition
  architectureDefinitions(where: ArchitectureDefinitionWhereInput, orderBy: ArchitectureDefinitionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ArchitectureDefinition]!
  architectureDefinitionsConnection(where: ArchitectureDefinitionWhereInput, orderBy: ArchitectureDefinitionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArchitectureDefinitionConnection!
  architectureTier(where: ArchitectureTierWhereUniqueInput!): ArchitectureTier
  architectureTiers(where: ArchitectureTierWhereInput, orderBy: ArchitectureTierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ArchitectureTier]!
  architectureTiersConnection(where: ArchitectureTierWhereInput, orderBy: ArchitectureTierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArchitectureTierConnection!
  architectureType(where: ArchitectureTypeWhereUniqueInput!): ArchitectureType
  architectureTypes(where: ArchitectureTypeWhereInput, orderBy: ArchitectureTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ArchitectureType]!
  architectureTypesConnection(where: ArchitectureTypeWhereInput, orderBy: ArchitectureTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArchitectureTypeConnection!
  componentAttribute(where: ComponentAttributeWhereUniqueInput!): ComponentAttribute
  componentAttributes(where: ComponentAttributeWhereInput, orderBy: ComponentAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentAttribute]!
  componentAttributesConnection(where: ComponentAttributeWhereInput, orderBy: ComponentAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ComponentAttributeConnection!
  componentInstance(where: ComponentInstanceWhereUniqueInput!): ComponentInstance
  componentInstances(where: ComponentInstanceWhereInput, orderBy: ComponentInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentInstance]!
  componentInstancesConnection(where: ComponentInstanceWhereInput, orderBy: ComponentInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ComponentInstanceConnection!
  componentTemplate(where: ComponentTemplateWhereUniqueInput!): ComponentTemplate
  componentTemplates(where: ComponentTemplateWhereInput, orderBy: ComponentTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ComponentTemplate]!
  componentTemplatesConnection(where: ComponentTemplateWhereInput, orderBy: ComponentTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ComponentTemplateConnection!
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  customerContact(where: CustomerContactWhereUniqueInput!): CustomerContact
  customerContacts(where: CustomerContactWhereInput, orderBy: CustomerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomerContact]!
  customerContactsConnection(where: CustomerContactWhereInput, orderBy: CustomerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerContactConnection!
  environment(where: EnvironmentWhereUniqueInput!): Environment
  environments(where: EnvironmentWhereInput, orderBy: EnvironmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Environment]!
  environmentsConnection(where: EnvironmentWhereInput, orderBy: EnvironmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EnvironmentConnection!
  environmentTenant(where: EnvironmentTenantWhereUniqueInput!): EnvironmentTenant
  environmentTenants(where: EnvironmentTenantWhereInput, orderBy: EnvironmentTenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnvironmentTenant]!
  environmentTenantsConnection(where: EnvironmentTenantWhereInput, orderBy: EnvironmentTenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EnvironmentTenantConnection!
  service(where: ServiceWhereUniqueInput!): Service
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  tenant(where: TenantWhereUniqueInput!): Tenant
  tenants(where: TenantWhereInput, orderBy: TenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tenant]!
  tenantsConnection(where: TenantWhereInput, orderBy: TenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TenantConnection!
  tenantAttribute(where: TenantAttributeWhereUniqueInput!): TenantAttribute
  tenantAttributes(where: TenantAttributeWhereInput, orderBy: TenantAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TenantAttribute]!
  tenantAttributesConnection(where: TenantAttributeWhereInput, orderBy: TenantAttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TenantAttributeConnection!
  tenantRole(where: TenantRoleWhereUniqueInput!): TenantRole
  tenantRoles(where: TenantRoleWhereInput, orderBy: TenantRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TenantRole]!
  tenantRolesConnection(where: TenantRoleWhereInput, orderBy: TenantRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TenantRoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  MASTER_ADMIN
  TENANT_ADMIN
  TEAM_MEMBER
}

type Service {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
  status: String!
  type: String!
  version: String
  canBeRemoved: Boolean!
  dependentServices(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service!]
  environments(where: EnvironmentWhereInput, orderBy: EnvironmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Environment!]
}

type ServiceConnection {
  pageInfo: PageInfo!
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  name: String!
  code: String!
  description: String
  status: String!
  type: String!
  version: String
  canBeRemoved: Boolean
  dependentServices: ServiceCreateManyInput
  environments: EnvironmentCreateManyWithoutServiceInput
}

input ServiceCreateManyInput {
  create: [ServiceCreateInput!]
  connect: [ServiceWhereUniqueInput!]
}

input ServiceCreateOneWithoutEnvironmentsInput {
  create: ServiceCreateWithoutEnvironmentsInput
  connect: ServiceWhereUniqueInput
}

input ServiceCreateWithoutEnvironmentsInput {
  name: String!
  code: String!
  description: String
  status: String!
  type: String!
  version: String
  canBeRemoved: Boolean
  dependentServices: ServiceCreateManyInput
}

type ServiceEdge {
  node: Service!
  cursor: String!
}

enum ServiceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  description_ASC
  description_DESC
  status_ASC
  status_DESC
  type_ASC
  type_DESC
  version_ASC
  version_DESC
  canBeRemoved_ASC
  canBeRemoved_DESC
}

type ServicePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  code: String!
  description: String
  status: String!
  type: String!
  version: String
  canBeRemoved: Boolean!
}

input ServiceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  version: String
  version_not: String
  version_in: [String!]
  version_not_in: [String!]
  version_lt: String
  version_lte: String
  version_gt: String
  version_gte: String
  version_contains: String
  version_not_contains: String
  version_starts_with: String
  version_not_starts_with: String
  version_ends_with: String
  version_not_ends_with: String
  canBeRemoved: Boolean
  canBeRemoved_not: Boolean
  AND: [ServiceScalarWhereInput!]
  OR: [ServiceScalarWhereInput!]
  NOT: [ServiceScalarWhereInput!]
}

type ServiceSubscriptionPayload {
  mutation: MutationType!
  node: Service
  updatedFields: [String!]
  previousValues: ServicePreviousValues
}

input ServiceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceWhereInput
  AND: [ServiceSubscriptionWhereInput!]
  OR: [ServiceSubscriptionWhereInput!]
  NOT: [ServiceSubscriptionWhereInput!]
}

input ServiceUpdateDataInput {
  name: String
  code: String
  description: String
  status: String
  type: String
  version: String
  canBeRemoved: Boolean
  dependentServices: ServiceUpdateManyInput
  environments: EnvironmentUpdateManyWithoutServiceInput
}

input ServiceUpdateInput {
  name: String
  code: String
  description: String
  status: String
  type: String
  version: String
  canBeRemoved: Boolean
  dependentServices: ServiceUpdateManyInput
  environments: EnvironmentUpdateManyWithoutServiceInput
}

input ServiceUpdateManyDataInput {
  name: String
  code: String
  description: String
  status: String
  type: String
  version: String
  canBeRemoved: Boolean
}

input ServiceUpdateManyInput {
  create: [ServiceCreateInput!]
  update: [ServiceUpdateWithWhereUniqueNestedInput!]
  upsert: [ServiceUpsertWithWhereUniqueNestedInput!]
  delete: [ServiceWhereUniqueInput!]
  connect: [ServiceWhereUniqueInput!]
  disconnect: [ServiceWhereUniqueInput!]
  deleteMany: [ServiceScalarWhereInput!]
  updateMany: [ServiceUpdateManyWithWhereNestedInput!]
}

input ServiceUpdateManyMutationInput {
  name: String
  code: String
  description: String
  status: String
  type: String
  version: String
  canBeRemoved: Boolean
}

input ServiceUpdateManyWithWhereNestedInput {
  where: ServiceScalarWhereInput!
  data: ServiceUpdateManyDataInput!
}

input ServiceUpdateOneRequiredWithoutEnvironmentsInput {
  create: ServiceCreateWithoutEnvironmentsInput
  update: ServiceUpdateWithoutEnvironmentsDataInput
  upsert: ServiceUpsertWithoutEnvironmentsInput
  connect: ServiceWhereUniqueInput
}

input ServiceUpdateWithoutEnvironmentsDataInput {
  name: String
  code: String
  description: String
  status: String
  type: String
  version: String
  canBeRemoved: Boolean
  dependentServices: ServiceUpdateManyInput
}

input ServiceUpdateWithWhereUniqueNestedInput {
  where: ServiceWhereUniqueInput!
  data: ServiceUpdateDataInput!
}

input ServiceUpsertWithoutEnvironmentsInput {
  update: ServiceUpdateWithoutEnvironmentsDataInput!
  create: ServiceCreateWithoutEnvironmentsInput!
}

input ServiceUpsertWithWhereUniqueNestedInput {
  where: ServiceWhereUniqueInput!
  update: ServiceUpdateDataInput!
  create: ServiceCreateInput!
}

input ServiceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  version: String
  version_not: String
  version_in: [String!]
  version_not_in: [String!]
  version_lt: String
  version_lte: String
  version_gt: String
  version_gte: String
  version_contains: String
  version_not_contains: String
  version_starts_with: String
  version_not_starts_with: String
  version_ends_with: String
  version_not_ends_with: String
  canBeRemoved: Boolean
  canBeRemoved_not: Boolean
  dependentServices_every: ServiceWhereInput
  dependentServices_some: ServiceWhereInput
  dependentServices_none: ServiceWhereInput
  environments_every: EnvironmentWhereInput
  environments_some: EnvironmentWhereInput
  environments_none: EnvironmentWhereInput
  AND: [ServiceWhereInput!]
  OR: [ServiceWhereInput!]
  NOT: [ServiceWhereInput!]
}

input ServiceWhereUniqueInput {
  id: ID
  code: String
}

type Subscription {
  architectureDefinition(where: ArchitectureDefinitionSubscriptionWhereInput): ArchitectureDefinitionSubscriptionPayload
  architectureTier(where: ArchitectureTierSubscriptionWhereInput): ArchitectureTierSubscriptionPayload
  architectureType(where: ArchitectureTypeSubscriptionWhereInput): ArchitectureTypeSubscriptionPayload
  componentAttribute(where: ComponentAttributeSubscriptionWhereInput): ComponentAttributeSubscriptionPayload
  componentInstance(where: ComponentInstanceSubscriptionWhereInput): ComponentInstanceSubscriptionPayload
  componentTemplate(where: ComponentTemplateSubscriptionWhereInput): ComponentTemplateSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  customerContact(where: CustomerContactSubscriptionWhereInput): CustomerContactSubscriptionPayload
  environment(where: EnvironmentSubscriptionWhereInput): EnvironmentSubscriptionPayload
  environmentTenant(where: EnvironmentTenantSubscriptionWhereInput): EnvironmentTenantSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
  tenant(where: TenantSubscriptionWhereInput): TenantSubscriptionPayload
  tenantAttribute(where: TenantAttributeSubscriptionWhereInput): TenantAttributeSubscriptionPayload
  tenantRole(where: TenantRoleSubscriptionWhereInput): TenantRoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tenant {
  id: ID!
  name: String!
  description: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type TenantAttribute {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parameter: String!
  value: String!
  tenant: EnvironmentTenant!
}

type TenantAttributeConnection {
  pageInfo: PageInfo!
  edges: [TenantAttributeEdge]!
  aggregate: AggregateTenantAttribute!
}

input TenantAttributeCreateInput {
  parameter: String!
  value: String!
  tenant: EnvironmentTenantCreateOneWithoutAttributesInput!
}

input TenantAttributeCreateManyWithoutTenantInput {
  create: [TenantAttributeCreateWithoutTenantInput!]
  connect: [TenantAttributeWhereUniqueInput!]
}

input TenantAttributeCreateWithoutTenantInput {
  parameter: String!
  value: String!
}

type TenantAttributeEdge {
  node: TenantAttribute!
  cursor: String!
}

enum TenantAttributeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  parameter_ASC
  parameter_DESC
  value_ASC
  value_DESC
}

type TenantAttributePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parameter: String!
  value: String!
}

input TenantAttributeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  parameter: String
  parameter_not: String
  parameter_in: [String!]
  parameter_not_in: [String!]
  parameter_lt: String
  parameter_lte: String
  parameter_gt: String
  parameter_gte: String
  parameter_contains: String
  parameter_not_contains: String
  parameter_starts_with: String
  parameter_not_starts_with: String
  parameter_ends_with: String
  parameter_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [TenantAttributeScalarWhereInput!]
  OR: [TenantAttributeScalarWhereInput!]
  NOT: [TenantAttributeScalarWhereInput!]
}

type TenantAttributeSubscriptionPayload {
  mutation: MutationType!
  node: TenantAttribute
  updatedFields: [String!]
  previousValues: TenantAttributePreviousValues
}

input TenantAttributeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TenantAttributeWhereInput
  AND: [TenantAttributeSubscriptionWhereInput!]
  OR: [TenantAttributeSubscriptionWhereInput!]
  NOT: [TenantAttributeSubscriptionWhereInput!]
}

input TenantAttributeUpdateInput {
  parameter: String
  value: String
  tenant: EnvironmentTenantUpdateOneRequiredWithoutAttributesInput
}

input TenantAttributeUpdateManyDataInput {
  parameter: String
  value: String
}

input TenantAttributeUpdateManyMutationInput {
  parameter: String
  value: String
}

input TenantAttributeUpdateManyWithoutTenantInput {
  create: [TenantAttributeCreateWithoutTenantInput!]
  delete: [TenantAttributeWhereUniqueInput!]
  connect: [TenantAttributeWhereUniqueInput!]
  disconnect: [TenantAttributeWhereUniqueInput!]
  update: [TenantAttributeUpdateWithWhereUniqueWithoutTenantInput!]
  upsert: [TenantAttributeUpsertWithWhereUniqueWithoutTenantInput!]
  deleteMany: [TenantAttributeScalarWhereInput!]
  updateMany: [TenantAttributeUpdateManyWithWhereNestedInput!]
}

input TenantAttributeUpdateManyWithWhereNestedInput {
  where: TenantAttributeScalarWhereInput!
  data: TenantAttributeUpdateManyDataInput!
}

input TenantAttributeUpdateWithoutTenantDataInput {
  parameter: String
  value: String
}

input TenantAttributeUpdateWithWhereUniqueWithoutTenantInput {
  where: TenantAttributeWhereUniqueInput!
  data: TenantAttributeUpdateWithoutTenantDataInput!
}

input TenantAttributeUpsertWithWhereUniqueWithoutTenantInput {
  where: TenantAttributeWhereUniqueInput!
  update: TenantAttributeUpdateWithoutTenantDataInput!
  create: TenantAttributeCreateWithoutTenantInput!
}

input TenantAttributeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  parameter: String
  parameter_not: String
  parameter_in: [String!]
  parameter_not_in: [String!]
  parameter_lt: String
  parameter_lte: String
  parameter_gt: String
  parameter_gte: String
  parameter_contains: String
  parameter_not_contains: String
  parameter_starts_with: String
  parameter_not_starts_with: String
  parameter_ends_with: String
  parameter_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  tenant: EnvironmentTenantWhereInput
  AND: [TenantAttributeWhereInput!]
  OR: [TenantAttributeWhereInput!]
  NOT: [TenantAttributeWhereInput!]
}

input TenantAttributeWhereUniqueInput {
  id: ID
  parameter: String
}

type TenantConnection {
  pageInfo: PageInfo!
  edges: [TenantEdge]!
  aggregate: AggregateTenant!
}

input TenantCreateInput {
  name: String!
  description: String
  users: UserCreateManyInput
}

input TenantCreateOneInput {
  create: TenantCreateInput
  connect: TenantWhereUniqueInput
}

type TenantEdge {
  node: Tenant!
  cursor: String!
}

enum TenantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TenantPreviousValues {
  id: ID!
  name: String!
  description: String
}

type TenantRole {
  id: ID!
  user: User!
  tenant: Tenant!
  role: Role!
}

type TenantRoleConnection {
  pageInfo: PageInfo!
  edges: [TenantRoleEdge]!
  aggregate: AggregateTenantRole!
}

input TenantRoleCreateInput {
  user: UserCreateOneWithoutTenantRolesInput!
  tenant: TenantCreateOneInput!
  role: Role!
}

input TenantRoleCreateManyWithoutUserInput {
  create: [TenantRoleCreateWithoutUserInput!]
  connect: [TenantRoleWhereUniqueInput!]
}

input TenantRoleCreateWithoutUserInput {
  tenant: TenantCreateOneInput!
  role: Role!
}

type TenantRoleEdge {
  node: TenantRole!
  cursor: String!
}

enum TenantRoleOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TenantRolePreviousValues {
  id: ID!
  role: Role!
}

input TenantRoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  AND: [TenantRoleScalarWhereInput!]
  OR: [TenantRoleScalarWhereInput!]
  NOT: [TenantRoleScalarWhereInput!]
}

type TenantRoleSubscriptionPayload {
  mutation: MutationType!
  node: TenantRole
  updatedFields: [String!]
  previousValues: TenantRolePreviousValues
}

input TenantRoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TenantRoleWhereInput
  AND: [TenantRoleSubscriptionWhereInput!]
  OR: [TenantRoleSubscriptionWhereInput!]
  NOT: [TenantRoleSubscriptionWhereInput!]
}

input TenantRoleUpdateInput {
  user: UserUpdateOneRequiredWithoutTenantRolesInput
  tenant: TenantUpdateOneRequiredInput
  role: Role
}

input TenantRoleUpdateManyDataInput {
  role: Role
}

input TenantRoleUpdateManyMutationInput {
  role: Role
}

input TenantRoleUpdateManyWithoutUserInput {
  create: [TenantRoleCreateWithoutUserInput!]
  delete: [TenantRoleWhereUniqueInput!]
  connect: [TenantRoleWhereUniqueInput!]
  disconnect: [TenantRoleWhereUniqueInput!]
  update: [TenantRoleUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TenantRoleUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TenantRoleScalarWhereInput!]
  updateMany: [TenantRoleUpdateManyWithWhereNestedInput!]
}

input TenantRoleUpdateManyWithWhereNestedInput {
  where: TenantRoleScalarWhereInput!
  data: TenantRoleUpdateManyDataInput!
}

input TenantRoleUpdateWithoutUserDataInput {
  tenant: TenantUpdateOneRequiredInput
  role: Role
}

input TenantRoleUpdateWithWhereUniqueWithoutUserInput {
  where: TenantRoleWhereUniqueInput!
  data: TenantRoleUpdateWithoutUserDataInput!
}

input TenantRoleUpsertWithWhereUniqueWithoutUserInput {
  where: TenantRoleWhereUniqueInput!
  update: TenantRoleUpdateWithoutUserDataInput!
  create: TenantRoleCreateWithoutUserInput!
}

input TenantRoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  tenant: TenantWhereInput
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  AND: [TenantRoleWhereInput!]
  OR: [TenantRoleWhereInput!]
  NOT: [TenantRoleWhereInput!]
}

input TenantRoleWhereUniqueInput {
  id: ID
}

type TenantSubscriptionPayload {
  mutation: MutationType!
  node: Tenant
  updatedFields: [String!]
  previousValues: TenantPreviousValues
}

input TenantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TenantWhereInput
  AND: [TenantSubscriptionWhereInput!]
  OR: [TenantSubscriptionWhereInput!]
  NOT: [TenantSubscriptionWhereInput!]
}

input TenantUpdateDataInput {
  name: String
  description: String
  users: UserUpdateManyInput
}

input TenantUpdateInput {
  name: String
  description: String
  users: UserUpdateManyInput
}

input TenantUpdateManyMutationInput {
  name: String
  description: String
}

input TenantUpdateOneRequiredInput {
  create: TenantCreateInput
  update: TenantUpdateDataInput
  upsert: TenantUpsertNestedInput
  connect: TenantWhereUniqueInput
}

input TenantUpsertNestedInput {
  update: TenantUpdateDataInput!
  create: TenantCreateInput!
}

input TenantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [TenantWhereInput!]
  OR: [TenantWhereInput!]
  NOT: [TenantWhereInput!]
}

input TenantWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  tenantRoles(where: TenantRoleWhereInput, orderBy: TenantRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TenantRole!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  tenantRoles: TenantRoleCreateManyWithoutUserInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutTenantRolesInput {
  create: UserCreateWithoutTenantRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTenantRolesInput {
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  tenantRoles: TenantRoleUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  tenantRoles: TenantRoleUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutTenantRolesInput {
  create: UserCreateWithoutTenantRolesInput
  update: UserUpdateWithoutTenantRolesDataInput
  upsert: UserUpsertWithoutTenantRolesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTenantRolesDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithoutTenantRolesInput {
  update: UserUpdateWithoutTenantRolesDataInput!
  create: UserCreateWithoutTenantRolesInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  tenantRoles_every: TenantRoleWhereInput
  tenantRoles_some: TenantRoleWhereInput
  tenantRoles_none: TenantRoleWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    