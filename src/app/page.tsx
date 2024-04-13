'use client';

import { Button, Input, Label } from "@/components";
import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react";


export default function Page() {
  const [cpf, setCpf] = useState('');
  
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = 
    useCallback((event) => setCpf(event.target.value), []);

  const cpfValidation = useCallback((cpf: string): boolean => {
    return /^(\d{11})|(\d{3}(\.\d{3}){2}-\d{2})$/.test(cpf);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault(); 

    if (cpfValidation(cpf)) 
      alert('CPF é válido!');
    else
      alert('CPF é inválido!');
  }, [cpf, cpfValidation]);

  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Validador de CPF</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Por favor, insira seu CPF</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label className="sr-only" htmlFor="cpf">
                CPF
              </Label>
              <Input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleInputChange}
                id="cpf"
                name="cpf"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Teste de validação
            </Button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">Seu número de CPF será validado ao ser enviado.</p>
      </div>
    </main>
  )
}