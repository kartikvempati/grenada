export default Object.freeze({
  steps: {
    isPedometerAvailable: {
      UPDATE: 'steps/isPedometerAvailable/UPDATE',
    },
    hoursBack: {
      UPDATE: 'steps/hoursBack/UPDATE',
    },
    stepsSinceHour: {
      UPDATE: 'steps/stepsSinceHour/UPDATE',
    },
    realtimeSteps: {
      UPDATE: 'steps/realtimeSteps/UPDATE',
    },
    currentStepCount: {
      UPDATE: 'steps/currentStepCount/UPDATE',
    },
    historicData: {
      SET: 'steps/historicData/SET',
    }
  },
  location: {
    locationData: {
      UPDATE: 'location/locationData/UPDATE',
    },
    errorMessage: {
      UPDATE: 'location/errorMessage/UPDATE',
    }
  },
});
