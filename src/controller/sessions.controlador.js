export class SessionsController{
    static redirectLogin = (req,res) => {
        res.redirect("/iniciarsesion");
    };

    static failSignup = (req,res) => {
        res.render("signup", {error:"ERROR no se registró el usuario"});
    };

    static redirectProfile = (req,res) => {
        res.send("Logueado exitosamente");
    };


}