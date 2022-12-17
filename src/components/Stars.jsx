import React from "react";
import Star from "./Star";

export default function Stars({count = 0}) {
  if (!Number(count) || count > 5 || count < 0) {
    console.log(`count = ${count} Неправильное число `);
    return null
  }

  const listStars = [];
  for (let i = 0; i < count; i += 1) {
    listStars.push(i);
  }

  return (
    <div>count = {count}
      <ul className="card-body-stars u-clearfix">
        {listStars.map(item => <li key={item}><Star /></li>)}
      </ul>
    </div>
  )
}