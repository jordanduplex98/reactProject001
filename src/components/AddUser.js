import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
import axios from "axios";
import {toast} from "react-toastify";

const initialiseState = {
    nom:"",
    telephone:"",
    sexe:""
};

const AddUser = ()=>{
    const [state,setState] = useState(initialiseState);

    const history = useHistory();

    const {nom,telephone,sexe} = state;

    const handleSubmit = (e) => { 
        e.prevenDefault();
        if (!nom || !telephone || !sexe) {
            toast.error("Veiller renseigner les infos")
        } else {
            axios.post("http://localhost:5000/api/post",{
                nom,telephone,sexe
            }).then(()=>{
                setState({nom:"",telephone:"",sexe:""})
            }).catch((err)=>{
                toast.error(err.response.data)
            });
            toast.success("Enregistrement effectuer")
            setTimeout(()=>history.push("/"),500);
        }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[nom]:value});
    }

    return(
        <div>
            <h2>Ajouter/Modifier</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom</label>
                <input type="text" placeholder="Entrer le nom ..." id="nom" name="nom" value={nom} onChange={handleInputChange}/>

                <label htmlFor="telephone">Telephone</label>
                <input type="number" placeholder="Entrer le telephone ..." id="telephone" name="telephone" value={telephone} onChange={handleInputChange}/>

                <label htmlFor="nom">Sexe</label>
                <input type="text" placeholder="Entrer le Sexe ..." id="sexe" name="sexe" value={sexe} onChange={handleInputChange}/>

                <input type="submit" value="Enregistrer"/>
            </form>
        </div>
    )
}

export default AddUser;