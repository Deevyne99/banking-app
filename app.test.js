const request = require('supertest')
const response = require('./app')
const app = require('./app')

describe('Banka Api Endpoint test', () => {
  // it('GET / all users in the application', async () => {
  //   const response = await request(app)
  //     .get('/api/v1/banka/register')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //   expect(response.body).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         firstName: 'Kalu',
  //         lastName: 'Divine',
  //         email: 'kaludivine545@gmail.com',
  //         password:
  //           '$2b$10$WDojv/lBH6invq3uZQxGIulXq2v.Up8VTcYYWD7T4v5bBzG95DvYu',
  //         userId: 1658610979451,
  //         token:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbHVkaXZpbmU1NDVAZ21haWwuY29tIiwiaWF0IjoxNjU4NjEwOTc5LCJleHAiOjE2NTg2OTczNzl9.5FR4EUFClk_By4q4HfAV_LepDnGtdTJuH0PLDw5G3IQ',
  //         type: 'client',
  //       }),
  //     ])
  //   )
  // })
  it('POST/ REGISTER ROUTE ', async () => {
    const response = await request(app)
      .post('/api/v1/banka/register')
      .send({
        firstName: 'Kalu',
        lastName: 'Divine',
        email: 'kaludivine5@gmail.com',
        password: 'fiverr',
      })
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          firstName: 'Kalu',
          lastName: 'Divine',
          email: 'kaludivine5@gmail.com',
          userId: expect.any(Number),
          token: expect.any(String),
        },
      })
    )
  })
  it('POST/ LOGIN ROUTE TO RETURN 201', async () => {
    const response = await request(app)
      .post('/api/v1/banka/login')
      .send({
        email: 'kaludivine545@gmail.com',
        password: '12345',
      })
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          firstName: 'Kalu',
          lastName: 'Divine',
          email: 'kaludivine545@gmail.com',
          userId: 1658610979451,
          token: expect.any(String),
        },
      })
    )
  })
  it('POST-->Creates a banka bank account ', async () => {
    const response = await request(app)
      .post('/api/v1/banka/create-acct')
      .send({
        firstName: 'Kalu',
        lastName: 'Divine',
        email: 'kaludivine545@gmail.com',
        phoneNumber: '8148158802',
        DOB: '08/18/1999',
        gender: 'male',
        stateOfOrigin: 'Abia',
        city: 'Arochukwu',
        address: 'Angwa Rukuba',
        accountType: 'current',
      })
      .expect('Content-type', /json/)
      .expect(201)
    expect(response.status).toEqual(201)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 201,
        data: {
          accountNumber: expect.any(Number),
          firstName: 'Kalu',
          lastName: 'Divine',
          email: 'kaludivine545@gmail.com',
          phoneNumber: 8148158802,
          accountType: 'current',
          openingBalance: 0.0,
          DOB: '08/18/1999',
          gender: 'male',
          stateOfOrigin: 'Abia',
          city: 'Arochukwu',
          address: 'Angwa Rukuba',
        },
      })
    )
  })
  it('PATCH/ TEST TO ACTIVATE A USER ACCOUNT', async () => {
    let token = req.header.token
    const response = await request(app)
      .patch('/api/v1/banka/activate/1658819114809')
      .send({
        accountId: 1658610979451,
      })
      .set('authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          accountNumber: expect.any(Number),
          status: 'active',
        },
      })
    )
  })
  it('PATCH/ TEST TO DEACTIVATE A USER ACCOUNT', async () => {
    const response = await request(app)
      .patch('/api/v1/banka/deactivate/1658819114809')
      .send({
        accountId: 1658610979451,
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          accountNumber: expect.any(Number),
          status: 'dormant',
        },
      })
    )
  })

  it('DELETE/ TEST TO DELETE A USER ACCOUNT', async () => {
    const response = await request(app)
      .delete('/api/v1/banka/delete/1658819114709')
      .send({
        accountNumber: expect.any(Number),
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        message: 'Account successfully deleted',
      })
    )
  })
  it('PATCH/ CREATE CASHIER', async () => {
    const response = await request(app)
      .patch('/api/v1/banka/create-cashier/1658610979451')
      .send({
        userId: expect.any(String),
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          email: expect.any(String),
          type: 'staff',
          isAdmin: false,
        },
      })
    )
  })
  it('PATCH/ CREATE ADMIN', async () => {
    const response = await request(app)
      .patch('/api/v1/banka/create-admin/1658818824970')
      .send({
        userId: expect.any(Number),
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          email: expect.any(String),
          type: 'staff',
          isAdmin: true,
        },
      })
    )
  })
  it('GET/ A single account ', async () => {
    const response = await request(app)
      .get('/api/v1/banka/account/1658819114709')
      .send({ accountNumber: expect.any(Number) })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
  })
  it('Get All Account', async () => {
    const response = await request(app)
      .get('/api/v1/banka/account')
      .expect('Content-Type', /json/)
    expect(response.status).toEqual(200)
  })
  it('POST credit  transaction ', async () => {
    const response = await request(app)
      .post('/api/v1/banka/credit')
      .send({
        accountNumber: 1658819114709,
        accountName: expect.any(String),
        amount: 300,
        cashierId: 1658818824970,
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          transactionId: expect.any(Number),
          accountNumber: '1658819114709',
          amount: 300,
          cashierId: 1658818824970,
          transactionType: 'Deposit',
          accountBalance: expect.any(Number),
        },
      })
    )
  })
  it('POST Debit  transaction ', async () => {
    const response = await request(app)
      .post('/api/v1/banka/debit')
      .send({
        accountNumber: 1658819114709,
        accountName: expect.any(String),
        amount: 100,
        cashierId: 1658818824970,
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          transactionId: expect.any(Number),
          accountNumber: '1658819114709',
          amount: 100,
          cashierId: 1658818824970,
          transactionType: 'Withdrawal',
          accountBalance: expect.any(Number),
        },
      })
    )
  })
  it('PATCH RESET PASSWORD', async () => {
    const response = await request(app)
      .patch('/api/v1/banka/reset/1658610979451')
      .send({
        userId: 1658610979451,
        oldPassword: '12345',
        newPassword: 'Divine',
        confirmPassword: 'Divine',
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          oldPassword: '12345',
          newPassword: expect.any(String),
          confirmPassword: expect.any(String),
        },
      })
    )
  })
  it('POST test for Contact me ', async () => {
    const response = await request(app)
      .post('/api/v1/banka/contact')
      .send({
        name: 'Kalu Divine',
        email: 'divine@gmail.com',
        message: 'How can i register',
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        data: {
          name: 'Kalu Divine',
          email: 'divine@gmail.com',
          message: 'How can i register',
        },
      })
    )
  })
})
// test('Testing Aoi Routes for Banka app', () => {
//   it('POST test for Contact me ', async () => {
//     const response = await request(app)
//       .post('/api/v1/banka/contact')
//       .send({
//         name: 'Kalu Divine',
//         email: 'divine@gmail.com',
//         message: 'How can i register',
//       })
//       .expect('Content-Type', /json/)
//       .expect(200)
//     expect(response.status).toEqual(200)
//     expect(response.body).toEqual(
//       expect.objectContaining({
//         status: 200,
//         data: {
//           name: 'Kalu Divine',
//           email: 'divine@gmail.com',
//           message: 'How can i register',
//         },
//       })
//     )
//   })
// })
