import { Router } from "express";

import { urlShorten, getUrlById } from "../controllers/urls.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { urlShortenSchemaValidation } from "../middlewares/urlShortenSchemaValidation.middleware.js";
import { paramsSchemaValidation } from "../middlewares/paramsSchemaValidation.middleware.js";

const router = Router();

router.get("/urls/:id", paramsSchemaValidation, getUrlById);
router.post(
  "/urls/shorten",
  authValidation,
  urlShortenSchemaValidation,
  urlShorten
);

export default router;