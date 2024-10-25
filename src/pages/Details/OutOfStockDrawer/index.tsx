import { LogoutOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  EditableFormInstance,
  EditableProTable,
  ProColumns,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form, message } from 'antd';
import dayjs from 'dayjs';
import { map, max, min, sum, toNumber, uniq } from 'lodash';
import { useRef } from 'react';

export default () => {
  const { kucun, setkucun, kucunmingxi, setkucunmingxi } = useModel('global');
  const batch = dayjs().format('YYYYMMDD')
  const editableFormRef = useRef<EditableFormInstance>();
  const getCalcValue = (oldRow: IWareHouseDetails) => {
    const { price = 0, days = 0, norms = 0, quantity = 0 } = oldRow
    const weight = norms * quantity
    return {
      ...oldRow,
      weight: weight,
      amountDc: weight / 1000 * price * days,
      amountBy: weight / 1000 * 130,
      amountJd: weight / 1000 * 400,
      amount: weight / 1000 * price * days + weight / 1000 * 130 + weight / 1000 * 400
    }
  }
  const cols: ProColumns<any>[] = [
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
      },
      fieldProps: (_, { rowIndex, }) => {
        return {
          onSelect: () => {
            // 每次更新批次
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            editableFormRef.current?.setRowData?.(rowIndex, { ...oldRow, batch: undefined });
          },
        };
      }
    },
    {
      dataIndex: 'batch',
      title: '库存批次',
      valueType: 'select',
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
      fieldProps: (form, data) => {
        const name = data?.entity?.name;
        if (name) {
          const uniqKucun = uniq(kucun.filter((x) => x.name === name));
          const batchs = uniqKucun.map(x => x.batch)
          return {
            options: batchs.map(x => ({ label: x, value: x })),
            onSelect: () => {
              const { rowIndex } = data;
              const oldRow = editableFormRef.current?.getRowData!(rowIndex);
              if (oldRow.batch) {
                const days = dayjs().diff(dayjs(oldRow.batch), 'day')
                const newValue = getCalcValue({ ...oldRow, days: Math.max(days, 15) });
                editableFormRef.current?.setRowData?.(rowIndex, { ...newValue });
              }
              else {
                editableFormRef.current?.setRowData?.(rowIndex, { ...oldRow, days: 0 });
              }
            },
          }
        }
      }
    },
    {
      dataIndex: 'mode',
      title: '库存方式',
      valueType: 'select',
      valueEnum: { '急冻+冷存': { text: '急冻+冷存' } },
      formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      },
    },
    {
      dataIndex: 'shed', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '存放库位'
    },
    {
      dataIndex: 'quantity', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '数量', valueType: 'digit',
      fieldProps: (_, { rowIndex }) => {

        return {
          onChange: (value) => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            console.log(value, oldRow)
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
      dataIndex: 'norms', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '规格', valueType: 'digit',
      fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
      dataIndex: 'weight', formItemProps: {
        required: true,
        rules: [{
          required: true
        }]
      }, title: '重量（KG）', valueType: 'digit',
      fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
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
      fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
      dataIndex: 'amountDc', title: '冻存费', valueType: 'digit', fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
      dataIndex: 'amountJd', title: '急冻费', valueType: 'digit', fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
    },
    {
      dataIndex: 'amountBy', title: '搬运费', valueType: 'digit', fieldProps: (_, { rowIndex, }) => {
        return {
          onChange: () => {
            const oldRow = editableFormRef.current?.getRowData!(rowIndex);
            const newValue = getCalcValue(oldRow);
            editableFormRef.current?.setRowData?.(rowIndex, {
              ...newValue
            });
          },
        };
      },
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
  ];


  const [form] = Form.useForm<any>();
  const handleClick = async () => {
    const value = form.getFieldsValue();
    const newkucun: any[] = [];
    try {
      kucun.forEach((kucunitem) => {
        const find = value?.details.find(
          (mingxi: IWareHouseDetails) =>
            mingxi.batch === kucunitem.batch &&
            mingxi.name === kucunitem.name &&
            mingxi.shed === kucunitem.shed &&
            value.customer === kucunitem.customer,
        );

        if (find) {
          if (toNumber(find.weight) < toNumber(kucunitem.weight)) {
            console.log('find', find);
            console.log('kucunitem', kucunitem);
            newkucun.push({
              ...kucunitem,
              weight: toNumber(kucunitem.weight) - toNumber(find.weight),
              quantity: toNumber(kucunitem.quantity) - toNumber(find.quantity),
            });
          }
          else if (toNumber(find.weight) === toNumber(kucunitem.weight)) { } else {
            throw new Error('出库重量超出库存！');
          }
        } else {
          newkucun.push(kucunitem);
        }
      });
      const newValue = {
        ...value,
        name: uniq(map(value?.details, (x) => x.name)).join('、'),
        batch: uniq(map(value?.details, (x) => x.batch)).join('、'),
        bizType: '出库',
        shed: uniq(map(value?.details, (x) => x.shed)).join('、'),
        quantity: sum(value?.details?.map((x: IWareHouseDetails) => toNumber(x.quantity))),
        weight: sum(value?.details?.map((x: IWareHouseDetails) => toNumber(x.weight))),
        norms: 10
      }
      setkucun(newkucun);
      setkucunmingxi([...kucunmingxi, newValue]);
      message.success('出库成功');
      form.resetFields();
      return true;
    } catch (error) {
      message.error('出库重量超出库存！');
    }
  };

  return (
    <DrawerForm
      form={form}
      width="90%"
      initialValues={{
        bizId: `C` + batch + '001',
        batch,
        bizDate: dayjs().format('YYYY-MM-DD')
      }}
      submitter={{
        render: (props, defaultDoms) => {
          return [...defaultDoms];
        },
      }}
      trigger={
        <Button type="primary">
          <LogoutOutlined />
          新建出库单
        </Button>
      }
      onFinish={handleClick}
      title="新建出库单"
    >
      <ProForm.Group>
        <ProFormText name="bizId" label="出库单号" disabled width="md" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText name="customer" label="出货单位/客户" required rules={[{ required: true }]} width="md" />
        <ProFormText name="bizOwner" label="制单人" required rules={[{ required: true }]} width="md" />
        <ProFormText name="bizDate" label="出货时间" required rules={[{ required: true }]} width="md"></ProFormText>
      </ProForm.Group>
      <EditableProTable
        editableFormRef={editableFormRef}
        name="details"
        rowKey="id"
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
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
            const amount = sum(map(dataSource, i => i.amount || 0))
            form.setFieldValue('quantity', quantity)
            form.setFieldValue('weight', weight)
            form.setFieldValue('amount', amount)
          },
        }}
        columns={cols}
      />
      <ProForm.Group>
        <ProFormText name="quantity" readonly label="总数量" />
        <ProFormText name="weight" readonly label="总重量" />
        <ProFormText name="amount" label="总金额" />
      </ProForm.Group>
    </DrawerForm>
  );
};
