import worksJSON from "./works.json"

export default function works(req, res) {
  res.status(200).json(worksJSON)
}
