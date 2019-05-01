const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const myFunction1 = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}
myFunction1()

const jwt = require('jsonwebtoken')

const myFunction = async () => {

    const token = jwt.sign({ _id: 'abc123' }, 'esse_eh_um_token', { expiresIn: '7 days' })

    console.log(token)

    const data = jwt.verify(token, 'esse_eh_um_token')

    console.log(data)

}

myFunction()