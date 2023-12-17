import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//páginas
import Home from '../pages/Home.jsx'
import VacinasBusca from '../pages/VacinasTelaBusca.jsx';
import MyAgendamentos from '../pages/MyAgendamentos.jsx';
import CancelamentoAgendamento from '../pages/CancelarAgendamento.jsx';
import SucessoAgendamento from '../pages/SucessoAgendamento.jsx';
import CadastrarUser from '../pages/CadastrarUser.jsx';
import Login from '../pages/Login.jsx';
import CadastrarOperator from '../pages/CadastrarOperator.jsx';
import CadastrarVacina from '../pages/CadastrarVacina.jsx';
import HomeTelaOperator from '../pages/HomeTelaOperator.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vacinas",
        element: <VacinasBusca />,
    },
    {
        path: "/meus-agendamentos",
        element: <MyAgendamentos />,
    },
    {
        path: "/meus-agendamentos/cancelado",
        element: <CancelamentoAgendamento />,
    },
    {
        path: "/sucesso",
        element: <SucessoAgendamento />,
    },
    {
        path: "/cadastrar-user",
        element: <CadastrarUser />,
    },
    {
        path: "/cadastrar-operator",
        element: <CadastrarOperator />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastrar-vacina",
        element: <CadastrarVacina />,
    },
    {
        path: "/home-operator",
        element: <HomeTelaOperator />,
    },
]);
