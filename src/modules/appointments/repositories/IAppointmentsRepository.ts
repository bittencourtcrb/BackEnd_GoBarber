import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTo from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmensRepository {
  create(data: ICreateAppointmentDTo): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
