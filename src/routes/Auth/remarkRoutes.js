import express from "express";
import RemarkController from "../../controllers/remarkController";
import Auth from "../../middleware/auth";

const remarkRouter = express.Router();

remarkRouter.get("/remark", Auth, RemarkController.getRemark);
remarkRouter.put("/remark/:id", Auth, RemarkController.editRemark);
remarkRouter.post("/remark/:id", Auth, RemarkController.addRemark);
remarkRouter.delete("/remark", Auth, RemarkController.deleteRemark);

export default remarkRouter;
