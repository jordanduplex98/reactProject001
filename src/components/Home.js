import React,{useState,useEffect} from 'react';
import {toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = ()=> {

    const notify = () => toast("Wow so easy!");
    const [data,setData] = useState([]);
    const loadData = async()=>{
        const response = await axios.get('http://localhost:5000/api/get');
        setData(response.data);
    }

    useEffect(()=>{
        loadData();
    },[]);

    return(
        <div>
            <h1>Home</h1>
            <h1>Bonjour react avec mysql</h1>
            <button onClick={notify}>Notify!</button>
            <Link to={'/AddUser'}>
                <button>Ajouter</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Noms</th>
                        <th>Telephone</th>
                        <th>sexe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.telephone}</td>
                                    <td>{item.sex}</td>
                                    <td>
                                        <Link to={`/Update/${item.id}`}>
                                            <button>Modifier</button>
                                        </Link>
                                        <button>Supprimer</button>
                                        <Link to={`/View/${item.id}`}>
                                            <button>Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;