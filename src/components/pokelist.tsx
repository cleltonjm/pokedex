import styles from './pokelist.module.css'

export default function PokeList() {
    return (
        <ol className={styles.pokemons}>
            <li className={styles.pokemon}>
                <span className={styles.number}>#001</span>
                <span className={styles.name}>Bulbasaur</span>

                <div className={styles.detail}>
                    <ol className={styles.types}>
                        <li className={styles.type}>grass</li>
                        <li className={styles.type}>poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur" />
                </div>
            </li>
        </ol>
    )
}