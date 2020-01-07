import ajax, { HttpResponse } from '../../utils/ajax'
import { Scenario } from '../../model/scenario'

const API_PATH = '/v1/scenarios'

export const fetchScenariosAjax = (): Promise<HttpResponse<Scenario[]>> => ajax.get(API_PATH)
export const deleteScenariosAjax = (ids: string): Promise<HttpResponse<{ message?: string }>> =>
  ajax.delete(`${API_PATH}/${ids}`)