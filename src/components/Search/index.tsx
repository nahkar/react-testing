import React, { useState } from 'react'

type Props = {}

export const Search = (props: Props) => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <input data-testid="search" type="text" value={search} onChange={e => setSearch(e.target.value) }/>
    </div>
  )
}