import memstore, { MemoryStorage } from '../src/index';

describe('MemoryStorage#setItem', () => {
  it('should save a key-value pair', () => {
    memstore.setItem('key', 'value');
    expect(Object.keys(memstore)).toStrictEqual(['key']);
  });
});

describe('MemoryStorage#getItem', () => {
  it('should return value of the key provided', () => {
    expect(memstore.getItem('key')).toBe('value');
  });

  it("should return null if the key provided doesn't exist", () => {
    expect(memstore.getItem('non-existing-key')).toBe(null);
  });
});

describe('MemoryStorage#removeItem', () => {
  it('should remove an existing key-value pair based on key provided', () => {
    memstore.removeItem('key');
    expect(memstore.getItem('key')).toBe(null);
  });
});

describe('MemoryStorage#clear', () => {
  it('should remove all existing key-value pairs', () => {
    memstore.setItem('key1', 'value1');
    memstore.setItem('key2', 'value2');
    memstore.setItem('key3', 'value3');
    expect(Object.keys(memstore).length).toBe(3);

    memstore.clear();
    expect(Object.keys(memstore).length).toBe(0);
  });
});
