import { ICapacityData } from '../models/capacityModels';
import { urlApis } from './urlApis';
import capacityApi from './index';

export const capacityCreateUpdateService = async (values: ICapacityData): Promise<any> => {

    const url = values.id ? `${urlApis.CAPACITY_EDIT}${values?.id}` : `${urlApis.CAPACITY_CREATE}`;
    const resp = values.id ? await capacityApi.put(url, values) : await capacityApi.post(url, values);
    return resp;

};


export const capacityShowService = async (id?: number | string) => {
    let data: any = null;
    try {
        if (id) {
            const resp = await capacityApi.get(`${urlApis.CAPACITY_SHOW}${id}`);
            data = resp;
        }
    } catch (error) {
        console.error(error);
        data = null
    }
    return data
}