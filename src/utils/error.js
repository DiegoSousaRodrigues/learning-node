export default function handleError(e, res) {
  console.log(e)
  res.status(500).send(e.message)
}
