import Link from 'next/link'

export default function WorkList({ workList }) {
  const tags = [
    {id: 1, name: 'Дизайн'},
    {id: 2, name: 'Доработки сайта'}
  ]
  console.log('work list', workList);
  return(
    <div className="works">
      { workList.map(work => (
        <Link href={`work/${work.url}`}>
          <a className="work"
             style={{
              'background-image': `url("/img/works/${work.url}/thumbnail.png")`,
              'background-color': `#${work.color}`
          }}>
            <div className="work__name">{work.name}</div>
            <div className="tags">
              {work.tags.map((tag, index) => (
                <div className="tag" key={index}>{tag}</div>
              ))}
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}