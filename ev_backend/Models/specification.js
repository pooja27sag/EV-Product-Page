const mongoose = require('mongoose');

const SpecificationSchema = new mongoose.Schema({
    general: {
        exShowroomPrice: String,
        certifiedRange: String,
        trueRange: String,
        motorPowerNominalPeak: String,
        chargingTime: String,
        fastCharging: String
    },
    technical: {
        motorPowerNominalPeak: String,
        motorType: String,
        batteryType: String,
        batteryCapacity: String,
        keyType: String,
        chargerType: String,
        ignition: String,
        frontTyreSize: String,
        rearTyreSize: String,
        brakingSystem: String,
        frontBrakeDiameter: String,
        rearBrakeDiameter: String,
        frontBrakeType: String,
        rearBrakeType: String,
        frameType: String,
        transmission: String
    },
    performance: {
        topSpeed: String,
        certifiedRange: String,
        ridingModes: String,
        trueRangeEcoMode: String,
        trueRangeNormalMode: String,
        acceleration_0_40kmh: String,
        braking_60_0kmph: String,
        maxTorque: String
    },
    features: {
        instrumentCluster: String,
        navigation: String,
        fastCharging: String,
        reverseAssist: String,
        cruiseControl: String,
        chargingStationLocator: String,
        sideStandAlert: String,
        sideStandMotorCutoff: String,
        safeguards: String,
        usbPorts: String,
        music: String,
        remoteBootUnlock: String,
        gpsConnectivity: String,
        advancedRegen: String,
        vacationMode: String,
        predictiveMaintenance: String,
        proximityUnlock: String,
        hillHold: String,
        footpegs: String
    },
    weightAndDimensions: {
        weight: String,
        length: String,
        width: String,
        height: String,
        groundClearance: String,
        gradeability: String,
        wheelbase: String,
        seatHeight: String,
        seatLength: String,
        floorboardSize: String,
        waterWade: String
    },
    electricals: {
        headlight: String,
        tailight: String,
        indicators: String,
        projector: String,
        hazardLight: String,
        bootLight: String
    },
    storage: {
        underSeat: String,
        glovebox: String
    },
    ingressProtection: {
        battery: String,
        motor: String,
        controller: String
    },
    chassisAndSuspension: {
        nameType: String,
        frontSuspension: String,
        rearSuspension: String
    },
    misc: {
        bagHook: String,
        pannierStay: String,
        accessoryMounts: String
    },
    colors: [String],
    warranty: {
        vehicleWarranty: String,
        batteryWarranty: String
    }
}, { _id: false });

module.exports = SpecificationSchema;
