interface IIventory {
    id?: string;
    name: string;
    shed: string; // 库
    batch?: string; // 批次
    days?: number; // 天数
    quantity: number;
    norms: number; // 规格
    weight: number; //重量
    customer: string // 客户
   
}
interface IWareHouse {
    bizOwner: string;
    bizId: string; // 单据号
    shed: string; // 库房
    bizDate: string // 业务日期
    bizType: string // 出/入库
    name: string;
    batch: string;
    quantity: number;
    norms: number; // 规格
    weight: number; //总重量
    amount?:number; // 总金额
    customer: string // 客户
    desc?: string; // 备注
    details: IWareHouseDetails[]; // 明细
    days?: number
}
interface IWareHouseDetails {
    id: string;
    bizId: string;//单据号
    bizDate?: string // 业务日期
    bizType: string // 出/入库
    name: string;
    batch: string;
    quantity: number;
    days?: number; // 天数
    norms: number; // 规格
    weight: number; // 重量
    price?: number; //单价
    amountJd?: number;//冻存费
    amountDc?: number;//急冻费
    amountBy?: number;//搬运费
    amount?: number;//合计
    desc?: string;
    shed: string;
    customer: string;
    mode: string // 库存方式
}
