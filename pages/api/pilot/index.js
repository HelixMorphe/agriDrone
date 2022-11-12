import connectMongo from "../../../database/conn";
import Pilots from "../../../model/PilotSchema";
export default async function handler(req, res) {
  const { method } = req;
  const { email } = req?.query;
  await connectMongo();
  if (method === "GET") {
    try {
      const user = await Pilots.findOne({ email: email });
      res.status(200).json({ success: true, message: user });
    } catch (e) {
      res.status(300).json({ success: false, message: e });
    }
  }
  if (method === "POST") {
    const { user } = req.body;

    try {
      const farmer = await Pilots.create(user);
      res.status(200).json({ success: true, message: farmer });
    } catch (e) {
      res.status(300).json({ success: false, message: e });
    }
  }
}
