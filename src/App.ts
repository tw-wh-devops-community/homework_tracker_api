import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as morgan from 'morgan'
import TodoListRouter from './routes/TodoListRouter'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.connectDatabase()
    this.middleware()
    this.routes()
    this.handleError()
  }

  private connectDatabase(): void {
    mongoose.connect('mongodb://localhost/HomeworkTrackerDB', { useMongoClient: true })
  }

  private middleware(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    this.app.use(morgan('combined'))
  }

  private routes() {
    let router = express.Router()
    router.get('/', (req, res) => {
      res.json({ message: 'Hello World!' })
    })
    this.app.use('/', router)
    this.app.use('/api', TodoListRouter)
  }

  private handleError(): void {
    this.app.use(function(req, res) {
      res.status(404).send({ url: req.originalUrl + ' not found.' })
    })    
  }
}

export default new App().app
