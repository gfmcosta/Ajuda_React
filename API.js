import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = "http://www.ajudamais.somee.com/api/v1/";
export default {
    auth: async (login, senha) => {
        const req = await fetch(`${BASE_API}auth/login?Login=` + login + '&Senha=' + senha, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = await req.json();
        return json;
    },
    searchByNif: async (NIF) => {
        const req = await fetch(`${BASE_API}paciente?Query=nif%3D` + NIF, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = await req.json();
        return json;
    },
    register: async (nome, senha, sexo, telemovel, nacionalidade, dataNasc, email, nif, cc) => {
        var Ativo = true;
        const req = await fetch(`${BASE_API}paciente`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idPaciente: 0,
                idUtilizador: 0,
                nome: nome,
                senha: senha,
                sexo: sexo,
                telemovel: telemovel,
                nacionalidade: nacionalidade,
                dataNasc: dataNasc + 'T00:00:00',
                email: email,
                nif: nif,
                cc: cc,
                ativo: Ativo,
            }),
        });
        const json = await req.json();
        return json;
    },
    searchMarcacao: async (idPaciente) => {
        var date = new Date().getDate();
        var month = new Date().getMonth()+1;
        if (month < 10) {
            month = '0' + month;
        }
        var year = new Date().getFullYear();


        const req = await fetch(`${BASE_API}marcacao/filter`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Offset: 0,
                Limit: 10,
                Sort: null,
                Filter: {
                    Field: "data",
                    Operator: "gte",
                    Value: year + '-' + month + '-' + date + 'T00:00:00',
                    Logic: "and",
                    Filters: [
                        {
                            Field: "data",
                            Operator: "gte",
                            Value: year + '-' + month + '-' + date + 'T00:00:00',
                            Logic: "and",
                            Filters: null,
                        },
                        {
                            Field: "idPaciente",
                            Operator: "eq",
                            Value: idPaciente,
                            Logic: "and",
                            Filters: null,
                        }
                    ]
                }
            }),
        });
        const json = await req.json();
        return json;
    }

    };
