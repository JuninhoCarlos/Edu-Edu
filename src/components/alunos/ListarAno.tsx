import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getAlunosBySerie } from "../../reducers/alunosReducer";
import Card from "./Card";

interface ListarProps {
    ano: Number;
}

const ListarAno = (props: ListarProps) => {
    const alunos = useSelector((state: RootState) =>
        getAlunosBySerie(state, props.ano)
    );
    useEffect(() => {
        console.log("Alunos do ano ", props.ano);
        console.log(alunos);
    }, [alunos]);

    return (
        <div className="align-self-start w-100 mt-3">
            <p className="h2 m-0">
                <strong>{props.ano} Ano </strong>
            </p>
            <hr className="mt-0 mb-2"></hr>
            <div className="d-flex flew-row">
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default ListarAno;
