export const isAuth = (req,res,next) => {
    console.log("middleware");
    next();
};

//~~~~~~~~~~~~~~~ROL(ADMIN)~~~~~~~~~~~~~~~~~~~~//
export const checkRole = (roles) => {
    return (req,res,next) => {
    console.log(req.usuario);
    if(roles.includes(req.usuario.role)){
        res.json({status:"error", message:"Sin autorización"});
    } else {
        next();
    }
}
};