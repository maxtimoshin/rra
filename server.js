import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
const app = express()

const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

function generateToken() {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

async function checkIfUserExists(userData) {
    const result = await fetch(`http://localhost:3001/users?login=${userData.login}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await result.json()
    if (!!data.length) {
        return false
    } else {
        await registerUser(userData)
    }
}

async function registerUser(userData) {
    fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id": generateToken(),
                "login": userData.login,
                "password": userData.password,
            }
        )
    })
    //     .then(data => data.json())
    // setUserStatus(false)
    // resetInputsValues()
    // setUserAuthStatus(true)
}

app.post('/is-user-exist', async (req, res) => {
    res.send({ "id": await checkIfUserExists(req.body) })
})


app.listen(port, () => console.log(`server started on port ${port}`))