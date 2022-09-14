import { useEffect } from 'react'

export default function Search(props) {
  const { search, onSearchChange, onSubmit } = props

  // useEffect(() => {
  //   onSearchChange('')
  // }, [])

  return (
    <div className="row">
      <div className="col s12">
        <form
          className="input-field"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit(search)
          }}
        >
          <input
            id="search"
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {/* <label htmlFor="search">Search</label> */}
        </form>
      </div>
    </div>
  )
}