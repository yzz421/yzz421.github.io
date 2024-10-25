// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';
import * as shuju from './data';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [kucun, setkucun] = useState<IIventory[]>(shuju.kucun);
  const [kucunmingxi, setkucunmingxi] = useState<any[]>(shuju.churukumingxi);

  return {
    name,
    setName,
    kucun,
    setkucun,
    kucunmingxi,
    setkucunmingxi,
  };
};

export default useUser;
