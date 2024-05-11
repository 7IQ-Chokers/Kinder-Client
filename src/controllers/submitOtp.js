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
    const y = await x.text();
    if (x.status !== 200) {
      toast("Incorrect OTP!", { type: "error" });
    } else {
      toast("OTP Validated", { type: "success" });
    }
  } catch (error) {
    console.log(error);
  }
}
