import { fork, all, takeLatest, takeEvery, put, call, delay, take } from "redux-saga/effects";
import { act } from "react-test-renderer";
import { startRequest, endRequest } from "../actions/actions";


function* counter ()
{
    yield takeLatest("INCRESE", increse)
    yield takeLatest("DECRESE", decrese)


}

function* increse (action)
{
    yield put({ type: 'INCREASE_COUNTER_ASYNC', payload: action.payload })
}


function* decrese (action)
{
    yield put({ type: 'DECREASE_COUNTER', payload: action.payload })

}


// function* watchAll ()
// {
//     yield takeEvery("*", function (action)
//     {
//         console.log(action);
//     })
// }

// function* asyncIncrease ()
// {
//     yield delay(2000);
//     yield put({ type: 'INCREASE_COUNTER_ASYNC', payload: action.payload })

// }


// function* watchDecreseCounter ()
// {

// }
// function* makeRequest (action)
// {
//     // console.log(action, 'sdsdsdsd');
//     yield 2
// }

const getData = (url) =>
{
    return fetch("https://jsonplaceholder.typicode.com/todos/" + url).then(response =>
    {
        return { response }
    }).catch(error => ({ error }))
}


function* fetchData (action)
{
    yield put(startRequest())
    let { response, error } = yield call(getData, "1")
    if (response)
    {
        yield put({ type: "RETURNED_DATA", paylaod: response.json() })
    }
    else
    {
        console.error(error);

    }

}




function* request ()
{
    yield takeEvery("USER_REQUEST", fetchData)
}

function* generatorF ()
{

    yield all([
        fork(counter),
        fork(request),
    ])

}
export default generatorF