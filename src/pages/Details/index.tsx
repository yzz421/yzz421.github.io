import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import OutOfStockDrawer from './OutOfStockDrawer';
import WareHouseDrawer from './WareHouseDrawer';
import BatchDetailDrawer from './BatchDetailDrawer';
import { useState } from 'react';

export default () => {
  const { kucunmingxi } = useModel('global');
  const cols: ProColumns<IWareHouse>[] = [
    { dataIndex: 'bizId', title: '单据号', hideInSearch: true },
    {
      dataIndex: 'shed',
      title: '库房',
      hideInSearch: true,
    },
    { dataIndex: 'name', title: '品名' },
    { dataIndex: 'batch', title: '库存批次' },
    { dataIndex: 'bizType', title: '业务类型', hideInSearch: true },
    { dataIndex: 'quantity', title: '数量', hideInSearch: true },
    { dataIndex: 'norms', title: '规格', hideInSearch: true },
    { dataIndex: 'weight', title: '重量（KG）', valueType: 'digit', hideInSearch: true },
    { dataIndex: 'customer', title: '客户' },
    { dataIndex: 'amount', title: '金额', valueType: "money", hideInSearch: true },
    { dataIndex: 'desc', title: '备注', hideInSearch: true },
    {
      dataIndex: 'options',
      title: '操作',
      hideInSearch: true,
      render: (_,record) => (
        <div>
          <a onClick={()=>{
            setDetailDrawerProps({open: true, data: record,  onClose: ()=> {
              setDetailDrawerProps({open: false, data: {}})
            }})
          }}>详情</a>
        </div>
      ),
      hideInForm: true,
    },
  ];



  const [detailDrawerProps, setDetailDrawerProps] = useState<any>({open: false, data: {},});

  return (
    <PageContainer title="库存明细">
      <ProTable
        dataSource={kucunmingxi}
        columns={cols}
        toolBarRender={() => [
          <WareHouseDrawer key="warehouse" />,
          <OutOfStockDrawer key="outofstock" />,
        ]}
      ></ProTable>
      <BatchDetailDrawer {...detailDrawerProps}></BatchDetailDrawer>
    </PageContainer>
  );
};
