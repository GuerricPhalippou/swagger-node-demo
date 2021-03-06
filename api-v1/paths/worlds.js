module.exports = function (worldsService) {
  let operations = {
    GET,
    POST
  }

  function GET (req, res, next) {
    res.status(200).json(worldsService.getWorlds(req.query.worldName))
  }

  function POST (req, res, next) {
    worldsService.addWorld(req.body)
    res.status(200).end()
  }

  GET.apiDoc = {
    summary: 'Returns worlds by name.',
    operationId: 'getWorlds',
    parameters: [
      {
        in: 'query',
        name: 'worldName',
        required: true,
        type: 'string'
      }
    ],
    responses: {
      200: {
        description: 'A list of worlds that match the requested name.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/World'
          }
        }
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  }

  POST.apiDoc = {
    summary: 'Adds a world.',
    operationId: 'addWorld',
    consumes: ['application/json'],
    parameters: [
      {
        in: 'body',
        name: 'world',
        required: true,
        schema: {
          $ref: '#/definitions/World'
        }
      }
    ],
    responses: {
      200: {
        description: 'OK'
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  }

  return operations
}
