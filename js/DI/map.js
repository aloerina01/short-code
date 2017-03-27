class DependenciesMap {
    constructor() {
        this._map = {};
    }
    put(containerKey, dependencies) {
        this._map[containerKey] = dependencies;
    }
    get(containerKey) {
        return this._map[containerKey];
    }
}

const map = new DependenciesMap();
module.expotrs = map;

// const proxy = new Proxy(new DependenciesMap(), {

// });
// export default proxy;