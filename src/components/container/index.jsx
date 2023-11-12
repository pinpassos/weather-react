import style from './style.module.css'

const Container = (props) => {
    return (
        <div className={style.container_grid}>
            {props.children}
        </div>
    )
}

export default Container