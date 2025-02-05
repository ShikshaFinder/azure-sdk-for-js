/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const KeyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Key"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Key: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Key",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyValueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValue"
            }
          }
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValue",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content_type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last_modified",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      locked: {
        serializedName: "locked",
        type: {
          name: "Boolean"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigurationSnapshot"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationSnapshot: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationSnapshot",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      filters: {
        constraints: {
          MinItems: 1,
          MaxItems: 3
        },
        serializedName: "filters",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigurationSettingsFilter"
            }
          }
        }
      },
      compositionType: {
        serializedName: "composition_type",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      expiresOn: {
        serializedName: "expires",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      retentionPeriodInSeconds: {
        constraints: {
          InclusiveMaximum: 7776000,
          InclusiveMinimum: 3600
        },
        serializedName: "retention_period",
        type: {
          name: "Number"
        }
      },
      sizeInBytes: {
        serializedName: "size",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      itemCount: {
        serializedName: "items_count",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationSettingsFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationSettingsFilter",
    modelProperties: {
      keyFilter: {
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      labelFilter: {
        serializedName: "label",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotUpdateParameters",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LabelListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabelListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Label"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Label: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Label",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDetails",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "NotStarted",
            "Running",
            "Succeeded",
            "Failed",
            "Canceled"
          ]
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const InnerError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const AppConfigurationGetKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationPutKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationPutKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationDeleteKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationDeleteKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetSnapshotsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetSnapshotsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckSnapshotsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckSnapshotsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetSnapshotHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetSnapshotHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCreateSnapshotHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCreateSnapshotHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "String"
        }
      },
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationUpdateSnapshotHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationUpdateSnapshotHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckSnapshotHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckSnapshotHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationPutLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationPutLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationDeleteLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationDeleteLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationCheckRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationCheckRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetKeysNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetKeysNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetKeyValuesNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetKeyValuesNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetSnapshotsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetSnapshotsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetLabelsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetLabelsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationGetRevisionsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationGetRevisionsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};
