/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkspaceCollections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBIEmbeddedManagementClient } from "../powerBIEmbeddedManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  WorkspaceCollection,
  WorkspaceCollectionsListByResourceGroupOptionalParams,
  WorkspaceCollectionsListBySubscriptionOptionalParams,
  WorkspaceCollectionsGetByNameOptionalParams,
  WorkspaceCollectionsGetByNameResponse,
  CreateWorkspaceCollectionRequest,
  WorkspaceCollectionsCreateOptionalParams,
  WorkspaceCollectionsCreateResponse,
  UpdateWorkspaceCollectionRequest,
  WorkspaceCollectionsUpdateOptionalParams,
  WorkspaceCollectionsUpdateResponse,
  WorkspaceCollectionsDeleteOptionalParams,
  CheckNameRequest,
  WorkspaceCollectionsCheckNameAvailabilityOptionalParams,
  WorkspaceCollectionsCheckNameAvailabilityResponse,
  WorkspaceCollectionsListByResourceGroupResponse,
  WorkspaceCollectionsListBySubscriptionResponse,
  WorkspaceCollectionsGetAccessKeysOptionalParams,
  WorkspaceCollectionsGetAccessKeysResponse,
  WorkspaceCollectionAccessKey,
  WorkspaceCollectionsRegenerateKeyOptionalParams,
  WorkspaceCollectionsRegenerateKeyResponse,
  MigrateWorkspaceCollectionRequest,
  WorkspaceCollectionsMigrateOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceCollections operations. */
export class WorkspaceCollectionsImpl implements WorkspaceCollections {
  private readonly client: PowerBIEmbeddedManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceCollections class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBIEmbeddedManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified resource group.
   * @param resourceGroupName Azure resource group
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspaceCollectionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceCollection> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: WorkspaceCollectionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<WorkspaceCollection[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: WorkspaceCollectionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<WorkspaceCollection> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: WorkspaceCollectionsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceCollection> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: WorkspaceCollectionsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<WorkspaceCollection[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: WorkspaceCollectionsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<WorkspaceCollection> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves an existing Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  getByName(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspaceCollectionsGetByNameOptionalParams
  ): Promise<WorkspaceCollectionsGetByNameResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, options },
      getByNameOperationSpec
    );
  }

  /**
   * Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace
   * Collection contains one or more workspaces, and can be used to provision keys that provide API
   * access to those workspaces.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Create workspace collection request
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceCollectionName: string,
    body: CreateWorkspaceCollectionRequest,
    options?: WorkspaceCollectionsCreateOptionalParams
  ): Promise<WorkspaceCollectionsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, body, options },
      createOperationSpec
    );
  }

  /**
   * Update an existing Power BI Workspace Collection with the specified properties.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Update workspace collection request
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceCollectionName: string,
    body: UpdateWorkspaceCollectionRequest,
    options?: WorkspaceCollectionsUpdateOptionalParams
  ): Promise<WorkspaceCollectionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, body, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspaceCollectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, workspaceCollectionName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspaceCollectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceCollectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Verify the specified Power BI Workspace Collection name is valid and not already in use.
   * @param location Azure location
   * @param body Check name availability request
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    body: CheckNameRequest,
    options?: WorkspaceCollectionsCheckNameAvailabilityOptionalParams
  ): Promise<WorkspaceCollectionsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, body, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified resource group.
   * @param resourceGroupName Azure resource group
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspaceCollectionsListByResourceGroupOptionalParams
  ): Promise<WorkspaceCollectionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: WorkspaceCollectionsListBySubscriptionOptionalParams
  ): Promise<WorkspaceCollectionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  getAccessKeys(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspaceCollectionsGetAccessKeysOptionalParams
  ): Promise<WorkspaceCollectionsGetAccessKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, options },
      getAccessKeysOperationSpec
    );
  }

  /**
   * Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Access key to regenerate
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    workspaceCollectionName: string,
    body: WorkspaceCollectionAccessKey,
    options?: WorkspaceCollectionsRegenerateKeyOptionalParams
  ): Promise<WorkspaceCollectionsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, body, options },
      regenerateKeyOperationSpec
    );
  }

  /**
   * Migrates an existing Power BI Workspace Collection to a different resource group and/or
   * subscription.
   * @param resourceGroupName Azure resource group
   * @param body Workspace migration request
   * @param options The options parameters.
   */
  migrate(
    resourceGroupName: string,
    body: MigrateWorkspaceCollectionRequest,
    options?: WorkspaceCollectionsMigrateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, body, options },
      migrateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByNameOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/workspaceCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getAccessKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionAccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionAccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const migrateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
