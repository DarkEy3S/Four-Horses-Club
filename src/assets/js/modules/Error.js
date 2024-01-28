
export const funError = () => {

    const funErrorCode = (errorCode, errorCause) => {
        const errorText = "Error: Unable to process the request. Please try again later. (Error code:"

        if (errorCause != undefined) throw console.error(`${errorText} ${errorCode})
${errorCause}`)
        throw console.error(`${errorText} ${errorCode})`)
    }

}

