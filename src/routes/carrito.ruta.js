router.get("/", CarritoController.getCarrito);
router.get("/:cid", CarritoController.getCarrito);
router.post("/", CarritoController.createCarrito);
router.put("/:cid/productos/:pid", CarritoController.addProductToCarrito);
router.delete("/:cid/productos/:pid", CarritoController.deleteProductodelCarrito);
router.put("/:cid/productos/:pid", CarritoController.updateProductodelCarrito);
router.post("/:cid/purchase", CarritoController.purchaseCarrito);

export { router as CarritoRouter };