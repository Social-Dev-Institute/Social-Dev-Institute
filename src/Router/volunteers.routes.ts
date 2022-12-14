import { Router } from "express";
import { voluntaryAddCampaignController, voluntaryListController, volunteersCreateController, volunteersDeleteController, volunteersListController, volunteersLoginController, volunteersUpdateController } from "../Controllers/volunteers.controller";
import verifyTokenVoluntaryMiddleware from "../Middlewares/verifyTokenVoluntary.middleware";
import verifyVoluntaryExists from "../Middlewares/verifyVoluntaryExists";

const volunteersRoutes = Router()

volunteersRoutes.post(
  "/register",
  verifyVoluntaryExists,
  volunteersCreateController
)

volunteersRoutes.post(
  "/login",
  volunteersLoginController
)

volunteersRoutes.post(
  "/AddCampaign/:id",
  verifyTokenVoluntaryMiddleware,
  voluntaryAddCampaignController
)

volunteersRoutes.get(
  "",
  verifyTokenVoluntaryMiddleware,
  volunteersListController
)

volunteersRoutes.get(
  "/:id",
  verifyTokenVoluntaryMiddleware,
  voluntaryListController
)

volunteersRoutes.patch(
  "/:id",
  verifyTokenVoluntaryMiddleware,
  volunteersUpdateController
)

volunteersRoutes.delete(
  "/:id",
  verifyTokenVoluntaryMiddleware,
  volunteersDeleteController
)


export default volunteersRoutes