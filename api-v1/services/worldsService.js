let worlds = {
  Earth: {
    name: 'Earth'
  }
}

const worldsService = {
  getWorlds (name) {
    return worlds[name] ? [worlds[name]] : []
  },

  addWorld (world) {
    worlds[world.name] = world
  }
}

module.exports = worldsService
