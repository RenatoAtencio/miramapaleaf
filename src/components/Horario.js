import React from "react";
import "../assets/estilos/Horarios.css";

export default function Horario(){
    return (
        <div>
            <h4 contentEditable>Horario</h4>
            <box>
            <table border = "1">
                <tr>
                    <th>Horas</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                </tr>
                <tr>
                    <th><p>8:10-9:40</p></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr>  
                <tr>
                    <th><p>9:50-11:20</p></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr>  
                <tr>
                    <th><p>11:30-1300</p></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr> 
                <tr>
                    <th><p>14:00-15:40</p></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr> 
                <tr>
                    <th>15:50-17:20</th>
                    <th><p>Horario Protegido</p></th>
                    <th contentEditable></th>
                    <th><p>Horario Protegido</p></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr> 
                <tr>
                    <th>17:30-19:00</th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                    <th contentEditable></th>
                </tr>     
            </table>
            </box>
        </div>
    );
}