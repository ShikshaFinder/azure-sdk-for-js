/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VpnSite, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
 *
 * @summary Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VpnSitePut.json
 */
async function vpnSiteCreate() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const vpnSiteName = "vpnSite1";
  const vpnSiteParameters: VpnSite = {
    addressSpace: { addressPrefixes: ["10.0.0.0/16"] },
    isSecuritySite: false,
    location: "West US",
    o365Policy: {
      breakOutCategories: { default: false, allow: true, optimize: true }
    },
    tags: { key1: "value1" },
    virtualWan: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWANs/wan1"
    },
    vpnSiteLinks: [
      {
        name: "vpnSiteLink1",
        bgpProperties: { asn: 1234, bgpPeeringAddress: "192.168.0.0" },
        ipAddress: "50.50.50.56",
        linkProperties: { linkProviderName: "vendor1", linkSpeedInMbps: 0 }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnSites.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vpnSiteName,
    vpnSiteParameters
  );
  console.log(result);
}

async function main() {
  vpnSiteCreate();
}

main().catch(console.error);
