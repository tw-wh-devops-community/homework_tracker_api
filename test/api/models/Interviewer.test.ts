import * as chai from 'chai'
import { Interviewer } from '../../../src/models/Interviewer'
import RoleType from '../../../src/models/RoleType'
import { resetDB } from '../../db-test-setup'

const expect = chai.expect
describe('interviewer model test', () => {
  afterEach(async () => {
    await resetDB()
  })

  it('should get the saved interviewer info', async () => {
    const interviewer = new Interviewer({name: 'foo',  employee_id: '15111', role:RoleType.BA})
    const savedInterviewer = await interviewer.save()
    const picBathUrl ='image/'

    const latestInterviewer = await Interviewer.findById(savedInterviewer.id)

    expect(latestInterviewer.name).to.eql('foo')
    expect(latestInterviewer.role).to.eql(RoleType.BA)
    expect(latestInterviewer.getPicUrl()).to.eql(`${picBathUrl}15111`)
  })
})
