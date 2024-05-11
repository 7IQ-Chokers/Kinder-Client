import { BACKEND_USER_SERVICE_BASE_URL } from "config/config";
import { toast } from "react-toastify";

export default async function submitOtp(email, otp) {
  try {
    const x = await fetch(`${BACKEND_USER_SERVICE_BASE_URL}/user/submitotp`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email, otp: otp }),
    });
    const y = await x.json();
    if (x.status !== 200) {
      toast("Incorrect OTP!", { type: "error" });
      return null;
    } else {
      toast("OTP Validated", { type: "success" });
      return y.jwt;
    }
  } catch (error) {
    toast("Incorrect OTP!", { type: "error" });
    console.log(error);
    return null;
  }
}
