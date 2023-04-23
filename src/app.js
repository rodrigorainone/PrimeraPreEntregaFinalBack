import  express  from "express";
import productRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"

const app = express()

app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/carts', cartsRouter)

app.listen(8081,()=>console.log("escuchando puerto 8081"))