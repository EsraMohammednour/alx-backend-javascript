export default class Currency {
  contructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    this._code = newcode;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
