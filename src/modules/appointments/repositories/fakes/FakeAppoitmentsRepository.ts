import { uuid } from 'uuidv4';
import { isEqual } from 'date-fns';

import IAppointmensRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTo from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmensRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppoitment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppoitment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTo): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
