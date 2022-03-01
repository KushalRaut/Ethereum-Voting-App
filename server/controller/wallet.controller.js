import MetaId from '../model/metaId.model.js'

export const getAllMetaIds = async (req, res) => {
  try {
    const metaIds = await MetaId.find(req.body)
    if (metaIds.length > 0) {
      res.status(200).json({
        status: true,
        email: metaIds[0].email,
        metakey: metaIds[0].key,
      })
    } else {
      console.log('came here first')
      const unassigned = await MetaId.find({ assigned: false })
      if (unassigned.length > 0) {
        const response = await MetaId.findByIdAndUpdate(unassigned[0]._id, {
          assigned: true,
          email: req.body.email,
        })
        console.log(response)
        res.status(200).json({
          status: true,
          email: req.body.email,
          metakey: response.key,
        })
      }
    }
  } catch (err) {
    res.status(401).json({
      message: err,
    })
  }
}
