import styles from './FilterButtons.module.scss'

const FilterButtons = ({ filter, onChange }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.button}
        onClick={() => onChange('all')}
        disabled={filter === 'all'}
      >
        All
      </button>
      <button
        className={styles.button}
        onClick={() => onChange('active')}
        disabled={filter === 'active'}
      >
        Active
      </button>
      <button
        className={styles.button}
        onClick={() => onChange('completed')}
        disabled={filter === 'completed'}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons
