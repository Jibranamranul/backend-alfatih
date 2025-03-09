const response = (statuscode, data, message, res) => {
    res.status(statuscode).json([
        {

            payload: data,
            message,
            info: {
                seed: "",
                version: "",
                pages: ""
            }

        }



    ])
}

module.exports = response