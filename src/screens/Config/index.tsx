import { View } from 'react-native';
import { Header } from '../../components/Header';
import { SubHeader } from '../../components/SubHeader';
import { ActionItem } from '../../components/ActionItem';
import { storage } from '../../config/storage';
import { useEffect, useState } from 'react';

export function Config() {
  const [list, setList] = useState<string[]>([]);

  const getList = (): void => {
    const list = JSON.parse(storage.getString('list') || '[]');
    setList(list);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <View>
      <Header />
      <SubHeader title="Remover ação" />
      {list.map((item: string) => (
        <ActionItem key={item} symbol={item} type="remove" callback={getList} />
      ))}
    </View>
  );
}