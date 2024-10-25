import * as XLSX from 'xlsx';
import nzh from 'nzh'

export function generates(data: IWareHouse) {
  // const rows = [
  //   {
  //     业务日期: {
  //       v: '2024',
  //       border: {
  //         top: {
  //           color: 'blue',
  //         },
  //       },
  //     },
  //     业务单号: 'c24030',
  //     客户名称: '曾令海',
  //     冻存商品: '白管',
  //     储存方式: '急冻+冷存',
  //     业务类型: '入库',
  //     存放批次: '20240321',
  //     存放库位: 1,
  //     储存数量: 20,
  //     储存重量: 300.0,
  //     货物规格: 15,
  //   },
  // ];

  const worksheet = XLSX.utils.json_to_sheet([]);
  const workbook = XLSX.utils.book_new();
  const aoa_data: any[] = [
    ['单据', data.bizId],
    ['出货单位/客户', data.customer],
    [],
    ['品名', '批次', '存储方式', '库位', '数量', '重量', '规格', '天数', '单价', '冻存费', '急冻费', '搬运费', '合计'],
  ];
  data?.details.forEach(i=> {
    const val = [i.name, i.batch, i.mode, i.shed, i.quantity, i.weight, i.norms, i.days, i.price, i.amountDc, i.amountJd, i.amountBy, i.amount]
    aoa_data.push(val)
  })
  XLSX.utils.sheet_add_aoa(worksheet, aoa_data, {origin: -1})
  XLSX.utils.sheet_add_aoa(worksheet, [[],[`合计大写：${nzh.cn.encodeB(data.amount!)}元`]], {
    origin: -1,
  });
  XLSX.utils.book_append_sheet(workbook, worksheet, '出库单');
  /* calculate column width */
  /* create an XLSX file and try to save to Presidents.xlsx */
  XLSX.writeFile(workbook, '出库单.xlsx', { compression: true });
}
