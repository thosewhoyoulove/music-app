/*
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-17 15:53:02
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-17 16:06:14
 */
import request from '@/utils/request'

export default function getBanner() {
    return request({
        method: 'get',
        url: '/banner?type=2',
    })
}