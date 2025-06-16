import styles from "../styles/TitleNoticeBoard.module.css";


type TitlenoticeboardProps = {
    title: string;
}

function Titlenoticeboard({title}:TitlenoticeboardProps) {
  return (
    <>
    <div className={styles['title']}>{title}</div>
    </>
  )
}

export default Titlenoticeboard