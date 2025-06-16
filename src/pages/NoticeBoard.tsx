import Header from "../components/Header.tsx";
import Alertcard from "../components/AlertCard.tsx";
import Titlenoticeboard from "../components/TitleNoticeBoard.tsx";
import styles from "../styles/NoticeBoard.module.css";
import Expand from "../components/Expand.tsx";
import { useMediaQuery } from "usehooks-ts";

export function NoticeBoard() {
  const isBigDevice = useMediaQuery("(min-width: 768px)");
  return (
    <>
    <span className="header"><Header /></span>
    <div className={styles["notice-board-container"]}>
      
      <div className={styles["notice-board-alerts-wrapper"]}>
        <div className={styles["notice-board-late-alert-wrapper"]}>
          <Titlenoticeboard title={"Alerta de atrasos"} />
          <Expand
            maxHeight={isBigDevice ? 700 : 200}
            children={
              <>
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
                <Alertcard message={"Trem X está com atraso devido a bloqueio nos trilhos na rota Y, linha Z."} />
              </>
            }
          />
        </div>
        <div className={styles["notice-board-mechanical-fail-wrapper"]}>
          <Titlenoticeboard title={"Falhas mecânicas"} />
          <Expand
            maxHeight={isBigDevice ? 700 : 200}
            children={
              <>
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
                <Alertcard message={"Trem X na rota Y, linha Z está apresentando problemas com o motor."} />
              </>
            }
          />
        </div>
        <div className={styles["notice-board-updates-wrapper"]}>
          <Titlenoticeboard title={"Atualizações de segurança"} />
          <Expand
            maxHeight={isBigDevice ? 700 : 200}
            children={
              <>
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
                <Alertcard message={"Vistoria no Trem X agendada para o dia X/Y."} />
              </>
            }
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default NoticeBoard;