import React, {useState} from 'react';
import {fetcher} from "../api/http";
import {config} from "../../config";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import Loading from "../elements/Loading";
import useSWR from "swr";
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";
import ky from "ky";
import Cookies from "js-cookie";

export default function TokenLogin() {
    const { token } = useParams();
    const navigation = useNavigate();
    const [loading, setLoading] = useState<boolean>()
    const [errors, setError] = useState<string>()
    const { data, error, isLoading } = useSWR(`${config.API_URL}/auth/login/${token}`, fetcher);
    if(!data || (error || isLoading)) {
        return <Loading/>
    }
    if(data.status !== 'success') {
        navigation('/')
    }
    const login = async () => {
        setLoading(true)
        const response = await ky.post(`${config.API_URL}/auth/login/${token}`);
        let data: any;
        try {
            data = await response.json();
        } catch (error) {
            console.error('Erreur lors de la conversion en JSON :', error);
            setError('JSON_C0NVERT')

        }
        if(data.status !== 'success') {
            setError(data.message)
        }
        Cookies.set('access_token', data.data.access_token);
        navigation('/')

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="SupDePep"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Connexion à votre compte
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 text-center">
                    {errors &&
                        <div className="rounded-md bg-red-50 p-4 mb-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">Erreur</h3>
                                    <div className="mt-2 text-sm text-red-700">
                                        {errors}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <h3 >Bonjour {data.data.name[0].toUpperCase() + data.data.name.slice(1, data.data.name.lenght)}!</h3>
                    <p>Complétez le processus de connexion en cliquant sur le bouton ci-dessous.</p>

                    <button
                        type="button"
                        onClick={() => login()}
                        disabled={loading}
                        className={` ${loading && 'opacity-40'} my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    >
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}