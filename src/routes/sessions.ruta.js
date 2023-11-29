import { Router } from "express";
import passport from "passport";
import { SessionsController } from "../controller/sessions.controlador.js";

const router = Router();

router.post("/registro", passport.authenticate("registroLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}), SessionsController.redirectLogin);

router.get("/fail-signup", SessionsController.failSignup);

router.post("/iniciarsesion", passport.authenticate("iniciarsesionLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}), SessionsController.redirectProfile);

router.get("/fail-login", SessionsController.failLogin);

export { router as sessionsRouter };