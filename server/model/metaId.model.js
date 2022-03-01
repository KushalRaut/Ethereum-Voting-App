import mongoose from 'mongoose'

const metaIdSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      unique: false,
      default: 'noone@gmail.com',
    },
    assigned: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const MetaId = mongoose.model('MetaId', metaIdSchema)

export default MetaId
