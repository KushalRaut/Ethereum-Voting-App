import MetaId from '../model/metaId.model.js'
import connDB from '../config/db.js'
import dotenv from 'dotenv'

dotenv.config()
connDB()

const data = [
  {
    key: 'b82fc0f928909dcef673d48503e9a83b9ca446c8c5c4c8ed563d49581855bfae',
    assigned: false,
  },
  {
    key: '6f8c9f0d3a51e1ec98d1696078e77b533cc73f634c17549c7abbd0296c1a86be',
    assigned: false,
  },
  {
    key: 'ab46589175d1d8c26a893e1703cfe67f1f7b61a5c83d04ad36f7970990224e8c',
    assigned: false,
  },
  {
    key: 'f42701a3c8fe5a439c29b4aa84753ead61e9877d189a3299f99fecbd19bd0078',
    assigned: false,
  },
  {
    key: '28d76c28f8e9a42fdc33a2ccaba796d438183ce754c25f4e9c9373f10d8732d4',
    assigned: false,
  },
  {
    key: 'd6feb82896f7d8b84d71e2925ccc94ce1910f6674febef34179be4e5d413118b',
    assigned: false,
  },
  {
    key: '01a0236a7e92ca918560ce935e4ae32a9b65ea7da749b0b924e1228422a9426c',
    assigned: false,
  },
  {
    key: '87e76c0e52b008561ef8e28cf4b879f24fedd9699e19414baaa23ec7639db52c',
    assigned: false,
  },
  {
    key: '54a3ae99f64c9bcc753e04dcb86f7bf546f6f3b38f992c8d418064c792d565f0',
    assigned: false,
  },
  {
    key: 'f1cdb61f9f41aef7c40b505c7b398e57b1ccbaff857f442ead8cefb8d812b596',
    assigned: false,
  },
]

const seedWallet = async () => {
  try {
    await MetaId.deleteMany()
    console.log('All ids are deleted')
    await MetaId.insertMany(data)
    console.log('All ids are inserted')

    process.exit()
  } catch (error) {
    console.log(error.message)
    process.exit()
  }
}

seedWallet()
