import { Router } from "express";
import { ProductosService } from "../service/productos.service.js";

const router = Router();

router.get("/", async(req,res) => {
    const {limit=3, page=1} = req.query;
    const query = {  };
    
    const options = {
        limit,
        page,
        sort:{price:1},
        lean:true
    };
    const result = await ProductosService.getProductosPage(query, options);
    const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    const dataProductos = {
        status:"success",
        payload:result.docs,
        totalPages:result.totalPages,
        prevLink:result.hasPrevPage ? `${baseUrl.replace(`page=${result.page}`, `page=${result.prevPage}`)}` : null,
        nextLink:result.hasNextPage ? baseUrl.includes("page") ? baseUrl.replace(`page=${result.page}`, `page=${result.nextPage}`) : baseUrl.concat(`?page=${result.nextPage}`) : null
    }
console.log(dataProductos);
res.render("home", dataProductos);
});


router.get("/registro", (req,res) => {
    res.render("signup");
});

router.get("/iniciarsesion", (req,res) => {
    res.render("login");
});

router.get("/envivo", (req,res) => {
    res.render("realtime");
});

router.get("/perfil", (req,res) => {
    console.log(req.usuario);
    res.render("profile", {usuario:req.usuario});
});

export { router as viewsRouter }