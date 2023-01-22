import express from "express";
import RemarkController from "../../controllers/remarkController";
import Auth from "../../middleware/auth";

const remarkRouter = express.Router();

remarkRouter.get("/remark", Auth, RemarkController.getRemark);
remarkRouter.post("/remark", Auth, RemarkController.addRemark);
remarkRouter.put("/remark/:id", Auth, RemarkController.editRemark);
remarkRouter.delete("/remark/:id", Auth, RemarkController.deleteRemark);

export default remarkRouter;
