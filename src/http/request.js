import qs from 'qs'
import { baseUrl } from '../meta/config'
import { requestBody } from '../meta/format'

export const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(requestBody),
    url: baseUrl
}