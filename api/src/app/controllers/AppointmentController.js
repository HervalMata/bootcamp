import User from "../models/User";
import  * as Yup from 'yup';
import Appointment from "../models/Appointment";

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      provider_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }
    const { date, provider_id } = req.body;
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });
    if (!checkIsProvider) {
      return res.status(401).json({ error: 'You can only appointment with providers.' });
    }
    const appointment = await Appointment.create({
      user_id: req.userId, provider_id, date,
    });
    return res.json(appointment);
  }
}

export default new AppointmentController();
