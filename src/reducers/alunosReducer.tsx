import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";
import { act } from "react-dom/test-utils";

import { RootState } from "../app/store";

interface Aluno {
    id?: string;
    nome: string;
    escola: string;
    avatar?: File;
    serie: number;
}

interface Avatar {
    fileName: string;
    file: File;
}

interface AlunosState {
    alunos: Array<Aluno>;
    status: "loading" | "done";
}

export const uploadAvatar = createAsyncThunk(
    "alunos/uploadAvatar",
    async (avatar: Avatar) => {
        const srcRef = firebase.storage().ref().child("avatars");
        const spaceRef = srcRef.child(avatar.fileName);
        await spaceRef
            .put(avatar.file)
            .then((snapshot) => {
                return snapshot;
            })
            .catch((e) => {
                return Promise.reject("Erro ao fazer upload do avatar");
            });
    }
);

export const getAlunos = createAsyncThunk("alunos/getAlunos", async () => {
    const snapshot = await firebase
        .firestore()
        .collection("alunos")
        .orderBy("serie")
        .get();

    return snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    }) as Array<Aluno>;
});

export const addAluno = createAsyncThunk(
    "alunos/addAluno",
    async (aluno: Aluno, { dispatch }) => {
        const db = firebase.firestore();

        await db
            .collection("alunos")
            .add({
                nome: aluno.nome,
                serie: aluno.serie,
                escola: aluno.escola,
            })
            .then((docRef) => {
                if (aluno.avatar) {
                    dispatch(
                        uploadAvatar({
                            fileName: docRef.id,
                            file: aluno.avatar,
                        })
                    );
                }
                return docRef.id;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
);

const initialState: AlunosState = {
    alunos: [],
    status: "done",
};
const alunosReducer = createSlice({
    name: "alunos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addAluno.fulfilled, (state, action) => {
            //state.alunos.push(action)
        });
        builder.addCase(addAluno.pending, (state, action) => {
            console.log("pending addAluno");
        });
        builder.addCase(addAluno.rejected, (state, action) => {
            console.log("rejected addAluno");
            console.log(action.error);
        });
        builder.addCase(getAlunos.fulfilled, (state, action) => {
            state.alunos = action.payload;
        });
        builder.addCase(getAlunos.rejected, (state, action) => {
            console.log(action.error);
        });
    },
});

//selectors
export const getSeries = (state: RootState) => {
    const series: Array<number> = [];
    state.alunos.alunos.forEach((aluno) => {
        if (!series.find((serie) => serie === aluno.serie))
            series.push(aluno.serie);
    });
    return series;
};

export const getAlunosBySerie = (state: RootState, serie: Number) =>
    state.alunos.alunos.filter((aluno) => aluno.serie === serie);

//const selectTodoById = (state, todoId) => {
//        return state.todos.find(todo => todo.id === todoId)
//   }
//const todo = useSelector(state => selectTodoById(state, id))

export default alunosReducer.reducer;
