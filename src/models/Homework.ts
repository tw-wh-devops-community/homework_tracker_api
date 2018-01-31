import * as mongoose from 'mongoose'
import { RoleType } from '../helpers/Constant'

export type HomeworkModel = mongoose.Document & {
  name: string,
  job_role: RoleType,
}

const homeworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly set the name of the candidate',
  },
  job_role: {
    type: String,
  },
})

export default mongoose.model<HomeworkModel>('Homework', homeworkSchema)
