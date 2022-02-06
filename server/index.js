import express from "express"
import bodyParser from "body-parser"
//const router = express.Router()

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.sendFile("C:/Users/seths/Documents/projects/qweplosh/client/index.html")
})

app.get("/api", (req, res) => {
  res.send("<h1> TEST </h1>")
})

app.post("/create-question", (req, res) => {
  console.log(req.message)
  res.send({"message":"Success!"})
})

//app logic
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

//app.use("/", router);