import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import * as _ from 'lodash';
import { useState } from 'react';
import { waitTime } from '../Details/WareHouseDrawer';

export default () => {
  const { kucun } = useModel('global');
  const total = _.sum(kucun.map((x) => x.weight));
  const [showBatch, setShowBatch] = useState<boolean>(false);
  const cols: ProColumns<IIventory>[] = [
    { dataIndex: 'shed', title: '库房', hideInSearch: true },
    { dataIndex: 'name', title: '品类' },
    { dataIndex: 'batch', hideInTable: !showBatch, title: '库存批次' },
    { dataIndex: 'days', hideInTable: !showBatch, title: '天数', hideInSearch: true },
    { dataIndex: 'quantity', title: '数量', hideInSearch: true },
    { dataIndex: 'norms', title: '规格', hideInSearch: true },
    { dataIndex: 'weight', title: '重量（KG）', hideInSearch: true },
    { dataIndex: 'customer', title: '客户' },
    // {
    //   dataIndex: 'options',
    //   title: '操作',
    //   render: () => (
    //     <div>
    //       <a>查看明细</a>
    //     </div>
    //   ),
    //   hideInSearch: true,
    // },
  ];
  console.log('kucun', kucun)
  return (
    <PageContainer title="库存总览">
      <ProTable
        request={async (params) => {
          setShowBatch(!!params.batch);
          await waitTime(300)
          let rslt = kucun;
          if (params.name) {
            rslt = rslt.filter(i => i.name.includes(params.name))
          }
          if (params.batch) {
            rslt = rslt.filter(i => i.batch?.includes(params.batch))
          }
          else {
            rslt = _.map(_.groupBy(rslt, 'name'), i => {
              if (i.length == 1) {
                return _.get(i, [0])
              }
              else {
                return _.reduce(i, (prev, curr) => {
                  return { ...curr, quantity: prev.quantity || 0 + curr.quantity, weight: prev.weight || 0 + curr.weight }
                }, {} as IIventory)
              }
            })
          }
          return { data: rslt, success: true, total: rslt.length }
        }}
        headerTitle={`库存总重量：${total} KG`}
        columns={cols}
      ></ProTable>
    </PageContainer>
  );
};
