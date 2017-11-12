import React from 'react';


import { Table } from 'antd';
const { Column, ColumnGroup } = Table;


const ConfigList = ({list, del, edit}) => {
  return (
    <Table dataSource={list}>
    <Column
      title="id"
      dataIndex="id"
      key="id"
    />
    <Column
      title="title"
      dataIndex="title"
      key="title"
    />
    <Column
      title="操作"
      render={
        ({id}, record) => {
            return (
            <span>
              <a href="javascript:;" onClick={()=>edit(id)}>编辑</a>
              <span className="ant-divider" />
              <a href="javascript:;" onClick={()=>del(id)}>删除</a>
            </span>
          )
        }
      }
    />
  </Table>
  );
};


export default ConfigList;
