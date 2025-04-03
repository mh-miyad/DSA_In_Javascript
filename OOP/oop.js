class OTPGenerator {
  constructor(initialState) {
    this.otpLength = initialState.otpLength;
  }
  getOtp() {
    let start = performance.now();
    let otp = "";
    for (let i = 0; i < this.otpLength; i++) {
      otp += Math.floor(Math.random() * 4);
    }
    let end = performance.now();
    let elapsed = Math.floor(end - start);
    console.log("Elapsed time:", elapsed, "milliseconds");
    return otp;
  }
}
// console.log(performance.now());
const otp = new OTPGenerator({
  otpLength: 10,
});
console.log(otp.getOtp());
// console.log(performance.now());
