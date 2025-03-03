import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{data ? JSON.stringify(data) : "로딩 중..."}</Text>
    </View>
  );
};
export default DataFetcher;
