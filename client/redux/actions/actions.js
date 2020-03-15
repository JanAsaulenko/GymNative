
export const increseData = (data) => ({
    type: "INCRESE", payload: data
})


export const decreaseData = (data) => ({
    type: "DECRESE", payload: data
})



export const startRequest = () => ({
    type: "REQUESTED"
})


export const endRequest = () => ({
    type: "END_REQUEST"
})