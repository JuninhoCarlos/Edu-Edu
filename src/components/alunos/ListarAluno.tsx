import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../app/store";
import { getAlunos } from "../../reducers/alunosReducer";
import { getSeries, getAlunosBySerie } from "../../reducers/alunosReducer";

import BarraDeBusca from "./BarraDeBusca";
import ListarAno from "./ListarAno";

import "./style.css";

const ListarAluno = () => {
    const dispatch = useAppDispatch();
    const series = useSelector(getSeries);
    const test = useSelector((state: RootState) => getAlunosBySerie(state, 1));

    useEffect(() => {
        console.log("effect listar aluno");
        dispatch(getAlunos());
    }, []);

    useEffect(() => {
        console.log("test");
        console.log(test);
        console.log(series);
    }, [test]);

    return (
        <div className="d-flex flex-column align-items-center">
            <BarraDeBusca />
            {series.map((element, index) => (
                <ListarAno ano={element} key={index} />
            ))}
        </div>
    );
};

export default ListarAluno;
