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
      }
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
      }
    },
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      }
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

exports.fetch = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      }
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
    response: {
      200: {
        type: 'object',
        properties: {
          list: {
            type: 'array',
            items: {
              type: 'string'
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
