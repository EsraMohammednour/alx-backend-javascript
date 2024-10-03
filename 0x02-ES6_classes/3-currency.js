export default class Currency {
  contructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newname){
    if (typeof newname !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newname;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new Error('Code must be a string')
    }
    this._code = newcode;
  }

  function displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
