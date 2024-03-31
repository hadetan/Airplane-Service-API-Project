const { StatusCodes } = require('http-status-codes');

const { AirplanService } = require('../services');
const { response } = require('express');

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus a330', capacity: 180}
 */
async function createAirplane(req, res) {
    try {
        console.log("inside airplane controller");
        
        const airplane = await AirplanService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created an airplane',
                    data: airplane,
                    error: {}
                })
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating an airplane',
                    data: {},
                    error: error
                });
    }
}

module.exports = {
    createAirplane
}