import { DrawerForm, ProColumns, ProDescriptions, ProTable } from '@ant-design/pro-components';
import { Button, Drawer, Space } from 'antd';
import * as outofstock from '../sheetexport/outofstock'

export default (props: any) => {
  const { open, data, onClose } = props;
  const amount: ProColumns<any>[] = [
    {
      dataIndex: 'name',
      title: '品名',
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      valueEnum: {
        白管: { text: '白管' },
        短尾: { text: '短尾' },
        花肠头: { text: '花肠头' },
        长尾: { text: '长尾' },
      },
    },
    {
      dataIndex: 'batch',
      title: '批次',
      fieldProps: { disabled: true },
    },
    {
      dataIndex: 'mode',
      title: '库存方式',
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      valueType: 'select',
      valueEnum: { '急冻+冷存': { text: '急冻+冷存' } },
    },
    {
      dataIndex: 'shed', title: '存放库位', width: 100,

    },
    {
      dataIndex: 'quantity', title: '数量', valueType: 'digit',
    },
    {
      dataIndex: 'norms', title: '规格', valueType: 'digit'
    },
    {
      dataIndex: 'weight', title: '重量（KG）', valueType: 'digit',
    }, {
      dataIndex: 'days', fieldProps: {
        disabled: true,
      }, title: '天数', valueType: 'digit',
    },
    {
      dataIndex: 'price', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '单价（元/吨天）', valueType: 'digit',

    },
    {
      dataIndex: 'amountDc', title: '冻存费', valueType: 'digit',
    },
    {
      dataIndex: 'amountJd', title: '急冻费', valueType: 'digit',
    },
    {
      dataIndex: 'amountBy', title: '搬运费', valueType: 'digit',
    },
    {
      dataIndex: 'amount', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '合计', valueType: 'digit'
    },
    { dataIndex: 'desc', title: '备注' },
  ]
  const cols: ProColumns<any>[] = [
    // { dataIndex: 'c1', title: '是否新品', valueType: 'switch' },
    {
      dataIndex: 'name',
      title: '品名',
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      valueEnum: {
        白管: { text: '白管' },
        短尾: { text: '短尾' },
        花肠头: { text: '花肠头' },
        长尾: { text: '长尾' },
      },
    },
    {
      dataIndex: 'batch',
      title: '批次',
      fieldProps: { disabled: true },
    },
    {
      dataIndex: 'mode',
      title: '库存方式',
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      valueType: 'select',
      valueEnum: { '急冻+冷存': { text: '急冻+冷存' } },
    },
    {
      dataIndex: 'shed', title: '存放库位', width: 100,

    },
    {
      dataIndex: 'quantity', title: '数量', valueType: 'digit',
    },
    {
      dataIndex: 'norms', title: '规格', valueType: 'digit'
    },
    {
      dataIndex: 'weight', title: '重量（KG）', valueType: 'digit',
    },

    { dataIndex: 'desc', title: '备注' },

  ];

  const footer = <Space>
    <Button onClick={onClose}>关闭</Button><Button type="primary" onClick={() => {
      outofstock.generates(data)
    }}>打印单据</Button>
  </Space>
  return (
    <Drawer extra={footer} onClose={onClose} width="90%" title="单据详情" open={open}>
      <ProDescriptions dataSource={data}>
        <ProDescriptions.Item dataIndex="bizId" label="单据号"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="bizType" label="业务类型"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="bizOwner" label="制单人"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="customer" label="客户"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="bizDate" label="业务日期"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="quantity" label="总数量"></ProDescriptions.Item>
        <ProDescriptions.Item dataIndex="weight" label="总重量（KG）"></ProDescriptions.Item>
        {
          data.bizType !== '入库' ? <ProDescriptions.Item dataIndex="amount" label="总金额"></ProDescriptions.Item> : null
        }


        <ProDescriptions.Item dataIndex="desc" label="备注"></ProDescriptions.Item>
      </ProDescriptions>
      <ProTable search={false} columns={data.bizType === '入库' ? cols : amount} dataSource={data.details}></ProTable>
    </Drawer>
  );
};
