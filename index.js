const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/test/:status/:semester', function(req, res){
  res.json({
    status : req.params.status,
    semester: req.params.semester,
    nama: req.query.nama,
    jurusan: req.query.jurusan,
    fakultas: req.body.fakultas,
    tipebadan: req.body.tipebadan,
    agama: req.body.agama,
    warganegara: req.body.warganegara,
    alamat: req.body.alamat,
    suku: req.body.suku
    })
})

app.listen(3000)
console.log("server aman")