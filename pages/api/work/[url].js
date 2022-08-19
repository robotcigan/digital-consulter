export default async function work(req, res) {
  const workRes = await fetch(`http://localhost:3000/api/works`)
  const workList = await workRes.json()

  const { url } = req.query
  workList.forEach(work => {
    if (work.url === url) {
      res.status(200).json(work)
    } 
  })
}