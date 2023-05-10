const express = require("express");
const router = express();
const statesController = require("../../controller/statesController");

router
  .route("/")
  .get(statesController.GetStates)
  .get(statesController.GetFunFact)
  .get(statesController.GetCapital)
  .get(statesController.GetState)
  .get(statesController.GetPopulation)
  .get(statesController.Getadmission)
  .get(statesController.GetNickname)
  .post(statesController.CreateNewState)
  .put(statesController.UpdateState)
  .delete(statesController.DeleteState);

router.route("/:state").get(statesController.GetStates);

module.exports = router;