exports.create = {
  schema: {
    body: {
      type: 'object',
      properties: {
        type: {
          type: 'string'
        },
        content: {
          type: 'string'
        },
        struct: {
          type: 'string'
        }
      },
      required: ['type', 'content', 'struct']
    },
    response: {
      201: {
        type: 'object',
        properties: {
          errno: {
            type: 'integer'
          },
          errmsg: {
            type: 'string'
          },
          data: {
            type: 'string'
          }
        }
      },
      400: {
        type: 'string'
      }
    }
  }
};

exports.fetch = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      },
      required: ['id']
    },
    response: {
      200: {
        type: 'string'
      },
      404: {
        type: 'string'
      }
    }
  }
};

exports.list = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        page: {
          type: 'integer'
        },
        pageSize: {
          type: 'integer'
        },
        type: {
          type: 'string'
        }
      },
      required: ['page', 'pageSize']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          list: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string'
                },
                content: {
                  type: 'string'
                },
                struct: {
                  type: 'string'
                },
                update: {
                  type: 'string'
                },
                create: {
                  type: 'string'
                }
              }
            }
          },
          hasNext: {
            type: 'boolean'
          },
          total: {
            type: 'integer'
          }
        }
      }
    }
  }
};
exports.update = {
  schema: {
    body: {
      type: 'object',
      properties: {
        type: {
          type: 'string'
        },
        content: {
          type: 'string'
        },
        struct: {
          type: 'string'
        }
      },
      required: ['type', 'content', 'struct']
    },
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      },
      required: ['id']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          errno: {
            type: 'integer'
          },
          errmsg: {
            type: 'string'
          }
        }
      }
    }
  }
};
