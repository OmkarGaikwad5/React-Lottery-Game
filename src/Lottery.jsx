import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n=3, winningCondition=5}){
    let [ticket,setTicket] = useState(genTicket(3));

    let isWinning = winningCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h2>Your New Ticket is :{ticket[0]}{ticket[1]}{ticket[2]}</h2>
            
            <h3 className="WinningHeadline">{isWinning && "Congratulations You Won The Ticket"}</h3>
        </div>
    );
}