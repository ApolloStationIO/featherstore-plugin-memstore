/** Memstore: in-memory store for use with featherstore
 * @name memstore
 */
function MemoryStorage() {}

MemoryStorage.prototype.getItem = function(key) {
  return key in this ? this[key] : null;
};

MemoryStorage.prototype.setItem = function(key, value) {
  this[key] = value;
};

MemoryStorage.prototype.removeItem = function(key) {
  if (key in this) {
    delete this[key];
  }
};

MemoryStorage.prototype.clear = function() {
  Object.keys(this).forEach(key => {
    delete this[key];
  });
};

module.exports = new MemoryStorage();
