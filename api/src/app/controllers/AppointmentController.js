import User from "../models/User";
import  * as Yup from 'yup';
import Appointment from "../models/Appointment";
import { startOfHour, parseISO, isBefore } from 'date-fns';

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
    const hourStart = startOfHour(parseISO(date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }
    const checkAvailability = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart, },
    });
    if (!checkAvailability) {
      return res.status(400).json({ error: 'Appointment date is not available.' });
    }
    const appointment = await Appointment.create({
      user_id: req.userId, provider_id, date: hourStart,
    });
    return res.json(appointment);
  }
}

export default new AppointmentController();
