/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ServersImpl,
  ReplicasImpl,
  FirewallRulesImpl,
  VirtualNetworkRulesImpl,
  DatabasesImpl,
  ConfigurationsImpl,
  ServerParametersImpl,
  LogFilesImpl,
  ServerAdministratorsImpl,
  RecoverableServersImpl,
  ServerBasedPerformanceTierImpl,
  LocationBasedPerformanceTierImpl,
  CheckNameAvailabilityImpl,
  OperationsImpl,
  ServerSecurityAlertPoliciesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  ServerKeysImpl
} from "./operations";
import {
  Servers,
  Replicas,
  FirewallRules,
  VirtualNetworkRules,
  Databases,
  Configurations,
  ServerParameters,
  LogFiles,
  ServerAdministrators,
  RecoverableServers,
  ServerBasedPerformanceTier,
  LocationBasedPerformanceTier,
  CheckNameAvailability,
  Operations,
  ServerSecurityAlertPolicies,
  PrivateEndpointConnections,
  PrivateLinkResources,
  ServerKeys
} from "./operationsInterfaces";
import { PostgreSQLManagementClientOptionalParams } from "./models";

export class PostgreSQLManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the PostgreSQLManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PostgreSQLManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PostgreSQLManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-postgresql/6.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.servers = new ServersImpl(this);
    this.replicas = new ReplicasImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.virtualNetworkRules = new VirtualNetworkRulesImpl(this);
    this.databases = new DatabasesImpl(this);
    this.configurations = new ConfigurationsImpl(this);
    this.serverParameters = new ServerParametersImpl(this);
    this.logFiles = new LogFilesImpl(this);
    this.serverAdministrators = new ServerAdministratorsImpl(this);
    this.recoverableServers = new RecoverableServersImpl(this);
    this.serverBasedPerformanceTier = new ServerBasedPerformanceTierImpl(this);
    this.locationBasedPerformanceTier = new LocationBasedPerformanceTierImpl(
      this
    );
    this.checkNameAvailability = new CheckNameAvailabilityImpl(this);
    this.operations = new OperationsImpl(this);
    this.serverSecurityAlertPolicies = new ServerSecurityAlertPoliciesImpl(
      this
    );
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.serverKeys = new ServerKeysImpl(this);
  }

  servers: Servers;
  replicas: Replicas;
  firewallRules: FirewallRules;
  virtualNetworkRules: VirtualNetworkRules;
  databases: Databases;
  configurations: Configurations;
  serverParameters: ServerParameters;
  logFiles: LogFiles;
  serverAdministrators: ServerAdministrators;
  recoverableServers: RecoverableServers;
  serverBasedPerformanceTier: ServerBasedPerformanceTier;
  locationBasedPerformanceTier: LocationBasedPerformanceTier;
  checkNameAvailability: CheckNameAvailability;
  operations: Operations;
  serverSecurityAlertPolicies: ServerSecurityAlertPolicies;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  serverKeys: ServerKeys;
}
