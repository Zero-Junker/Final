const States = require("../model/states");

const GetStates = async (req, res) => {
  const states = await States.find();
  if (!state)
    return res.status(400).json({ message: "No state found." });
  res.json(state);
};

const CreateNewState = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    return res
      .status(400)
      .json({ message: "State name required" });
  }
  try {
    const result = await States.create({
      state: req.body.state,
      capital: req.body.capital,
    });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

const UpdateState = async (req, res) => {
  if (!req.body.state) {
    return res.status(400).json({ message: "state name is required. " });
  }
  const state = await States.findOne({ _state: req.body.state }).exec();

  if (!state) {
    return res
      .status(204)
      .json({ message: `No State found for ${req.body.state}` });
  }
  if (req.body.state) state.state = req.body.state;

  const result = await state.save();
  res.json(result);
};

const DeleteState = async (req, res) => {
  if (!req?.body.state) {
    return res.status(400).json({ message: "State name is required. " });
  }

  const state = await States.findOne({ _state: req.body.state }).exec();

  if (!state) {
    return res
      .status(204)
      .json({ message: `No state matches  ${req.body.state}` });
  }
  const result = await state.deleteOne({ _state: req.body.state });
  res.json(result);
};
const GetState = async (req, res) => {
    if (!req.params.state) {
      return res.status(400).json({ message: "State name is required. " });
    }
  
    const stateName = parseInt(req.params.state);
    const state = data.States.find((sta) => sta.state === stateName);
  
    if (!state) {
      return res
        .status(204)
        .json({ message: `No state matches ${req.params.state}` });
    }
    res.json(state);
  };
const GetFunFact = async (req, res) => {
  if (!req.params.state) {
    return res.status(400).json({ message: "State name is required. " });
  }

  const stateName = parseInt(req.params.state);
  const state = data.States.find((sta) => sta.state === stateName);

  if (!state) {
    return res
      .status(204)
      .json({ message: `No state matches ${req.params.state}` });
  }
  const fact = state.funFact;
  res.json(fact);
};
const GetCapital = async (req, res) => {
    if (!req.params.state) {
        return res.status(400).json({ message: "State name is required. " });
      }
    
      const state = await States.findOne({ _state: req.params.state }).exec();
    
      if (!state) {
        return res
          .status(204)
          .json({ message: `No state matches ${req.params.state}` });
      }
      const capital = state.capital;
      res.json(capital);
  };
  const GetNickname = async (req, res) => {
    if (!req.params.state) {
        return res.status(400).json({ message: "State name is required. " });
      }
    
      const state = await States.findOne({ _state: req.params.state }).exec();
    
      if (!state) {
        return res
          .status(204)
          .json({ message: `No state matches ${req.params.state}` });
      }
      const nickName = state.nickName;
      res.json(nickName);
  };
  const GetPopulation = async (req, res) => {
    if (!req.params.state) {
        return res.status(400).json({ message: "State name is required. " });
      }
    
      const state = await States.findOne({ _state: req.params.state }).exec();
    
      if (!state) {
        return res
          .status(204)
          .json({ message: `No state matches ${req.params.state}` });
      }
      const population = state.population;
      res.json(population);
  };
  const Getadmission = async (req, res) => {
    if (!req.params.state) {
        return res.status(400).json({ message: "State name is required. " });
      }
    
      const state = await States.findOne({ _state: req.params.state }).exec();
    
      if (!state) {
        return res
          .status(204)
          .json({ message: `No state matches ${req.params.state}` });
      }
      const admission = state.admission;
      res.json(admission);
  };
module.exports = {
    GetCapital,
    GetFunFact,
    GetNickname,
    GetPopulation,
    GetState,
    Getadmission,
    UpdateState,
    DeleteState,
    GetStates,
};