import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  GenericValue: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
};

export type Account = {
  __typename?: 'Account';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<AccountStatus>;
  serviceStatus?: Maybe<ServiceStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  sellerId?: Maybe<Scalars['ID']>;
};

export type AccountGraphNode = {
  __typename?: 'AccountGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Account>;
};

export type AccountGraphResult = {
  __typename?: 'AccountGraphResult';
  edges?: Maybe<Array<Maybe<AccountGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Deleted = 'DELETED',
}

export type ActivateAccount = {
  __typename?: 'ActivateAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type ActivateAccountCommand = {
  id?: Maybe<Scalars['String']>;
};

export type ActivateSkuChannelCommand = {
  id: Scalars['ID'];
};

export type ActivateSkuChannelMutation = {
  __typename?: 'ActivateSkuChannelMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type App = {
  __typename?: 'App';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<Maybe<AppSpecification>>>;
  secretKey?: Maybe<Scalars['String']>;
  category?: Maybe<AppCategory>;
  privacyPolicy?: Maybe<Scalars['String']>;
  termsOfService?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Maybe<AppScope>>>;
  status?: Maybe<AppStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export enum AppCategory {
  Marketplace = 'MARKETPLACE',
  Erp = 'ERP',
}

export type AppGraphNode = {
  __typename?: 'AppGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<App>;
};

export type AppGraphResult = {
  __typename?: 'AppGraphResult';
  edges?: Maybe<Array<Maybe<AppGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum AppInstallStatus {
  Installed = 'INSTALLED',
  NotInstalled = 'NOT_INSTALLED',
  RequiresUpdate = 'REQUIRES_UPDATE',
}

export enum AppScope {
  CreateSku = 'CREATE_SKU',
  UpdateSku = 'UPDATE_SKU',
  DeleteSku = 'DELETE_SKU',
}

export type AppSpecification = {
  __typename?: 'AppSpecification';
  name: Scalars['String'];
  description: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export enum AppStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export type Attribute = {
  __typename?: 'Attribute';
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Buyer = {
  __typename?: 'Buyer';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  stateRegistration?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CancelInvoiceCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type CancelInvoiceMutation = {
  __typename?: 'CancelInvoiceMutation';
  ok?: Maybe<Scalars['Boolean']>;
  invoice?: Maybe<Invoice>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type Cancellation = {
  __typename?: 'Cancellation';
  reasonText?: Maybe<Scalars['String']>;
  reason?: Maybe<CancellationReason>;
  source?: Maybe<CancellationSource>;
};

export enum CancellationReason {
  Inventory = 'INVENTORY',
  Price = 'PRICE',
  Catalog = 'CATALOG',
  Shipment = 'SHIPMENT',
  Invoice = 'INVOICE',
  Other = 'OTHER',
}

export enum CancellationSource {
  Marketplace = 'MARKETPLACE',
  Seller = 'SELLER',
}

export type CancelOrderCommand = {
  id?: Maybe<Scalars['ID']>;
  cancellation?: Maybe<CreateCancellationCommand>;
};

export type CancelOrderMutation = {
  __typename?: 'CancelOrderMutation';
  ok?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Order>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CategorySegment = {
  __typename?: 'CategorySegment';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Channel = {
  __typename?: 'Channel';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['Int']>;
  promotionalPrice?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyAddress = {
  __typename?: 'CompanyAddress';
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type CompanyData = {
  __typename?: 'CompanyData';
  /** Nome Empresarial */
  corporateName?: Maybe<Scalars['String']>;
  /** Nome Fantasia */
  name?: Maybe<Scalars['String']>;
  documentNumber?: Maybe<Scalars['String']>;
  stateRegistration?: Maybe<Scalars['String']>;
  stateRegistrationType?: Maybe<Scalars['String']>;
  isDocumentActive?: Maybe<Scalars['Boolean']>;
  isStateRegistrationActive?: Maybe<Scalars['Boolean']>;
  companyAddress?: Maybe<CompanyAddress>;
};

export type Contact = {
  __typename?: 'Contact';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  type?: Maybe<ContactType>;
};

export enum ContactType {
  Commercial = 'COMMERCIAL',
  Finance = 'FINANCE',
  Technology = 'TECHNOLOGY',
}

export type CreateAccount = {
  __typename?: 'CreateAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type CreateAccountCommand = {
  name?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['String']>;
  serviceStatus?: Maybe<ServiceStatus>;
};

export type CreateAttributeCommand = {
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Boolean']>;
};

export type CreateCancellationCommand = {
  reasonText?: Maybe<Scalars['String']>;
  source?: Maybe<CancellationSource>;
  reason?: Maybe<CancellationReason>;
};

export type CreateCategoryCommand = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateContactCommand = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  type?: Maybe<ContactType>;
};

export type CreateDeviceCommand = {
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<DeviceType>;
  token?: Maybe<Scalars['String']>;
};

export type CreateDeviceMutation = {
  __typename?: 'CreateDeviceMutation';
  ok?: Maybe<Scalars['Boolean']>;
  devices?: Maybe<Array<Maybe<Device>>>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateDocumentCommand = {
  fileUrl?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<DocumentType>;
};

export type CreateFileCommand = {
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  templateId?: Maybe<Scalars['ID']>;
};

export type CreateFileMutation = {
  __typename?: 'CreateFileMutation';
  ok?: Maybe<Scalars['Boolean']>;
  file?: Maybe<File>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateFinancialCommand = {
  bankCode?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  branchDigit?: Maybe<Scalars['String']>;
  currentAccount?: Maybe<Scalars['String']>;
  currentAccountDigit?: Maybe<Scalars['String']>;
};

export type CreateImageCommand = {
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CreateInvoiceCommand = {
  orderId?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['String']>;
  fiscalCode?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type CreateInvoiceMutation = {
  __typename?: 'CreateInvoiceMutation';
  ok?: Maybe<Scalars['Boolean']>;
  invoice?: Maybe<Invoice>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateMessageCommand = {
  author?: Maybe<Scalars['String']>;
  recipient?: Maybe<MessageRecipient>;
  content?: Maybe<Scalars['String']>;
  ticketId?: Maybe<Scalars['ID']>;
};

export type CreateMessageMutation = {
  __typename?: 'CreateMessageMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  message?: Maybe<Message>;
};

export type CreateMetadataCommand = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
};

export type CreatePackageCommand = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type CreateProductCommand = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  category?: Maybe<CreateCategoryCommand>;
  segment?: Maybe<CreateSegmentCommand>;
  brand?: Maybe<Scalars['String']>;
  globalProductId?: Maybe<Scalars['ID']>;
};

export type CreateProductMutation = {
  __typename?: 'CreateProductMutation';
  ok?: Maybe<Scalars['Boolean']>;
  product?: Maybe<SkuProduct>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateSegmentCommand = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateSellerAddressCommand = {
  city?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type CreateSellerAndUserCommand = {
  name: Scalars['String'];
  corporateName?: Maybe<Scalars['String']>;
  mcc?: Maybe<Scalars['String']>;
  stateRegistration: Scalars['String'];
  address?: Maybe<CreateSellerAddressCommand>;
  segments?: Maybe<Array<Maybe<CreateSellerSegmentCommand>>>;
  contacts: Array<Maybe<CreateContactCommand>>;
  documents: Array<Maybe<CreateDocumentCommand>>;
  financialData?: Maybe<Array<Maybe<CreateFinancialCommand>>>;
  password: Scalars['String'];
};

export type CreateSellerAndUserMutation = {
  __typename?: 'CreateSellerAndUserMutation';
  ok?: Maybe<Scalars['Boolean']>;
  seller?: Maybe<Seller>;
  user?: Maybe<KeycloakUser>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateSellerSegmentCommand = {
  name?: Maybe<Scalars['String']>;
};

export type CreateSkuChannelCommand = {
  skuSellerId: Scalars['ID'];
  productId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  channelId: Scalars['ID'];
  channelName: Scalars['String'];
  salePrice: Scalars['Int'];
  promotionalPrice: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateSkuChannelInSkuCommand = {
  channelId: Scalars['ID'];
  channelName: Scalars['String'];
  salePrice: Scalars['Int'];
  promotionalPrice: Scalars['Int'];
  isActive: Scalars['Boolean'];
};

export type CreateSkuChannelMutation = {
  __typename?: 'CreateSkuChannelMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateSkuCommand = {
  code?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['Int']>;
  promotionalPrice?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  reserved?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  product?: Maybe<CreateSkuProductCommand>;
  package?: Maybe<CreatePackageCommand>;
  category?: Maybe<CreateCategoryCommand>;
  segment?: Maybe<CreateSegmentCommand>;
  images?: Maybe<Array<Maybe<CreateImageCommand>>>;
  attributes?: Maybe<Array<Maybe<CreateAttributeCommand>>>;
  metadata?: Maybe<Array<Maybe<CreateMetadataCommand>>>;
  skuChannels?: Maybe<Array<Maybe<CreateSkuChannelInSkuCommand>>>;
  globalSkuId?: Maybe<Scalars['ID']>;
};

export type CreateSkuMutation = {
  __typename?: 'CreateSkuMutation';
  ok?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Sku>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type CreateSkuProductCommand = {
  code: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  brand?: Maybe<Scalars['String']>;
  globalProductId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  category: CreateCategoryCommand;
  segment: CreateSegmentCommand;
};

export type CreateTicketBuyerCommand = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
};

export type CreateTicketCommand = {
  orderId?: Maybe<Scalars['ID']>;
  orderCode?: Maybe<Scalars['String']>;
  buyer?: Maybe<CreateTicketBuyerCommand>;
  channelName?: Maybe<Scalars['String']>;
  platformName?: Maybe<Scalars['String']>;
};

export type CreateTicketMutation = {
  __typename?: 'CreateTicketMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  ticket?: Maybe<Ticket>;
};

export type DateRangeFilter = {
  gte?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  eq?: Maybe<Scalars['Date']>;
};

export type DateTimeRangeFilter = {
  gte?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  eq?: Maybe<Scalars['DateTime']>;
};

export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type DeleteAccountCommand = {
  id?: Maybe<Scalars['String']>;
};

export type DeleteNotificationCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type DeleteNotificationMutation = {
  __typename?: 'DeleteNotificationMutation';
  ok?: Maybe<Scalars['Boolean']>;
  notification?: Maybe<Notification>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type DeleteProductCommand = {
  id: Scalars['ID'];
};

export type DeleteProductMutation = {
  __typename?: 'DeleteProductMutation';
  ok?: Maybe<Scalars['Boolean']>;
  product?: Maybe<SkuProduct>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type DeleteSellerCommand = {
  id: Scalars['ID'];
  cancelReason?: Maybe<Scalars['String']>;
};

export type DeleteSellerMutation = {
  __typename?: 'DeleteSellerMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  seller?: Maybe<Seller>;
};

export type DeleteSkuChannelCommand = {
  id: Scalars['ID'];
};

export type DeleteSkuChannelMutation = {
  __typename?: 'DeleteSkuChannelMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type DeleteSkuCommand = {
  id: Scalars['ID'];
};

export type DeleteSkuMutation = {
  __typename?: 'DeleteSkuMutation';
  ok?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Sku>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type Device = {
  __typename?: 'Device';
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<DeviceType>;
  token?: Maybe<Scalars['String']>;
};

export enum DeviceType {
  Ios = 'IOS',
  Android = 'ANDROID',
}

export type Document = {
  __typename?: 'Document';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileUrl?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<DocumentType>;
};

export enum DocumentType {
  Cnpj = 'CNPJ',
  Cpf = 'CPF',
  DigitalCertified = 'DIGITAL_CERTIFIED',
  DriverLicense = 'DRIVER_LICENSE',
  SocialContract = 'SOCIAL_CONTRACT',
}

export type ErrorDictionary = {
  __typename?: 'ErrorDictionary';
  errors?: Maybe<Array<Maybe<InnerError>>>;
  field?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['GenericValue']>;
  object?: Maybe<Object>;
  createdAt?: Maybe<Scalars['DateTime']>;
  correlationId?: Maybe<Scalars['String']>;
};

export type EventGraphNode = {
  __typename?: 'EventGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Event>;
};

export type EventGraphResult = {
  __typename?: 'EventGraphResult';
  edges?: Maybe<Array<Maybe<EventGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Feature = {
  __typename?: 'Feature';
  id?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<FeatureStatus>;
  appName?: Maybe<Scalars['String']>;
  featureName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureGraphNode = {
  __typename?: 'FeatureGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Feature>;
};

export type FeatureGraphResult = {
  __typename?: 'FeatureGraphResult';
  edges?: Maybe<Array<Maybe<FeatureGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum FeatureStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  headers?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  totalLineCount?: Maybe<Scalars['Int']>;
  successLineCount?: Maybe<Scalars['Int']>;
  errorLineCount?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  templateId?: Maybe<Scalars['ID']>;
};

export type Financial = {
  __typename?: 'Financial';
  bankCode?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  branchDigit?: Maybe<Scalars['String']>;
  currentAccount?: Maybe<Scalars['String']>;
  currentAccountDigit?: Maybe<Scalars['String']>;
};

export type GlobalAttribute = {
  __typename?: 'GlobalAttribute';
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalCategory = {
  __typename?: 'GlobalCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  segment?: Maybe<CategorySegment>;
};

export type GlobalCategoryGraphNode = {
  __typename?: 'GlobalCategoryGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GlobalCategory>;
};

export type GlobalCategoryGraphResult = {
  __typename?: 'GlobalCategoryGraphResult';
  edges?: Maybe<Array<Maybe<GlobalCategoryGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type GlobalImage = {
  __typename?: 'GlobalImage';
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalPackage = {
  __typename?: 'GlobalPackage';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type GlobalSku = {
  __typename?: 'GlobalSku';
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  netWeight?: Maybe<Scalars['Int']>;
  marketplace?: Maybe<Marketplace>;
  package?: Maybe<GlobalPackage>;
  attributes?: Maybe<Array<Maybe<GlobalAttribute>>>;
  images?: Maybe<Array<Maybe<GlobalImage>>>;
  channels?: Maybe<Array<Maybe<Channel>>>;
  product?: Maybe<Product>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalSkuGraphNode = {
  __typename?: 'GlobalSkuGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GlobalSku>;
};

export type GlobalSkuGraphResult = {
  __typename?: 'GlobalSkuGraphResult';
  edges?: Maybe<Array<Maybe<GlobalSkuGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Image = {
  __typename?: 'Image';
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type InactivateAccount = {
  __typename?: 'InactivateAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type InactivateAccountCommand = {
  id?: Maybe<Scalars['String']>;
};

export type InactivateSkuChannelCommand = {
  id: Scalars['ID'];
};

export type InactivateSkuChannelMutation = {
  __typename?: 'InactivateSkuChannelMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type InnerError = {
  __typename?: 'InnerError';
  message?: Maybe<Scalars['String']>;
};

export type InstallAppCommand = {
  appId: Scalars['ID'];
};

export type InstallAppMutation = {
  __typename?: 'InstallAppMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type InstalledApp = {
  __typename?: 'InstalledApp';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<Maybe<AppSpecification>>>;
  secretKey?: Maybe<Scalars['String']>;
  category?: Maybe<AppCategory>;
  privacyPolicy?: Maybe<Scalars['String']>;
  termsOfService?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Maybe<AppScope>>>;
  status?: Maybe<AppStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  installStatus?: Maybe<AppInstallStatus>;
};

export type InstalledAppGraphNode = {
  __typename?: 'InstalledAppGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<InstalledApp>;
};

export type InstalledAppGraphResult = {
  __typename?: 'InstalledAppGraphResult';
  edges?: Maybe<Array<Maybe<InstalledAppGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Invoice = {
  __typename?: 'Invoice';
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<InvoiceType>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<InvoiceStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fiscalCode?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
};

export enum InvoiceStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
}

export enum InvoiceType {
  Original = 'ORIGINAL',
  Gift = 'GIFT',
}

export type KeycloakUser = {
  __typename?: 'KeycloakUser';
  id?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Marketplace = {
  __typename?: 'Marketplace';
  hierarchyCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MarkNotificationAsReadCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type MarkNotificationAsReadMutation = {
  __typename?: 'MarkNotificationAsReadMutation';
  ok?: Maybe<Scalars['Boolean']>;
  notification?: Maybe<Notification>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type Message = {
  __typename?: 'Message';
  id?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['String']>;
  recipient?: Maybe<MessageRecipient>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  readAt?: Maybe<Scalars['DateTime']>;
  sellerId?: Maybe<Scalars['ID']>;
  ticketId?: Maybe<Scalars['ID']>;
  status?: Maybe<MessageStatus>;
};

export type MessageGraphNode = {
  __typename?: 'MessageGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Message>;
};

export type MessageGraphResult = {
  __typename?: 'MessageGraphResult';
  edges?: Maybe<Array<Maybe<MessageGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum MessageRecipient {
  Seller = 'SELLER',
  Buyer = 'BUYER',
}

export enum MessageStatus {
  Read = 'READ',
  Unread = 'UNREAD',
}

export type Metadata = {
  __typename?: 'Metadata';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  activateAccount?: Maybe<ActivateAccount>;
  activateSkuChannel?: Maybe<ActivateSkuChannelMutation>;
  cancelInvoice?: Maybe<CancelInvoiceMutation>;
  cancelOrder?: Maybe<CancelOrderMutation>;
  createAccount?: Maybe<CreateAccount>;
  createDevice?: Maybe<CreateDeviceMutation>;
  createFile?: Maybe<CreateFileMutation>;
  createInvoice?: Maybe<CreateInvoiceMutation>;
  createMessage?: Maybe<CreateMessageMutation>;
  createProduct?: Maybe<CreateProductMutation>;
  createSellerAndUser?: Maybe<CreateSellerAndUserMutation>;
  createSku?: Maybe<CreateSkuMutation>;
  createSkuChannel?: Maybe<CreateSkuChannelMutation>;
  createTicket?: Maybe<CreateTicketMutation>;
  deleteAccount?: Maybe<DeleteAccount>;
  deleteNotification?: Maybe<DeleteNotificationMutation>;
  deleteProduct?: Maybe<DeleteProductMutation>;
  deleteSeller?: Maybe<DeleteSellerMutation>;
  deleteSku?: Maybe<DeleteSkuMutation>;
  deleteSkuChannel?: Maybe<DeleteSkuChannelMutation>;
  inactivateAccount?: Maybe<InactivateAccount>;
  inactivateSkuChannel?: Maybe<InactivateSkuChannelMutation>;
  installApp?: Maybe<InstallAppMutation>;
  markNotificationAsRead?: Maybe<MarkNotificationAsReadMutation>;
  replaceAccount?: Maybe<ReplaceAccount>;
  replaceSeller?: Maybe<ReplaceSellerMutation>;
  setMessageAsRead?: Maybe<SetMessageAsReadMutation>;
  setMessageAsUnread?: Maybe<SetMessageAsUnreadMutation>;
  setTicketAsClosed?: Maybe<SetTicketAsClosedMutation>;
  setTicketAsOpen?: Maybe<SetTicketAsOpenMutation>;
  setTicketAsSolved?: Maybe<SetTicketAsSolvedMutation>;
  uninstallApp?: Maybe<UninstallAppMutation>;
  updateAccount?: Maybe<UpdateAccount>;
  updateProduct?: Maybe<UpdateProductMutation>;
  updateSku?: Maybe<UpdateSkuMutation>;
  updateSkuChannelPrice?: Maybe<UpdateSkuChannelPriceMutation>;
  updateSkuChannelPriceBatch?: Maybe<UpdateSkuChannelPriceBatchMutation>;
};

export type MutationsActivateAccountArgs = {
  data?: Maybe<ActivateAccountCommand>;
};

export type MutationsActivateSkuChannelArgs = {
  data?: Maybe<ActivateSkuChannelCommand>;
};

export type MutationsCancelInvoiceArgs = {
  data?: Maybe<CancelInvoiceCommand>;
};

export type MutationsCancelOrderArgs = {
  data?: Maybe<CancelOrderCommand>;
};

export type MutationsCreateAccountArgs = {
  data?: Maybe<CreateAccountCommand>;
};

export type MutationsCreateDeviceArgs = {
  data?: Maybe<CreateDeviceCommand>;
};

export type MutationsCreateFileArgs = {
  data?: Maybe<CreateFileCommand>;
};

export type MutationsCreateInvoiceArgs = {
  data?: Maybe<CreateInvoiceCommand>;
};

export type MutationsCreateMessageArgs = {
  data?: Maybe<CreateMessageCommand>;
};

export type MutationsCreateProductArgs = {
  data?: Maybe<CreateProductCommand>;
};

export type MutationsCreateSellerAndUserArgs = {
  data?: Maybe<CreateSellerAndUserCommand>;
};

export type MutationsCreateSkuArgs = {
  data?: Maybe<CreateSkuCommand>;
};

export type MutationsCreateSkuChannelArgs = {
  data?: Maybe<CreateSkuChannelCommand>;
};

export type MutationsCreateTicketArgs = {
  data?: Maybe<CreateTicketCommand>;
};

export type MutationsDeleteAccountArgs = {
  data?: Maybe<DeleteAccountCommand>;
};

export type MutationsDeleteNotificationArgs = {
  data?: Maybe<DeleteNotificationCommand>;
};

export type MutationsDeleteProductArgs = {
  data?: Maybe<DeleteProductCommand>;
};

export type MutationsDeleteSellerArgs = {
  data?: Maybe<DeleteSellerCommand>;
};

export type MutationsDeleteSkuArgs = {
  data?: Maybe<DeleteSkuCommand>;
};

export type MutationsDeleteSkuChannelArgs = {
  data?: Maybe<DeleteSkuChannelCommand>;
};

export type MutationsInactivateAccountArgs = {
  data?: Maybe<InactivateAccountCommand>;
};

export type MutationsInactivateSkuChannelArgs = {
  data?: Maybe<InactivateSkuChannelCommand>;
};

export type MutationsInstallAppArgs = {
  data?: Maybe<InstallAppCommand>;
};

export type MutationsMarkNotificationAsReadArgs = {
  data?: Maybe<MarkNotificationAsReadCommand>;
};

export type MutationsReplaceAccountArgs = {
  data?: Maybe<ReplaceAccountCommand>;
};

export type MutationsReplaceSellerArgs = {
  data?: Maybe<ReplaceSellerCommand>;
};

export type MutationsSetMessageAsReadArgs = {
  data?: Maybe<SetMessageAsReadCommand>;
};

export type MutationsSetMessageAsUnreadArgs = {
  data?: Maybe<SetMessageAsUnreadCommand>;
};

export type MutationsSetTicketAsClosedArgs = {
  data?: Maybe<SetTicketAsClosedCommand>;
};

export type MutationsSetTicketAsOpenArgs = {
  data?: Maybe<SetTicketAsOpenCommand>;
};

export type MutationsSetTicketAsSolvedArgs = {
  data?: Maybe<SetTicketAsSolvedCommand>;
};

export type MutationsUninstallAppArgs = {
  data?: Maybe<UninstallAppCommand>;
};

export type MutationsUpdateAccountArgs = {
  data?: Maybe<UpdateAccountCommand>;
};

export type MutationsUpdateProductArgs = {
  data?: Maybe<UpdateProductCommand>;
};

export type MutationsUpdateSkuArgs = {
  data?: Maybe<UpdateSkuCommand>;
};

export type MutationsUpdateSkuChannelPriceArgs = {
  data?: Maybe<UpdateSkuChannelPriceCommand>;
};

export type MutationsUpdateSkuChannelPriceBatchArgs = {
  data?: Maybe<UpdateSkuChannelPriceBatchCommand>;
};

export type Notification = {
  __typename?: 'Notification';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  callToAction?: Maybe<Scalars['String']>;
  provider?: Maybe<NotificationProvider>;
  cronExpression?: Maybe<Scalars['String']>;
  level?: Maybe<NotificationLevel>;
  read?: Maybe<Scalars['Boolean']>;
  isRecurring?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<NotificationStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationGraphNode = {
  __typename?: 'NotificationGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Notification>;
};

export type NotificationGraphResult = {
  __typename?: 'NotificationGraphResult';
  edges?: Maybe<Array<Maybe<NotificationGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum NotificationLevel {
  Info = 'INFO',
  Warning = 'WARNING',
  Critical = 'CRITICAL',
}

export enum NotificationProvider {
  InApp = 'IN_APP',
  Push = 'PUSH',
  Email = 'EMAIL',
  Whatsapp = 'WHATSAPP',
}

export enum NotificationStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Completed = 'COMPLETED',
  Triggered = 'TRIGGERED',
  PendingTrigger = 'PENDING_TRIGGER',
}

export type Object = {
  __typename?: 'Object';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ObjectType>;
};

export enum ObjectType {
  Order = 'ORDER',
}

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  appOrderId?: Maybe<Scalars['ID']>;
  appName?: Maybe<Scalars['String']>;
  channelName?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  grossAmount?: Maybe<Scalars['Int']>;
  netAmount?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  shippingAmount?: Maybe<Scalars['Int']>;
  interestAmount?: Maybe<Scalars['Int']>;
  expeditionLimitDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  approvedAt?: Maybe<Scalars['DateTime']>;
  invoicedAt?: Maybe<Scalars['DateTime']>;
  shippedAt?: Maybe<Scalars['DateTime']>;
  soldAt?: Maybe<Scalars['DateTime']>;
  cancelledAt?: Maybe<Scalars['DateTime']>;
  deliveredAt?: Maybe<Scalars['DateTime']>;
  cancellation?: Maybe<Cancellation>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  buyer?: Maybe<Buyer>;
  shipment?: Maybe<Shipment>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  billingAddress?: Maybe<Address>;
  payments?: Maybe<Array<Maybe<Payment>>>;
};

export type OrderGraphNode = {
  __typename?: 'OrderGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Order>;
};

export type OrderGraphResult = {
  __typename?: 'OrderGraphResult';
  edges?: Maybe<Array<Maybe<OrderGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  skuSellerId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  salePrice?: Maybe<Scalars['Int']>;
  discountPrice?: Maybe<Scalars['Int']>;
  shippingPrice?: Maybe<Scalars['Int']>;
};

export enum OrderStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Invoiced = 'INVOICED',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCELLED',
  NotDelivered = 'NOT_DELIVERED',
}

export type Package = {
  __typename?: 'Package';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  id?: Maybe<Scalars['ID']>;
  method?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['Int']>;
  installments?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['ID']>;
  productTypeCd?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['ID']>;
  brandName?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  categoryName?: Maybe<Scalars['String']>;
  segmentName?: Maybe<Scalars['String']>;
  segmentId?: Maybe<Scalars['ID']>;
};

export enum ProductStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export type Queries = {
  __typename?: 'Queries';
  account?: Maybe<Account>;
  accounts?: Maybe<AccountGraphResult>;
  address?: Maybe<Address>;
  apps?: Maybe<AppGraphResult>;
  cnpjValidation?: Maybe<Scalars['Boolean']>;
  companyData?: Maybe<CompanyData>;
  emailValidation?: Maybe<Scalars['Boolean']>;
  events?: Maybe<EventGraphResult>;
  feature?: Maybe<Feature>;
  features?: Maybe<FeatureGraphResult>;
  globalCategories?: Maybe<GlobalCategoryGraphResult>;
  globalSku?: Maybe<GlobalSku>;
  globalSkus?: Maybe<GlobalSkuGraphResult>;
  installedApps?: Maybe<InstalledAppGraphResult>;
  message?: Maybe<Message>;
  messages?: Maybe<MessageGraphResult>;
  notification?: Maybe<Notification>;
  notifications?: Maybe<NotificationGraphResult>;
  order?: Maybe<Order>;
  orderReportDate?: Maybe<ReportDateGraphResult>;
  orderReportPlatform?: Maybe<ReportPlatformGraphResult>;
  orderReportStatus?: Maybe<ReportStatusGraphResult>;
  orderSummary?: Maybe<Summary>;
  orderTotal?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderGraphResult>;
  product?: Maybe<SkuProduct>;
  products?: Maybe<SkuProductGraphResult>;
  receivable?: Maybe<Receivable>;
  receivableDay?: Maybe<ReceivableDay>;
  receivableDays?: Maybe<ReceivableDayGraphResult>;
  receivableGroup?: Maybe<ReceivableGroup>;
  receivableGroups?: Maybe<ReceivableGroupGraphResult>;
  receivableGroupsCount?: Maybe<Scalars['Int']>;
  receivables?: Maybe<ReceivableGraphResult>;
  reportOrderTotal?: Maybe<Scalars['Int']>;
  seller?: Maybe<Seller>;
  sellers?: Maybe<SellerGraphResult>;
  service?: Maybe<Service>;
  services?: Maybe<ServiceGraphResult>;
  sku?: Maybe<Sku>;
  skuChannel?: Maybe<SkuChannel>;
  skuChannels?: Maybe<SkuChannelGraphResult>;
  skus?: Maybe<SkuGraphResult>;
  ticket?: Maybe<Ticket>;
  tickets?: Maybe<TicketGraphResult>;
  ticketsCount?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  totalNotifications?: Maybe<Scalars['Int']>;
  totalProducts?: Maybe<Scalars['Int']>;
  totalSkus?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type QueriesAccountArgs = {
  sellerId: Scalars['ID'];
};

export type QueriesAccountsArgs = {
  status?: Maybe<AccountStatus>;
  serviceStatus?: Maybe<ServiceStatus>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesAddressArgs = {
  postalCode: Scalars['String'];
};

export type QueriesAppsArgs = {
  category?: Maybe<AppCategory>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesCnpjValidationArgs = {
  cnpj: Scalars['String'];
};

export type QueriesCompanyDataArgs = {
  documentNumber: Scalars['String'];
};

export type QueriesEmailValidationArgs = {
  email: Scalars['String'];
};

export type QueriesEventsArgs = {
  size?: Maybe<Scalars['Int']>;
  objectId: Scalars['String'];
  objectType: ObjectType;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesFeatureArgs = {
  appName: Scalars['String'];
  featureName: Scalars['String'];
};

export type QueriesFeaturesArgs = {
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  appName?: Maybe<Scalars['String']>;
  featureName?: Maybe<Scalars['String']>;
};

export type QueriesGlobalCategoriesArgs = {
  segmentId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
};

export type QueriesGlobalSkuArgs = {
  ean: Scalars['String'];
};

export type QueriesGlobalSkusArgs = {
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  fallback?: Maybe<Scalars['Boolean']>;
  q?: Maybe<Scalars['String']>;
};

export type QueriesInstalledAppsArgs = {
  category?: Maybe<AppCategory>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesMessageArgs = {
  id: Scalars['ID'];
};

export type QueriesMessagesArgs = {
  ticketId?: Maybe<Scalars['ID']>;
  status?: Maybe<MessageStatus>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesNotificationArgs = {
  id: Scalars['ID'];
};

export type QueriesNotificationsArgs = {
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<NotificationStatus>;
  provider?: Maybe<NotificationProvider>;
  read?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<DateTimeRangeFilter>;
  expiresAt?: Maybe<DateTimeRangeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesOrderArgs = {
  id?: Maybe<Scalars['ID']>;
  appOrderId?: Maybe<Scalars['String']>;
};

export type QueriesOrderReportDateArgs = {
  initialDate?: Maybe<Scalars['DateTime']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Array<Maybe<ReportOrderStatus>>>;
};

export type QueriesOrderReportPlatformArgs = {
  initialDate?: Maybe<Scalars['DateTime']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Array<Maybe<ReportOrderStatus>>>;
};

export type QueriesOrderReportStatusArgs = {
  initialDate?: Maybe<Scalars['DateTime']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Array<Maybe<ReportOrderStatus>>>;
};

export type QueriesOrderSummaryArgs = {
  q?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimeRangeFilter>;
  soldAt?: Maybe<DateTimeRangeFilter>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<Maybe<ReportOrderStatus>>>;
};

export type QueriesOrderTotalArgs = {
  q?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimeRangeFilter>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<Maybe<OrderStatus>>>;
};

export type QueriesOrdersArgs = {
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  q?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimeRangeFilter>;
  soldAt?: Maybe<DateTimeRangeFilter>;
  status?: Maybe<Array<Maybe<OrderStatus>>>;
  appOrderId?: Maybe<Scalars['String']>;
  appName?: Maybe<Scalars['String']>;
};

export type QueriesProductArgs = {
  id_: Scalars['ID'];
};

export type QueriesProductsArgs = {
  sellerId?: Maybe<Scalars['ID']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  hasSkuOutOfStock?: Maybe<Scalars['Boolean']>;
  hasSkuWithoutPrice?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  status?: Maybe<ProductStatus>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesReceivableArgs = {
  id: Scalars['ID'];
};

export type QueriesReceivableDayArgs = {
  id: Scalars['ID'];
};

export type QueriesReceivableDaysArgs = {
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<DateRangeFilter>;
  platformName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesReceivableGroupArgs = {
  id: Scalars['ID'];
};

export type QueriesReceivableGroupsArgs = {
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<DateRangeFilter>;
  platformName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesReceivableGroupsCountArgs = {
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<DateRangeFilter>;
  platformName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
};

export type QueriesReceivablesArgs = {
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<DateRangeFilter>;
  platformName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesReportOrderTotalArgs = {
  q?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimeRangeFilter>;
  soldAt?: Maybe<DateTimeRangeFilter>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<Maybe<ReportOrderStatus>>>;
};

export type QueriesSellersArgs = {
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type QueriesServiceArgs = {
  orderId: Scalars['ID'];
};

export type QueriesServicesArgs = {
  sellerId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesSkuArgs = {
  id: Scalars['ID'];
};

export type QueriesSkuChannelArgs = {
  id: Scalars['ID'];
};

export type QueriesSkuChannelsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<SkuChannelStatus>;
  channelId?: Maybe<Scalars['ID']>;
  skuSellerId: Scalars['ID'];
};

export type QueriesSkusArgs = {
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  globalSkuId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  quantity?: Maybe<RangeFilter>;
  salePrice?: Maybe<RangeFilter>;
};

export type QueriesTicketArgs = {
  id: Scalars['ID'];
};

export type QueriesTicketsArgs = {
  orderId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<Maybe<TicketStatus>>>;
  q?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type QueriesTicketsCountArgs = {
  orderId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<TicketStatus>>>;
};

export type QueriesTotalArgs = {
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  globalSkuId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  quantity?: Maybe<RangeFilter>;
  salePrice?: Maybe<RangeFilter>;
};

export type QueriesTotalNotificationsArgs = {
  status?: Maybe<NotificationStatus>;
  provider?: Maybe<NotificationProvider>;
  read?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<DateTimeRangeFilter>;
  expiresAt?: Maybe<DateTimeRangeFilter>;
};

export type QueriesTotalProductsArgs = {
  sellerId?: Maybe<Scalars['ID']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  hasSkuOutOfStock?: Maybe<Scalars['Boolean']>;
  hasSkuWithoutPrice?: Maybe<Scalars['Boolean']>;
  q?: Maybe<Scalars['String']>;
  status?: Maybe<ProductStatus>;
};

export type QueriesTotalSkusArgs = {
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  globalSkuId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  quantity?: Maybe<RangeFilter>;
  salePrice?: Maybe<RangeFilter>;
};

export type QueriesUserArgs = {
  keycloakId?: Maybe<Scalars['ID']>;
};

export type RangeFilter = {
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
};

export type Receivable = {
  __typename?: 'Receivable';
  id?: Maybe<Scalars['ID']>;
  channelName?: Maybe<Scalars['String']>;
  platformName?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<Scalars['Date']>;
  order?: Maybe<ReceivableOrder>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<ReceivableStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceivableDay = {
  __typename?: 'ReceivableDay';
  id?: Maybe<Scalars['ID']>;
  platformName?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<Scalars['Date']>;
  sellerId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceivableDayGraphNode = {
  __typename?: 'ReceivableDayGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReceivableDay>;
};

export type ReceivableDayGraphResult = {
  __typename?: 'ReceivableDayGraphResult';
  edges?: Maybe<Array<Maybe<ReceivableDayGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReceivableGraphNode = {
  __typename?: 'ReceivableGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Receivable>;
};

export type ReceivableGraphResult = {
  __typename?: 'ReceivableGraphResult';
  edges?: Maybe<Array<Maybe<ReceivableGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReceivableGroup = {
  __typename?: 'ReceivableGroup';
  id?: Maybe<Scalars['ID']>;
  channelName?: Maybe<Scalars['String']>;
  platformName?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<ReceivableItem>>>;
  type?: Maybe<ReceivableType>;
  paidAt?: Maybe<Scalars['Date']>;
  order?: Maybe<ReceivableOrder>;
  sellerId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceivableGroupGraphNode = {
  __typename?: 'ReceivableGroupGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReceivableGroup>;
};

export type ReceivableGroupGraphResult = {
  __typename?: 'ReceivableGroupGraphResult';
  edges?: Maybe<Array<Maybe<ReceivableGroupGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReceivableItem = {
  __typename?: 'ReceivableItem';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type ReceivableOrder = {
  __typename?: 'ReceivableOrder';
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<ReceivableOrderItem>>>;
};

export type ReceivableOrderItem = {
  __typename?: 'ReceivableOrderItem';
  name?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export enum ReceivableStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export enum ReceivableType {
  Forecast = 'FORECAST',
  Fulfilled = 'FULFILLED',
}

export type ReplaceAccount = {
  __typename?: 'ReplaceAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type ReplaceAccountCommand = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serviceStatus?: Maybe<ServiceStatus>;
};

export type ReplaceCategoryCommand = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ReplaceSegmentCommand = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ReplaceSellerCommand = {
  name?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  stockSecurityFactor?: Maybe<Scalars['Int']>;
  takeRate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  agentEmail?: Maybe<Scalars['String']>;
  headOffice?: Maybe<Scalars['String']>;
  segment?: Maybe<Scalars['String']>;
  corporateName?: Maybe<Scalars['String']>;
  workingHours?: Maybe<Scalars['String']>;
  mcc?: Maybe<Scalars['String']>;
  internalEmail?: Maybe<Scalars['String']>;
  stateRegistration?: Maybe<Scalars['String']>;
  stateRegistrationIsActive?: Maybe<Scalars['Boolean']>;
  cnpjIsActive?: Maybe<Scalars['Boolean']>;
  address?: Maybe<CreateSellerAddressCommand>;
  segments?: Maybe<Array<Maybe<CreateSellerSegmentCommand>>>;
  contacts?: Maybe<Array<Maybe<CreateContactCommand>>>;
  documents?: Maybe<Array<Maybe<CreateDocumentCommand>>>;
  financialData?: Maybe<Array<Maybe<CreateFinancialCommand>>>;
};

export type ReplaceSellerMutation = {
  __typename?: 'ReplaceSellerMutation';
  ok?: Maybe<Scalars['Boolean']>;
  seller?: Maybe<Seller>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type ReportDate = {
  __typename?: 'ReportDate';
  date?: Maybe<Scalars['Date']>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export type ReportDateGraphNode = {
  __typename?: 'ReportDateGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReportDate>;
};

export type ReportDateGraphResult = {
  __typename?: 'ReportDateGraphResult';
  edges?: Maybe<Array<Maybe<ReportDateGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum ReportOrderStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Invoiced = 'INVOICED',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCELLED',
  NotDelivered = 'NOT_DELIVERED',
}

export type ReportPlatform = {
  __typename?: 'ReportPlatform';
  platform?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export type ReportPlatformGraphNode = {
  __typename?: 'ReportPlatformGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReportPlatform>;
};

export type ReportPlatformGraphResult = {
  __typename?: 'ReportPlatformGraphResult';
  edges?: Maybe<Array<Maybe<ReportPlatformGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReportStatus = {
  __typename?: 'ReportStatus';
  status?: Maybe<ReportOrderStatus>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export type ReportStatusGraphNode = {
  __typename?: 'ReportStatusGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReportStatus>;
};

export type ReportStatusGraphResult = {
  __typename?: 'ReportStatusGraphResult';
  edges?: Maybe<Array<Maybe<ReportStatusGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Segment = {
  __typename?: 'Segment';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Seller = {
  __typename?: 'Seller';
  address?: Maybe<SellerAddress>;
  agentEmail?: Maybe<Scalars['String']>;
  cnpjIsActive?: Maybe<Scalars['Boolean']>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  corporateName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<Array<Maybe<Document>>>;
  financialData?: Maybe<Array<Maybe<Financial>>>;
  headOffice?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalEmail?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  mcc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  segments?: Maybe<Array<Maybe<SellerSegment>>>;
  stateRegistration?: Maybe<Scalars['String']>;
  stateRegistrationIsActive?: Maybe<Scalars['Boolean']>;
  status?: Maybe<SellerStatus>;
  stockSecurityFactor?: Maybe<Scalars['Int']>;
  takeRate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workingHours?: Maybe<Scalars['String']>;
};

export type SellerAddress = {
  __typename?: 'SellerAddress';
  city?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type SellerGraphNode = {
  __typename?: 'SellerGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Seller>;
};

export type SellerGraphResult = {
  __typename?: 'SellerGraphResult';
  edges?: Maybe<Array<Maybe<SellerGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SellerSegment = {
  __typename?: 'SellerSegment';
  name?: Maybe<Scalars['String']>;
};

export enum SellerStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export type Service = {
  __typename?: 'Service';
  amount?: Maybe<Scalars['Int']>;
  carrierName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  serviceOrderId?: Maybe<Scalars['String']>;
  trackings?: Maybe<Array<Maybe<Tracking>>>;
};

export type ServiceGraphNode = {
  __typename?: 'ServiceGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Service>;
};

export type ServiceGraphResult = {
  __typename?: 'ServiceGraphResult';
  edges?: Maybe<Array<Maybe<ServiceGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum ServiceStatus {
  WithPacking = 'WITH_PACKING',
  WithoutPacking = 'WITHOUT_PACKING',
  WithoutService = 'WITHOUT_SERVICE',
}

export type SetMessageAsReadCommand = {
  id: Scalars['ID'];
};

export type SetMessageAsReadMutation = {
  __typename?: 'SetMessageAsReadMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  message?: Maybe<Message>;
};

export type SetMessageAsUnreadCommand = {
  id: Scalars['ID'];
};

export type SetMessageAsUnreadMutation = {
  __typename?: 'SetMessageAsUnreadMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  message?: Maybe<Message>;
};

export type SetTicketAsClosedCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type SetTicketAsClosedMutation = {
  __typename?: 'SetTicketAsClosedMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  ticket?: Maybe<Ticket>;
};

export type SetTicketAsOpenCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type SetTicketAsOpenMutation = {
  __typename?: 'SetTicketAsOpenMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  ticket?: Maybe<Ticket>;
};

export type SetTicketAsSolvedCommand = {
  id?: Maybe<Scalars['ID']>;
};

export type SetTicketAsSolvedMutation = {
  __typename?: 'SetTicketAsSolvedMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  ticket?: Maybe<Ticket>;
};

export type Shipment = {
  __typename?: 'Shipment';
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Address>;
  services?: Maybe<Array<Maybe<Service>>>;
};

export type Sku = {
  __typename?: 'Sku';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  reserved?: Maybe<Scalars['Int']>;
  salePrice?: Maybe<Scalars['Int']>;
  promotionalPrice?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Image>>>;
  reviewed?: Maybe<Scalars['Boolean']>;
  reviewedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<SkuStatus>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  package?: Maybe<Package>;
  category?: Maybe<Category>;
  segment?: Maybe<Segment>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  productId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['String']>;
  globalSkuId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<Array<Maybe<Metadata>>>;
};

export type SkuChannel = {
  __typename?: 'SkuChannel';
  id?: Maybe<Scalars['ID']>;
  skuSellerId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  channelId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  status?: Maybe<SkuChannelStatus>;
  channelName?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['Int']>;
  promotionalPrice?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type SkuChannelGraphNode = {
  __typename?: 'SkuChannelGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<SkuChannel>;
};

export type SkuChannelGraphResult = {
  __typename?: 'SkuChannelGraphResult';
  edges?: Maybe<Array<Maybe<SkuChannelGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum SkuChannelStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Deleted = 'DELETED',
}

export type SkuGraphNode = {
  __typename?: 'SkuGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Sku>;
};

export type SkuGraphResult = {
  __typename?: 'SkuGraphResult';
  edges?: Maybe<Array<Maybe<SkuGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SkuProduct = {
  __typename?: 'SkuProduct';
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  reserved?: Maybe<Scalars['Int']>;
  minPrice?: Maybe<Scalars['Int']>;
  maxPrice?: Maybe<Scalars['Int']>;
  skus?: Maybe<Array<Maybe<Sku>>>;
  type?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  segment?: Maybe<Segment>;
  brand?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  globalProductId?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['String']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  hasSkuOutOfStock?: Maybe<Scalars['Boolean']>;
  hasSkuWithoutPrice?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ProductStatus>;
};

export type SkuProductSkusArgs = {
  reviewed?: Maybe<Scalars['Boolean']>;
  outOfStock?: Maybe<Scalars['Boolean']>;
  withoutPrice?: Maybe<Scalars['Boolean']>;
};

export type SkuProductGraphNode = {
  __typename?: 'SkuProductGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<SkuProduct>;
};

export type SkuProductGraphResult = {
  __typename?: 'SkuProductGraphResult';
  edges?: Maybe<Array<Maybe<SkuProductGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum SkuStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}

export type Summary = {
  __typename?: 'Summary';
  quantity?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  id?: Maybe<Scalars['ID']>;
  openedAt?: Maybe<Scalars['DateTime']>;
  solvedAt?: Maybe<Scalars['DateTime']>;
  closedAt?: Maybe<Scalars['DateTime']>;
  sellerId?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  orderCode?: Maybe<Scalars['String']>;
  buyer?: Maybe<TicketBuyer>;
  channelName?: Maybe<Scalars['String']>;
  platformName?: Maybe<Scalars['String']>;
  status?: Maybe<TicketStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type TicketBuyer = {
  __typename?: 'TicketBuyer';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
};

export type TicketGraphNode = {
  __typename?: 'TicketGraphNode';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Ticket>;
};

export type TicketGraphResult = {
  __typename?: 'TicketGraphResult';
  edges?: Maybe<Array<Maybe<TicketGraphNode>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum TicketStatus {
  New = 'NEW',
  Open = 'OPEN',
  Solved = 'SOLVED',
  Closed = 'CLOSED',
}

export type Tracking = {
  __typename?: 'Tracking';
  estimatedDate?: Maybe<Scalars['Date']>;
  number?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  labelUrl?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<TrackingItem>>>;
};

export type TrackingItem = {
  __typename?: 'TrackingItem';
  skuSellerId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type UninstallAppCommand = {
  appId: Scalars['ID'];
};

export type UninstallAppMutation = {
  __typename?: 'UninstallAppMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
  account?: Maybe<Account>;
};

export type UpdateAccountCommand = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serviceStatus?: Maybe<ServiceStatus>;
};

export type UpdateProductCommand = {
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  category?: Maybe<ReplaceCategoryCommand>;
  segment?: Maybe<ReplaceSegmentCommand>;
  brand?: Maybe<Scalars['String']>;
};

export type UpdateProductMutation = {
  __typename?: 'UpdateProductMutation';
  ok?: Maybe<Scalars['Boolean']>;
  product?: Maybe<SkuProduct>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type UpdateSkuChannelPriceBatchCommand = {
  skuChannelPrices: Array<Maybe<UpdateSkuChannelPriceCommand>>;
};

export type UpdateSkuChannelPriceBatchMutation = {
  __typename?: 'UpdateSkuChannelPriceBatchMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type UpdateSkuChannelPriceCommand = {
  id: Scalars['ID'];
  salePrice: Scalars['Int'];
  promotionalPrice: Scalars['Int'];
};

export type UpdateSkuChannelPriceMutation = {
  __typename?: 'UpdateSkuChannelPriceMutation';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type UpdateSkuCommand = {
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['Int']>;
  promotionalPrice?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  reserved?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  package?: Maybe<CreatePackageCommand>;
  category?: Maybe<CreateCategoryCommand>;
  segment?: Maybe<CreateSegmentCommand>;
  images?: Maybe<Array<Maybe<CreateImageCommand>>>;
  attributes?: Maybe<Array<Maybe<CreateAttributeCommand>>>;
  metadata?: Maybe<Array<Maybe<CreateMetadataCommand>>>;
};

export type UpdateSkuMutation = {
  __typename?: 'UpdateSkuMutation';
  ok?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Sku>;
  errors?: Maybe<Array<Maybe<ErrorDictionary>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  sellerId?: Maybe<Scalars['ID']>;
  userType?: Maybe<UserType>;
  devices?: Maybe<Array<Maybe<Device>>>;
};

export enum UserType {
  Nodis = 'NODIS',
  Admin = 'ADMIN',
  Basic = 'BASIC',
}

export type SellerQueryVariables = Exact<{ [key: string]: never }>;

export type SellerQuery = { __typename?: 'Queries' } & {
  seller?: Maybe<
    { __typename?: 'Seller' } & Pick<
      Seller,
      | 'id'
      | 'name'
      | 'logoUrl'
      | 'stockSecurityFactor'
      | 'status'
      | 'takeRate'
      | 'type'
      | 'agentEmail'
      | 'headOffice'
      | 'corporateName'
      | 'workingHours'
      | 'mcc'
      | 'internalEmail'
      | 'stateRegistration'
      | 'stateRegistrationIsActive'
      | 'cnpjIsActive'
      | 'createdAt'
      | 'updatedAt'
      | 'deletedAt'
    > & {
        documents?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Document' } & Pick<Document, 'number' | 'type'>
            >
          >
        >;
        segments?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SellerSegment' } & Pick<SellerSegment, 'name'>
            >
          >
        >;
        financialData?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Financial' } & Pick<
                Financial,
                | 'bankCode'
                | 'branch'
                | 'branchDigit'
                | 'currentAccount'
                | 'currentAccountDigit'
              >
            >
          >
        >;
        contacts?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Contact' } & Pick<
                Contact,
                'name' | 'phoneNumber' | 'email' | 'type'
              >
            >
          >
        >;
        address?: Maybe<
          { __typename?: 'SellerAddress' } & Pick<
            SellerAddress,
            | 'street'
            | 'number'
            | 'complement'
            | 'postalCode'
            | 'state'
            | 'city'
            | 'neighborhood'
          >
        >;
      }
  >;
};

export const SellerDocument = Apollo.gql`
  query seller {
    seller {
      id
      name
      logoUrl
      stockSecurityFactor
      status
      takeRate
      type
      agentEmail
      headOffice
      corporateName
      workingHours
      mcc
      internalEmail
      stateRegistration
      stateRegistrationIsActive
      cnpjIsActive
      documents {
        number
        type
      }
      segments {
        name
      }
      financialData {
        bankCode
        branch
        branchDigit
        currentAccount
        currentAccountDigit
      }
      contacts {
        name
        phoneNumber
        email
        type
      }
      address {
        street
        number
        complement
        postalCode
        state
        city
        neighborhood
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

/**
 * __useSellerQuery__
 *
 * To run a query within a React component, call `useSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerQuery({
 *   variables: {
 *   },
 * });
 */
export function useSellerQuery(
  baseOptions?: Apollo.QueryHookOptions<SellerQuery, SellerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SellerQuery, SellerQueryVariables>(
    SellerDocument,
    options,
  );
}
export function useSellerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SellerQuery, SellerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SellerQuery, SellerQueryVariables>(
    SellerDocument,
    options,
  );
}
export type SellerQueryHookResult = ReturnType<typeof useSellerQuery>;
export type SellerLazyQueryHookResult = ReturnType<typeof useSellerLazyQuery>;
export type SellerQueryResult = Apollo.QueryResult<
  SellerQuery,
  SellerQueryVariables
>;
