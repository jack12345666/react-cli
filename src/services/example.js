import request from '../utils/request';
import { stringify } from 'qs'

// 示例
export function getProjectList(options) {
  return request({
    url: '/companyHome/employeeGetProjects',
    method: 'post',
    data: stringify(options)
  })
}