import classNames from 'classnames';

import filters from 'data/filters.json';

import { useState } from 'react';
import { ICategory, IFilter } from 'types';
import styles from './Filters.module.scss';

export interface FiltersProps {
  filter: IFilter,
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export default function Filters(props: FiltersProps) {
  const [categories] = useState([...filters]);

  function filterByCategory(category: ICategory) {
    if (category.name === props.filter) return props.setFilter(null);
    props.setFilter(category.name);
  }

  return (
    <>
    <h5>Categorias</h5>
    <ul className='nav nav-pills flex-column'>
      {categories.map(category => (
        <li key={category.id} className='nav-item'>
          <button className={classNames({
            'nav-link': true,
            [styles.filters__filter]: true,
            'active': props.filter === category.name
          })}
            onClick={() => filterByCategory(category)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
    </>
  )
}