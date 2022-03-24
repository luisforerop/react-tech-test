import { Dispatch, SetStateAction } from 'react'


export interface IAppContext {
	formData: FormData
	setFormData: Dispatch<SetStateAction<FormData>>
}

export type FormData = { [key: string]: any } | null

export type UseAppContext = () => IAppContext | null