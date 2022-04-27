/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RulesEngines } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClient } from "../frontDoorManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RulesEngine,
  RulesEnginesListByFrontDoorNextOptionalParams,
  RulesEnginesListByFrontDoorOptionalParams,
  RulesEnginesListByFrontDoorResponse,
  RulesEnginesGetOptionalParams,
  RulesEnginesGetResponse,
  RulesEnginesCreateOrUpdateOptionalParams,
  RulesEnginesCreateOrUpdateResponse,
  RulesEnginesDeleteOptionalParams,
  RulesEnginesListByFrontDoorNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RulesEngines operations. */
export class RulesEnginesImpl implements RulesEngines {
  private readonly client: FrontDoorManagementClient;

  /**
   * Initialize a new instance of the class RulesEngines class.
   * @param client Reference to the service client
   */
  constructor(client: FrontDoorManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the Rules Engine Configurations within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  public listByFrontDoor(
    resourceGroupName: string,
    frontDoorName: string,
    options?: RulesEnginesListByFrontDoorOptionalParams
  ): PagedAsyncIterableIterator<RulesEngine> {
    const iter = this.listByFrontDoorPagingAll(
      resourceGroupName,
      frontDoorName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByFrontDoorPagingPage(
          resourceGroupName,
          frontDoorName,
          options
        );
      }
    };
  }

  private async *listByFrontDoorPagingPage(
    resourceGroupName: string,
    frontDoorName: string,
    options?: RulesEnginesListByFrontDoorOptionalParams
  ): AsyncIterableIterator<RulesEngine[]> {
    let result = await this._listByFrontDoor(
      resourceGroupName,
      frontDoorName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFrontDoorNext(
        resourceGroupName,
        frontDoorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFrontDoorPagingAll(
    resourceGroupName: string,
    frontDoorName: string,
    options?: RulesEnginesListByFrontDoorOptionalParams
  ): AsyncIterableIterator<RulesEngine> {
    for await (const page of this.listByFrontDoorPagingPage(
      resourceGroupName,
      frontDoorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the Rules Engine Configurations within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  private _listByFrontDoor(
    resourceGroupName: string,
    frontDoorName: string,
    options?: RulesEnginesListByFrontDoorOptionalParams
  ): Promise<RulesEnginesListByFrontDoorResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, options },
      listByFrontDoorOperationSpec
    );
  }

  /**
   * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    frontDoorName: string,
    rulesEngineName: string,
    options?: RulesEnginesGetOptionalParams
  ): Promise<RulesEnginesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, rulesEngineName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new Rules Engine Configuration with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param rulesEngineParameters Rules Engine Configuration properties needed to create a new Rules
   *                              Engine Configuration.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    frontDoorName: string,
    rulesEngineName: string,
    rulesEngineParameters: RulesEngine,
    options?: RulesEnginesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RulesEnginesCreateOrUpdateResponse>,
      RulesEnginesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RulesEnginesCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        frontDoorName,
        rulesEngineName,
        rulesEngineParameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new Rules Engine Configuration with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param rulesEngineParameters Rules Engine Configuration properties needed to create a new Rules
   *                              Engine Configuration.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    rulesEngineName: string,
    rulesEngineParameters: RulesEngine,
    options?: RulesEnginesCreateOrUpdateOptionalParams
  ): Promise<RulesEnginesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      frontDoorName,
      rulesEngineName,
      rulesEngineParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Rules Engine Configuration with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    frontDoorName: string,
    rulesEngineName: string,
    options?: RulesEnginesDeleteOptionalParams
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
      { resourceGroupName, frontDoorName, rulesEngineName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing Rules Engine Configuration with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    rulesEngineName: string,
    options?: RulesEnginesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      frontDoorName,
      rulesEngineName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByFrontDoorNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param nextLink The nextLink from the previous successful call to the ListByFrontDoor method.
   * @param options The options parameters.
   */
  private _listByFrontDoorNext(
    resourceGroupName: string,
    frontDoorName: string,
    nextLink: string,
    options?: RulesEnginesListByFrontDoorNextOptionalParams
  ): Promise<RulesEnginesListByFrontDoorNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, nextLink, options },
      listByFrontDoorNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFrontDoorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngine
    },
    201: {
      bodyMapper: Mappers.RulesEngine
    },
    202: {
      bodyMapper: Mappers.RulesEngine
    },
    204: {
      bodyMapper: Mappers.RulesEngine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.rulesEngineParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFrontDoorNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.frontDoorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
