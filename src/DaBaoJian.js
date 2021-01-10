export default class DaBaoJian {
  gongzhu(number) {
    this.user = number === 1 ? "大脚" : "刘英";
  }
  anjiao() {
    this.fuwu = this.user + "走进房间为你足疗";
  }
  anmo() {
    this.fuwu = this.user + "走进房间为你按摩";
  }
  taishi() {
    this.fuwu = this.user + "走进房间为你-泰式保健";
  }
  gongting() {
    this.fuwu = this.user + "走进房间为你-宫廷御疗";
  }
}
