module.exports = async (req, res) => {
  const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))
  const url =
    'https://collectionapi.metmuseum.org/public/collection/v1/objects/436121'
  try {
    const apiResponse = await fetch(url)
    const apiResponseJson = await apiResponse.json()
    res.status(200).json({ apiResponseJson })
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
}
