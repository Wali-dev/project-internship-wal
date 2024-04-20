const axios = require('axios').default;
const { StatusCodes } = require('http-status-codes');
const AppError = require('./AppError');
const config = require('../config');

const HIRE_BASE_URL = config.get('hireBaseUrl');

const fetchProjectsOfUser = async (userId) => {
  try {
    const res = await axios.get(`${HIRE_BASE_URL}/jobs?userId=${userId}`);
    return res?.data?.data;
  } catch (error) {
    console.log(error.data);
    console.log(error);
    throw new AppError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Error fetching projects of user'
    );
  }
};

module.exports = { fetchProjectsOfUser };
