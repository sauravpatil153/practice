import React,{useState,useEffect} from "react";
import axios from "axios";
import { response } from "express";

const TrainerDetails = () =>{

    const [trainerarr,setTrainer]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/").then((response)=>{
            setTrainer(response.data);
        });
    },[]);

    const renderList = () =>{
        return trainerarr.map((trainer)=>{
            return <tr key={trainer.trainerid}>
                <td>trainer.trainerid</td>
                <td>trainer.tname</td>
                <td>trainer.taddress</td>
                <td>trainer.gender</td>
                <td>trainer.skill</td>
                <td>trainer.qualification</td>
                <td>trainer.contactno</td>
                <td>trainer.doj</td>
            </tr>
        });
    }

    return (
        <div>
            <div>
                <button type="button" id="insert-btn" name="insert-btn">Insert Trainer Details</button>
            </div>
            <table border={"2"}>
                <thead>
                    <th>
                        <td>Trainer Id</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Gender</td>
                        <td>Skill</td>
                        <td>Qualifications</td>
                        <td>Contact No</td>
                        <td>DOJ</td>
                    </th>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    );
}

export default TrainerDetails;