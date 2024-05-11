import { BACKEND_USER_SERVICE_BASE_URL } from "config/config";
import { toast } from "react-toastify";

export default async function sendOtpEmail(email) {
  try {
    const x = await fetch(`${BACKEND_USER_SERVICE_BASE_URL}/user/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    const y = await x.text();
    if (x.status !== 200) {
      toast("Error occurred. Please retry", { type: "error" });
    } else {
      toast("OTP sent", { type: "info" });
    }
  } catch (error) {
    console.log(error);
  }
}
