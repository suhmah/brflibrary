/* eslint-disable import/no-extraneous-dependencies */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (data: any) => {
  const newDataUser = JSON.stringify(data);

  await AsyncStorage.setItem('@brfl1', newDataUser);
};

export const getData = async () => {
  const value: string | null = await AsyncStorage.getItem('@brfl1');

  const newValue = value && JSON.parse(value);

  return newValue;
};
