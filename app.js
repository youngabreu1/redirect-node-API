const express = require ('express');
const app = express();
const PORT = 3000;


app.get('/',(req, res) => {
    res.redirect('https://playlistsolutions.com/pt/')
   
})

app.get('/suporte', (req, res)=>{
    res.redirect('https://playlist.com.br/support');
})

app.listen(PORT, ()=>{
    console.log("Servidor iniciado na porta 3000!");
});
