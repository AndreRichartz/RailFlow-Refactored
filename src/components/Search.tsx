import React from 'react'
import styles from '../styles/search.module.css'
function Search() {
  return (
    <input
      className={styles['search-input']}
      placeholder='Pesquise algo'
      name='search-input'
    />
  )
}

export default Search