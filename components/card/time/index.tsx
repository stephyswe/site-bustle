const CardTime = ({ data: { href, title, time } }: any) => (
  <a key={title} href={href} className="sJ3">
    <div>
      <time dateTime="2022-09-30T22:09:57.423Z" className="wtm">
        {time}
      </time>
    </div>
    <p className="h8l">{title}</p>
  </a>
);

export default CardTime;
