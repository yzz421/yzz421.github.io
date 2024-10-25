import { LoginOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  EditableFormInstance,
  EditableProTable,
  ProColumns,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form, message } from 'antd';
import dayjs from 'dayjs';
import { map, sum, toNumber } from 'lodash';
import { useRef } from 'react';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const { kucunmingxi, setkucunmingxi, kucun, setkucun } = useModel('global');
  const batch = dayjs().format('YYYYMMDD')
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
      dataIndex: 'shed', title: '存放库位', width: 100, formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      

    },
    {
      dataIndex: 'quantity', title: '数量', valueType: 'digit', fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            // 每次选中重置参数
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            editableFormRef.current?.setRowData?.(rowIndex, { ...oldRow, weight: oldRow.quantity && oldRow.norms ? oldRow.quantity * oldRow.norms : 0 });
          },
        };
      }, formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }
    },
    {
      dataIndex: 'norms', title: '规格', valueType: 'digit', fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            // 每次选中重置参数
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            editableFormRef.current?.setRowData?.(rowIndex, { ...oldRow, weight: oldRow.quantity && oldRow.norms ? oldRow.quantity * oldRow.norms : 0 });
          },
        };
      }, formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
    },
    {
      dataIndex: 'weight', title: '重量（KG）', valueType: 'digit', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
    },
    { dataIndex: 'desc', title: '备注' },
  ];
  const [form] = Form.useForm<any>();

  const hanldeClick = async () => {
    await form.validateFields();
    const value = form.getFieldsValue();
    const details: IWareHouseDetails[] = map(value?.details, (x) => ({
      customer: value?.customer,
      batch: batch,
      ...x,
    }));
    const newValue: IWareHouse = {
      bizId: value?.bizId,
      shed: '1',
      customer: value?.customer,
      bizOwner: value?.bizOwner,
      batch: batch,
      quantity: sum(value?.details?.map((x: IWareHouseDetails) => toNumber(x.quantity))),
      weight: sum(value?.details?.map((x: IWareHouseDetails) => toNumber(x.weight))),
      norms: 10,
      name: map(value?.details, (x) => x.name).join('、'),
      desc: value?.desc,
      details: details,
      bizType: '入库',
      bizDate: dayjs().format('YYYY-MM-DD'),
      days: 1
    };

    setkucunmingxi([...kucunmingxi, newValue]);
    setkucun([...kucun, ...details]);
    await waitTime(1000);
    message.success('入库成功');
    return true;
  };

  const editableFormRef = useRef<EditableFormInstance>();

  return (
    <DrawerForm
      initialValues={{
        bizId: `R` + dayjs().format('YYYYMMDD') + '001',
        batch: batch,
        bizDate: dayjs().format('YYYY-MM-DD')
      }}
      form={form}
      width="90%"
      submitter={{
        render: (props, defaultDoms) => {
          return [...defaultDoms];
        },
      }}
      drawerProps={{
        destroyOnClose: true,
      }}
      onFinish={hanldeClick}
      trigger={
        <Button type="primary">
          <LoginOutlined />
          新建入库单
        </Button>
      }
      title="新建入库单"
    >
      <ProForm.Group>
        <ProFormText label="入库单号" name={'bizId'} disabled width="md" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText name="batch" hidden label="批次" width="md" />
        <ProFormText name="customer" required rules={[{required: true}]} label="出货单位/客户" width="md" />
        <ProFormText name="bizOwner" required rules={[{required: true}]} label="制单人" width="md" />
        <ProFormText name="bizDate" required rules={[{required: true}]} disabled label="入库时间" width="md"></ProFormText>
        <ProFormText name="desc" label="备注" width="md"></ProFormText>
      </ProForm.Group>
      <EditableProTable
        editableFormRef={editableFormRef}
        name="details"
        rowKey="id"
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
            batch
          }),
        }}
        editable={{
          type: 'multiple',
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (_, dataSource) => {
            const quantity = sum(map(dataSource, i => i.quantity || 0))
            const weight = sum(map(dataSource, i => i.weight || 0))
            form.setFieldValue('quantity', quantity)
            form.setFieldValue('weight', weight)
          },
        }}
        columns={cols}
      />
      <ProForm.Group>
        <ProFormDigit placeholder="" name="quantity" disabled label="总数量" />
        <ProFormDigit placeholder="" name="weight" disabled label="总重量（KG）" />
      </ProForm.Group>
    </DrawerForm>
  );
};
