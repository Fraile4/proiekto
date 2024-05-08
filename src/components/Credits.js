import React from 'react'

export const Credits = () => {

    let egileak = ["Amets", "Intza", "Unai"];

  return (
    <div>
        <h3>Egileak:</h3>
        <ul>
            {
                egileak.map((egilea, index) => {
                    return <li key={index}>{egilea}</li>
                })
            }
        </ul>
    </div>
  )
}
