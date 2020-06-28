import React, {useState} from "react";
import styles from './App.module.css';
import {getLimit} from "./services/http";

const App = (props) => {
    let [aIncMA, changeAIncMA] = useState(0);
    let [KolIzdMA, changeKolIzdMA] = useState(0);
    let [aExpBankMA, changeAExpBankMA] = useState(0);
    let [aExpAnkMA, changeAExpAnkMA] = useState(0);
    let [aExpBKIMA, changeAExpBKIMA] = useState(0);
    let [aIncSP, changeAIncSP] = useState(0);
    let [KolIzdSP, changeKolIzdSP] = useState(0);
    let [aExpBankSP, changeAExpBankSP] = useState(0);
    let [aExpAnkSP, changeAExpAnkSP] = useState(0);
    let [aExpBKISP, changeAExpBKISP] = useState(0);
    let [result, changeResult] = useState(0);


    return (
        <div className={styles.page}>
            <div className={styles.columns}>

                <div className={styles.input}>
                    <h2>Данные основного заемщика</h2>
                    <p>Основной ежемесячный доход</p>
                    <input type="number"
                           required
                           step="0.01"
                           onChange={event => {
                               changeAIncMA(parseInt(event.target.value));
                           }}
                    />

                    <p> Количество иждивенцев</p>
                    <input type="number"
                           required
                           onChange={event => {
                               changeKolIzdMA(parseInt(event.target.value));
                           }}
                    />

                    <p>Платеж по кредитам Банка</p>
                    <input type="number"
                           step="0.01"
                           required
                           onChange={event => {
                               changeAExpBankMA(parseInt(event.target.value));
                           }}
                    />

                    <p>Совокупный Платеж по кредитам, который указал клиент в анкете</p>
                    <input type="number"
                           step="0.01"
                           required
                           onChange={event => {
                               changeAExpAnkMA(parseInt(event.target.value));
                           }}
                    />

                    <p>Совокупный Платеж по кредитам других Банков</p>
                    <input type="number"
                           step="0.01"
                           required
                           onChange={event => {
                               changeAExpBKIMA(parseInt(event.target.value));
                           }}
                    />

                </div>

                <div className={styles.input}>
                    <h2>Данные супруги заемщика</h2>
                    <p>Основной ежемесячный доход</p>
                    <input type="number"
                           step="0.01"
                           onChange={event => {
                               changeAIncSP(parseInt(event.target.value));
                           }}
                    />

                    <p> Количество иждивенцев </p>
                    <input type="number"
                           onChange={event => {
                               changeKolIzdSP(parseInt(event.target.value));
                           }}
                    />

                    <p>Платеж по кредитам Банка</p>
                    <input type="number"
                           step="0.01"
                           onChange={event => {
                               changeAExpBankSP(parseInt(event.target.value));
                           }}
                    />

                    <p>Совокупный Платеж по кредитам, который указал клиент в анкете </p>
                    <input type="number"
                           step="0.01"
                           onChange={event => {
                               changeAExpAnkSP(parseInt(event.target.value));
                           }}
                    />

                    <p>Совокупный Платеж по кредитам других Банков </p>
                    <input type="number"
                           step="0.01"
                           onChange={event => {
                               changeAExpBKISP(parseInt(event.target.value));
                           }}
                    />
                </div>

            </div>

            <div className={styles.sendButton} onClick={() => {
                    getLimit({
                    aIncMA: aIncMA,
                    KolIzdMA: KolIzdMA,
                    aExpBankMA: aExpBankMA,
                    aExpAnkMA: aExpAnkMA,
                    aExpBKIMA: aExpBKIMA,
                    aIncSP: aIncSP,
                    KolIzdSP: KolIzdSP,
                    aExpBankSP: aExpBankSP,
                    aExpAnkSP: aExpAnkSP,
                    aExpBKISP: aExpBKISP
                }).then(response => {
                    if (response.ok) {
                        return response.json();
                    } else  {
                        throw new Error('Неверные данные');
                    }
                }).then(json => {
                        changeResult(json.limit);
                }).catch(err => {
                    alert("Неверные данные");
                    console.log(err);
                });
            }}>
                <p>Получить</p>
            </div>

            <div className={styles.result}>Совокупный лимит для всех участников сделки: {result.toFixed(2)}</div>

        </div>
    )
};

export default App;