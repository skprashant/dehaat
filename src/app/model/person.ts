export class Person {
  private id: string;
  private name: string;
  private mobile: number;
  private age: number;
  private address: string;
  private src: string;
  private info: string;

  constructor(
    id: string,
    name: string,
    mobile: number,
    age: number,
    address: string,
    src: string,
    info: string
  ) {
    this.id = id;
    this.name = name;
    this.mobile = mobile;
    this.age = age;
    this.address = address;
    this.src = src;
    this.info = info;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getMobile() {
    return this.mobile;
  }

  setMobile(mobile: number) {
    this.mobile = mobile;
  }

  getAge() {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }

  getId() {
    return this.id;
  }
}
